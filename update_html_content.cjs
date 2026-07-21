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
  console.log('Starting HTML content scraper...');
  let articleLinks = new Set();
  
  for (let p = 1; p <= 10; p++) {
    const listUrl = p === 1 ? `${BASE_URL}/updates.html` : `${BASE_URL}/updates.html?p=${p}`;
    const html = await fetchPageHtml(listUrl);
    if (!html) continue;

    const $ = cheerio.load(html);
    $('a').each((i, el) => {
      const href = $(el).attr('href');
      if (href && href.startsWith('https://www.rayon-labtech.com/updates/')) {
        articleLinks.add(href);
      }
    });
  }

  const linksArray = Array.from(articleLinks);
  console.log(`Found ${linksArray.length} unique articles. Fetching HTML content...`);
  
  const dataDir = path.join(__dirname, 'src', 'data');
  const seoFile = path.join(dataDir, 'seoArticles.json');
  let seoArticles = [];
  if (fs.existsSync(seoFile)) {
    seoArticles = JSON.parse(fs.readFileSync(seoFile, 'utf-8'));
  }

  for (let i = 0; i < linksArray.length; i++) {
    const url = linksArray[i];
    console.log(`[${i + 1}/${linksArray.length}] Fetching HTML from ${url}...`);
    
    const html = await fetchPageHtml(url);
    if (!html) continue;

    const $ = cheerio.load(html);
    
    let title = $('h1').first().text().trim() || $('.pageTitle h3').first().text().trim();
    if (!title) title = $('title').text().split('-')[0].trim();
    
    // Find the corresponding article in seoArticles.json
    const article = seoArticles.find(a => a.title === title || url.endsWith(a.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')));
    
    if (article) {
      // Clean it up slightly but preserve HTML
      $('.reqCallback').remove();
      $('.shareBtn').remove();
      $('form').remove();
      
      const mainContentContainer = $('.contDiv').length ? $('.contDiv') : $('.postDetails');
      if (mainContentContainer.length) {
        mainContentContainer.find('table').remove(); // pricing tables removed to be safe
        article.content = mainContentContainer.html().trim(); // Use .html() instead of .text()
      }
    }
  }

  fs.writeFileSync(seoFile, JSON.stringify(seoArticles, null, 2), 'utf-8');
  console.log(`\n✅ Successfully updated seoArticles.json with HTML content!`);
}

run();
