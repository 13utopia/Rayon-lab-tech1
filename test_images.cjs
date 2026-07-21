async function check() {
  const html = await fetch('https://www.rayon-labtech.com/updates/laboratory-racks-supplier-in-delhi').then(r => r.text());
  const cheerio = require('cheerio');
  const $ = cheerio.load(html);
  console.log($('.contDiv').html());
}
check();
