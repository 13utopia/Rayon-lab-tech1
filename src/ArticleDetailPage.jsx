import SEO from './SEO';
import React from 'react';
import './article-detail.css';
import defaultHero from './assets/lab-furniture-19.webp';
import seoArticles from './data/seoArticles.json';
import { Link } from 'react-router-dom';
import { products } from './data/products';

const ArticleDetailPage = ({ post, onBack, allPosts, onSelectArticle, onGetQuote }) => {
  // Find the SEO article content
  const seoData = seoArticles.find(a => a.id === post.id);
  
  // Extract region from title (e.g. "... Supplier in Delhi" -> "Delhi")
  const title = seoData ? seoData.title : post.title;
  let region = "India";
  const regionMatch = title.match(/(?:in|supplier in|manufacturer in)\s+([A-Za-z\s]+)$/i);
  if (regionMatch && regionMatch[1]) {
    region = regionMatch[1].trim();
  }
  
  const content = {
    category: 'Product Update',
    author: 'Rayon Editorial Team',
    role: 'Update Logs',
    readTime: '3 min read',
    publishDate: post.date,
    subtitle: title,
    contentBody: seoData ? seoData.content : 'Content not available.'
  };

  // Filter out the current article to show other articles as related recommendations
  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3); // Show 3 related articles

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [post.id]);

  // Determine related product
  const relatedProduct = products.find(p => p.title && title && title.toLowerCase().includes(p.title.toLowerCase().split(' ')[0])) || products[0];

    return (
    <div className="article-detail-page">
      <SEO title={post.title} description={post.excerpt || post.title} />
      
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
              <li><strong>CALL NOW</strong><span>: <a href="tel:+919974089504" style={{color: '#0056b3', textDecoration: 'underline', fontWeight: '600'}}>+91-9974089504</a></span></li>
              <li><strong>WHATSAPP</strong><span>: <a href="https://wa.me/919974089504" target="_blank" rel="noopener noreferrer" style={{color: '#0056b3', textDecoration: 'underline', fontWeight: '600'}}>(+91-9974089504)</a></span></li>
              <li><strong>Availability</strong><span>: <Link to={`/products/${relatedProduct.id}`} style={{color: '#0056b3', textDecoration: 'underline', fontWeight: '600'}}>In Stock</Link></span></li>
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
      <footer className="related-articles-section">
        <div className="related-container">
          <h3 className="related-section-title">Related Articles</h3>
          <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {relatedPosts.map((relatedPost) => (
              <div
                key={relatedPost.id}
                className="related-post-card"
                onClick={() => onSelectArticle(relatedPost)}
                style={{ cursor: 'pointer', background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
              >
                <div className="related-post-image-wrap" style={{ height: '200px', overflow: 'hidden' }}>
                  <img src={relatedPost.image} alt={relatedPost.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="related-post-info" style={{ padding: '20px' }}>
                  <span className="related-post-date" style={{ fontSize: '0.85rem', color: '#666' }}>{relatedPost.date}</span>
                  <h4 className="related-post-title" style={{ marginTop: '10px', fontSize: '1.1rem', color: '#1a1a1a', lineHeight: '1.4' }}>{relatedPost.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArticleDetailPage;
