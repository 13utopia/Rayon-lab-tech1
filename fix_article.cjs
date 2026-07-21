const fs = require('fs');

let content = fs.readFileSync('src/ArticleDetailPage.jsx', 'utf-8');

// 1. Add relatedProduct logic
if (!content.includes('const relatedProduct =')) {
  content = content.replace(
    "return (",
    `const relatedProduct = products.find(p => title.toLowerCase().includes(p.name.toLowerCase().split(' ')[0])) || products[0];\n\n  return (`
  );
}

// 2. Fix the corrupted DOM
const correctRender = `  return (
    <div className="article-detail-page">
      {/* Back Button Navigation */}
      <div className="article-nav-header">
        <button className="article-back-btn" onClick={onBack}>
          <span className="back-arrow">←</span> Back to Articles
        </button>
      </div>

      {/* Article Header Hero */}
      <header className="article-hero-section">
        <div className="article-hero-container">
          <span className="article-category-badge">{content.category}</span>
          <h1 className="article-main-title">{title}</h1>
          <p className="article-subtitle">{content.subtitle}</p>

          <div className="article-meta-card">
            <div className="author-avatar-wrap">
              <div className="author-initials">{content.author.split(' ').map(n => n[0]).join('')}</div>
            </div>
            <div className="author-meta-info">
              <span className="author-name">{content.author}</span>
              <span className="author-role">{content.role}</span>
            </div>
            <div className="article-stats">
              <span className="stat-date">{content.publishDate}</span>
              <span className="stat-divider">•</span>
              <span className="stat-read-time">{content.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Banner Image */}
      <div className="article-main-image-wrap">
        <img src={post.image || defaultHero} alt={post.title} className="article-main-image" />
      </div>

      {/* Article Body Content */}
      <main className="article-body-content">
        <div className="article-rich-text">
          
          {/* Product Info Widget */}
          <div className="blog-product-widget">
            <ul className="widget-info-list">
              <li><strong>CALL NOW</strong><span>: <a href="tel:+919974089504" style={{color: 'inherit', textDecoration: 'none'}}>+91-9974089504</a></span></li>
              <li><strong>WHATSAPP</strong><span>: <a href="https://wa.me/919974089504" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>(+91-9974089504)</a></span></li>
              <li><strong>Availability</strong><span>: <Link to={\`/products/\${relatedProduct.id}\`} style={{color: 'inherit', textDecoration: 'underline'}}>In Stock</Link></span></li>
              <li><strong>Eligible Region</strong><span style={{textTransform: 'capitalize'}}>: {region}</span></li>
              <li><strong>Payment Methods</strong><span>: Cash, COD, DirectDebit</span></li>
            </ul>
            <button className="widget-quote-btn" onClick={onGetQuote}>
              Get a Quote
            </button>
          </div>

          {/* Render SEO specific HTML layout */}
          <div className="seo-content-block" dangerouslySetInnerHTML={{ __html: content.contentBody }}>
          </div>
        </div>
      </main>

      {/* Related Articles Footer Widget */}
      <footer className="related-articles-section">`;

content = content.replace(/return \([\s\S]*?\<footer className="related-articles-section">/, correctRender);

fs.writeFileSync('src/ArticleDetailPage.jsx', content);
console.log('Fixed ArticleDetailPage.jsx');
