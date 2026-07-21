const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') console.log('PAGE ERROR:', msg.text());
  });
  page.on('pageerror', err => console.log('PAGE ERROR EVENT:', err.message));

  try {
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
    console.log('Home page loaded. Clicking About Us...');
    await page.click('a[href="/about-us"]');
    await new Promise(r => setTimeout(r, 1000));
    
    console.log('Clicking Portfolio...');
    await page.click('a[href="/portfolio"]');
    await new Promise(r => setTimeout(r, 1000));

    console.log('Clicking Blog...');
    await page.click('a[href="/updates"]');
    await new Promise(r => setTimeout(r, 1000));

  } catch (e) {
    console.log('Nav error:', e.message);
  }
  await browser.close();
})();
