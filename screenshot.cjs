const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  try {
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0', timeout: 15000 });
    await page.screenshot({ path: 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\bb42f56d-4f27-4abe-a955-d4d4c6ba1198\\scratch\\screenshot.png', fullPage: true });
    console.log('Screenshot saved to screenshot.png');
  } catch (e) {
    console.log('Nav error:', e.message);
  }
  await browser.close();
})();
