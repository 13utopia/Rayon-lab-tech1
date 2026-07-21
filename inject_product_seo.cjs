const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf8');
content = content.replace(
  '<div className="product-page-container">',
  '<div className="product-page-container">\n      <SEO title={`${product.title} - Rayon Lab Tech`} description={product.heroSubtitle} />'
);
fs.writeFileSync('src/App.jsx', content);
console.log('Injected SEO into ProductPage');
