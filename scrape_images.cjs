const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
// using global fetch available in Node >= 18

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

async function downloadImage(url, dest) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buffer);
    return true;
  } catch (err) {
    console.error(`Failed to download image ${url}:`, err.message);
    return false;
  }
}

async function run() {
  console.log('Starting image scraper...');
  let articleLinks = new Set();
  
  // 1. Scrape all article URLs from pagination pages
  for (let p = 1; p <= 10; p++) {
    console.log(`Scraping index page ${p}...`);
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
  console.log(`Found ${linksArray.length} unique articles. Fetching images...`);
  
  const dataDir = path.join(__dirname, 'src', 'data');
  const seoFile = path.join(dataDir, 'seoArticles.json');
  let seoArticles = [];
  if (fs.existsSync(seoFile)) {
    seoArticles = JSON.parse(fs.readFileSync(seoFile, 'utf-8'));
  }

  const assetsDir = path.join(__dirname, 'public', 'seo_images');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  for (let i = 0; i < linksArray.length; i++) {
    const url = linksArray[i];
    console.log(`[${i + 1}/${linksArray.length}] Fetching images from ${url}...`);
    
    const html = await fetchPageHtml(url);
    if (!html) continue;

    const $ = cheerio.load(html);
    
    // Extract title to match with seoArticles.json
    let title = $('h1').first().text().trim() || $('.pageTitle h3').first().text().trim();
    if (!title) title = $('title').text().split('-')[0].trim();
    
    // Find images
    let bestImg = null;
    $('img').each((i, el) => {
      let src = $(el).attr('src');
      if (src && !src.includes('b.gif') && !src.includes('logo')) {
        if (!src.startsWith('http')) {
           src = src.startsWith('/') ? BASE_URL + src : BASE_URL + '/' + src;
        }
        bestImg = src;
      }
    });

    // Find the corresponding article in seoArticles.json
    const article = seoArticles.find(a => a.title === title || url.endsWith(a.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')));
    
    if (bestImg && article) {
      const ext = path.extname(new URL(bestImg).pathname) || '.jpg';
      const filename = `seo_${article.id}${ext}`;
      const destPath = path.join(assetsDir, filename);
      
      const success = await downloadImage(bestImg, destPath);
      if (success) {
        article.image = `/seo_images/${filename}`;
        console.log(` -> Downloaded ${bestImg} for ID ${article.id}`);
      }
    } else {
      console.log(` -> No image found or article match failed for ${url}`);
    }
  }

  fs.writeFileSync(seoFile, JSON.stringify(seoArticles, null, 2), 'utf-8');
  console.log(`\n✅ Successfully updated seoArticles.json with image paths!`);
}

run();
