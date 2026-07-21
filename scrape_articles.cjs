const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const BASE_URL = 'https://www.rayon-labtech.com';

async function fetchPageHtml(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    return await res.text();
  } catch (err) {
    console.error(`Failed to fetch ${url}:`, err.message);
    return null;
  }
}

async function run() {
  console.log('Starting scraper...');
  let articleLinks = new Set();
  
  // 1. Scrape all article URLs from pagination pages
  for (let p = 1; p <= 10; p++) {
    console.log(`Scraping index page ${p}...`);
    const listUrl = p === 1 ? `${BASE_URL}/updates.html` : `${BASE_URL}/updates.html?p=${p}`;
    const html = await fetchPageHtml(listUrl);
    if (!html) continue;

    const $ = cheerio.load(html);
    // Find all links to updates
    $('a').each((i, el) => {
      const href = $(el).attr('href');
      if (href && href.startsWith('https://www.rayon-labtech.com/updates/')) {
        articleLinks.add(href);
      }
    });
  }

  const linksArray = Array.from(articleLinks);
  console.log(`Found ${linksArray.length} unique articles. Processing each...`);
  
  // 2. Fetch each article content
  const scrapedArticles = [];
  let idCounter = 10; // Start at 10 to avoid conflicting with premium articles (1-9)

  // Ensure data directory exists
  const dataDir = path.join(__dirname, 'src', 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  for (let i = 0; i < linksArray.length; i++) {
    const url = linksArray[i];
    console.log(`[${i + 1}/${linksArray.length}] Fetching ${url}...`);
    
    const html = await fetchPageHtml(url);
    if (!html) continue;

    const $ = cheerio.load(html);
    
    // Extract title
    let title = $('h1').first().text().trim() || $('.pageTitle h3').first().text().trim();
    if (!title) title = $('title').text().split('-')[0].trim();
    
    // Extract content
    // Removing some noisy elements like sidebars or forms
    $('.reqCallback').remove();
    $('.shareBtn').remove();
    $('form').remove();
    
    let content = '';
    const mainContentContainer = $('.contDiv').length ? $('.contDiv') : $('.postDetails');
    
    if (mainContentContainer.length) {
      // Clean it up
      mainContentContainer.find('table').remove(); // if there are pricing tables
      content = mainContentContainer.text().replace(/\s+/g, ' ').trim();
    } else {
      // Fallback
      content = $('body').text().substring(0, 1000).replace(/\s+/g, ' ').trim();
    }

    scrapedArticles.push({
      id: idCounter++,
      title: title,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).toUpperCase(), // e.g. 21 JUL, 2026
      content: content,
      // Provide a generic image path for SEO articles
      imagePath: "./assets/Laboratory-Furniture-Supplier-58.webp" // Used as a fallback hero/card image
    });
    
    // Throttle slightly to not hammer the server
    await new Promise(r => setTimeout(r, 50)); 
  }

  // 3. Save to JSON
  const outPath = path.join(dataDir, 'seoArticles.json');
  fs.writeFileSync(outPath, JSON.stringify(scrapedArticles, null, 2), 'utf-8');
  
  console.log(`\n✅ Successfully scraped and saved ${scrapedArticles.length} articles to src/data/seoArticles.json!`);
}

run();
