const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('PAGE ERROR:', msg.text());
    }
  });

  page.on('pageerror', err => {
    console.log('PAGE ERROR EVENT:', err.message);
  });

  try {
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0', timeout: 10000 });
  } catch (e) {
    console.log('Nav error:', e.message);
  }

  await browser.close();
})();
