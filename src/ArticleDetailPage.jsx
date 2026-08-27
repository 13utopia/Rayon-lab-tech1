import SEO from './SEO';
import React, { useEffect, useState } from 'react';
import './article-detail.css';
import defaultHero from './assets/lab-furniture-19.webp';
import seoArticles from './data/seoArticles.json';
import { Link } from 'react-router-dom';
import { products } from './data/products';
import { blogPostingJsonLd } from './client/schema';

const ArticleDetailPage = ({ post, onBack, allPosts = [], onSelectArticle, onGetQuote }) => {
  if (!post) {
    return (
      <div className="article-detail-page" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2>Update not found</h2>
        <button className="article-back-btn" onClick={onBack} style={{ marginTop: '20px' }}>
          ← Back to Updates
        </button>
      </div>
    );
  }

  const isFreshness = post.isFreshness || post.id?.startsWith('upd-') || Boolean(post.publishedAt);
  const seoData = !isFreshness ? seoArticles.find(a => a.id === post.id) : null;
  
  // Extract title and region
  const title = post.title || (seoData ? seoData.title : 'Rayon Lab Tech Update');
  let region = post.location || "Gujarat";
  const regionMatch = title.match(/(?:in|supplier in|manufacturer in)\s+([A-Za-z\s]+)$/i);
  if (regionMatch && regionMatch[1]) {
    region = regionMatch[1].trim();
  }

  const publishDate = post.date || post.dateLabel || (post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "Recent");
  
  const content = {
    category: post.category || (isFreshness ? 'Facility Dispatch & Quality Log' : 'Product Update'),
    author: 'Rayon Quality Team',
    role: isFreshness ? 'Plant Log' : 'Update Logs',
    readTime: '2 min read',
    publishDate: publishDate,
    subtitle: title,
    contentBody: isFreshness ? '' : (seoData ? seoData.content : 'Content not available.')
  };

  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [post.id]);

  // Determine related product
  const relatedProduct = products.find(p => p.title && title && title.toLowerCase().includes(p.title.toLowerCase().split(' ')[0])) || products[0];

  const canonicalUrl = `https://rayonlabtech.in/updates/${post.slug || post.id}`;
  const schema = blogPostingJsonLd({
    siteUrl: 'https://rayonlabtech.in',
    brand: 'Rayon Lab Tech',
    listPath: '/updates',
    post: {
      id: post.slug || post.id,
      title: title,
      publishedAt: post.publishedAt || new Date().toISOString(),
      image: post.image,
      summary: post.summary || (seoData ? seoData.title : title)
    }
  });

  return (
    <div className="article-detail-page">
      <SEO
        title={`${title} | Rayon Lab Tech`}
        description={post.summary || post.excerpt || `${title} - Rayon Lab Tech laboratory equipment & furniture manufacturing.`}
        canonical={canonicalUrl}
        schemaJson={schema}
      />
      
      {/* Back Button Navigation */}
      <div className="article-nav-header">
        <button className="article-back-btn" onClick={onBack}>
          <span className="back-arrow">←</span> Back to Updates
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
              <div className="author-initials">RLT</div>
            </div>
            <div className="author-meta-info">
              <span className="author-name">{content.author}</span>
              <span className="author-role">{content.role}</span>
            </div>
            <div className="article-stats">
              <span className="stat-date">{content.publishDate}</span>
              <span className="stat-divider">•</span>
              <span className="stat-read-time">{content.readTime}</span>
              {post.location && (
                <>
                  <span className="stat-divider">•</span>
                  <span className="stat-location" style={{ color: '#0056b3', fontWeight: 600 }}>📍 {post.location}</span>
                </>
              )}
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
              <li><strong>CALL NOW</strong><span>: <a href="tel:+919909030607" style={{color: '#0056b3', textDecoration: 'underline', fontWeight: '600'}}>+91 9909030607</a></span></li>
              <li><strong>WHATSAPP</strong><span>: <a href="https://wa.me/919909030607" target="_blank" rel="noopener noreferrer" style={{color: '#0056b3', textDecoration: 'underline', fontWeight: '600'}}>(+91 9909030607)</a></span></li>
              <li><strong>Availability</strong><span>: <Link to={`/products/${relatedProduct.id}`} style={{color: '#0056b3', textDecoration: 'underline', fontWeight: '600'}}>In Stock / Custom Fabricated</Link></span></li>
              <li><strong>Eligible Region</strong><span style={{textTransform: 'capitalize'}}>: {region}</span></li>
              <li><strong>Payment Methods</strong><span>: Direct Transfer, NEFT/RTGS, Commercial PO</span></li>
            </ul>
            <button className="widget-quote-btn" onClick={onGetQuote}>
              Get a Quote
            </button>
          </div>

          {/* Freshness Feed Content Block */}
          {isFreshness ? (
            <div className="freshness-update-content" style={{ marginTop: '24px', lineHeight: '1.8', fontSize: '1.1rem', color: '#2d3748' }}>
              <p style={{ fontSize: '1.15rem', fontWeight: '500', color: '#1a202c', marginBottom: '20px' }}>
                {post.summary || `${post.title}. Ready for deployment across industrial and educational laboratories.`}
              </p>
              
              <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #0056b3', marginBottom: '24px' }}>
                <h3 style={{ marginTop: 0, marginBottom: '12px', fontSize: '1.25rem', color: '#0f172a' }}>Consignment & Specification Details</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0 }}>
                  {post.standard && <li><strong>Quality Standard:</strong> {post.standard}</li>}
                  {post.spec && <li><strong>Material Specification:</strong> {post.spec}</li>}
                  {post.sizeRange && <li><strong>Dimension / Size Profile:</strong> {post.sizeRange}</li>}
                  {post.location && <li><strong>Manufacturing / QC Hub:</strong> {post.location}, Ahmedabad</li>}
                </ul>
              </div>

              <p style={{ marginBottom: '20px' }}>
                {post.body || `Rayon Lab Tech regularly inspects and dispatches high-grade laboratory workstations, fume extraction equipment, and safety furniture compliant with SEFA and ISO requirements. All units undergo stringent dimensional validation and corrosion resistance testing.`}
              </p>

              <div style={{ padding: '20px', backgroundColor: '#eef2ff', borderRadius: '10px', marginTop: '20px' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#1e3a8a' }}>Need customized laboratory infrastructure?</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#334155' }}>
                  Our engineering team assists with turnkey CAD layouts, 3D modular lab design, fume exhaust ducting calculation, and direct factory supply across India.
                </p>
              </div>
            </div>
          ) : (
            /* Render SEO specific HTML layout for legacy articles */
            <div className="seo-content-block" dangerouslySetInnerHTML={{ __html: content.contentBody }} />
          )}

        </div>
      </main>

      {/* Related Articles Footer Widget */}
      {relatedPosts.length > 0 && (
        <footer className="related-articles-section">
          <div className="related-container">
            <h3 className="related-section-title">Related Updates & Articles</h3>
            <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {relatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  className="related-post-card"
                  onClick={() => onSelectArticle(relatedPost)}
                  style={{ cursor: 'pointer', background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
                >
                  <div className="related-post-image-wrap" style={{ height: '200px', overflow: 'hidden' }}>
                    <img src={relatedPost.image || defaultHero} alt={relatedPost.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="related-post-info" style={{ padding: '20px' }}>
                    <span className="related-post-date" style={{ fontSize: '0.85rem', color: '#666' }}>{relatedPost.date || relatedPost.dateLabel}</span>
                    <h4 className="related-post-title" style={{ marginTop: '10px', fontSize: '1.1rem', color: '#1a1a1a', lineHeight: '1.4' }}>{relatedPost.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default ArticleDetailPage;
