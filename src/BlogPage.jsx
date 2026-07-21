import SEO from './SEO';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './blog-page.css';
import labBannerBg from './assets/lab-working-table-62.webp';

// Import scraped SEO articles
import seoArticles from './data/seoArticles.json';

// Dynamically import ONLY the newly generated images
const imageModules = import.meta.glob('./assets/new_gen_*.png', { eager: true, import: 'default' });
const imageArray = Object.values(imageModules);

export const generateSlug = (title) => {
  if (!title) return '';
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

// Helper function to match image filename to article title
function getMatchedImage(title) {
  if (imageArray.length === 0) return labBannerBg;
  
  const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, ' ').split(' ').filter(w => w.length > 2);
  const titleWords = normalize(title);
  
  let bestMatch = null;
  let bestScore = 0;
  
  for (const imgPath of imageArray) {
    const filename = imgPath.split('/').pop() || '';
    const imgWords = normalize(filename);
    
    let score = 0;
    for (const tw of titleWords) {
      if (imgWords.includes(tw)) score += 2;
      for (const iw of imgWords) {
         if (tw.includes(iw) || iw.includes(iw)) score += 0.5;
      }
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestMatch = imgPath;
    }
  }
  
  return bestMatch || imageArray[title.length % imageArray.length];
}

// Map SEO articles to have scraped images, falling back to matched premium AI images
export const blogPosts = seoArticles.map(article => ({
  id: article.id,
  date: article.date,
  title: article.title,
  // If the article has an authentic image scraped from the legacy site, use it!
  // Otherwise, fallback to the AI matching logic.
  image: article.image || getMatchedImage(article.title)
}));

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="blog-page-v2">
      {/* Banner Section */}
      <section className="blog-banner" style={{ backgroundImage: `url(${labBannerBg})` }}>
        <div className="blog-banner-overlay">
          <div className="blog-banner-content">
            <h1 className="blog-banner-title">Our Articles & Updates</h1>
            <p className="blog-banner-desc">
              Explore our latest insights, case studies, and updates on laboratory infrastructure across India.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <div className="blog-grid-container">
        <div className="blog-posts-grid">
          {currentPosts.map((post) => (
            <div key={post.id} className="blog-post-card-wrap">
              <Link to={`/updates/${generateSlug(post.title)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article className="blog-post-card">
                  <div className="blog-post-image-wrap">
                    <img src={post.image} alt={post.title} className="blog-post-image" />
                  </div>
                  <div className="blog-post-info">
                    <div className="blog-post-meta">
                      <span className="blog-post-date">{post.date}</span>
                      <span className="blog-post-divider">/</span>
                    </div>
                    <h3 className="blog-post-title">{post.title}</h3>
                  </div>
                </article>
              </Link>
              <div className="blog-post-btn-wrap">
                <Link to={`/updates/${generateSlug(post.title)}`}>
                  <button className="blog-post-btn" aria-label="Read More">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="pagination-controls" style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '40px', paddingBottom: '40px' }}>
            <button 
              onClick={() => paginate(currentPage - 1)} 
              disabled={currentPage === 1}
              style={{ padding: '8px 16px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', backgroundColor: currentPage === 1 ? '#e0e0e0' : '#0056b3', color: currentPage === 1 ? '#888' : '#fff', border: 'none', borderRadius: '4px' }}
            >
              Previous
            </button>
            <span style={{ padding: '8px 16px', fontWeight: 'bold' }}>
              Page {currentPage} of {totalPages}
            </span>
            <button 
              onClick={() => paginate(currentPage + 1)} 
              disabled={currentPage === totalPages}
              style={{ padding: '8px 16px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', backgroundColor: currentPage === totalPages ? '#e0e0e0' : '#0056b3', color: currentPage === totalPages ? '#888' : '#fff', border: 'none', borderRadius: '4px' }}
            >
              Next
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default BlogPage;
