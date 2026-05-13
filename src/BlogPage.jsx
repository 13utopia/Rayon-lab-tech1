import React from 'react';
import './blog-page.css';
import labBannerBg from './assets/hero.png.png';

// Import images for blog posts
import blog1 from './assets/blog1.png';
import blog2 from './assets/blog2.png';
import blog3 from './assets/blog3.png';
import blog4 from './assets/serve-blog1.png';
import blog5 from './assets/serve-blog2.png';
import blog6 from './assets/serve-blog3.png';
import blog7 from './assets/about-blog1.png';
import blog8 from './assets/about-blog2.png';
import blog9 from './assets/about-blog3.png';

const blogPosts = [
  {
    id: 1,
    date: '4 NOV, 2024',
    title: 'Hospital Labs Focused on Patients Begin Here.',
    image: blog1
  },
  {
    id: 2,
    date: '4 NOV, 2024',
    title: 'Exploring Anatomy Methods in the Lab',
    image: blog2
  },
  {
    id: 3,
    date: '4 NOV, 2024',
    title: 'A Laboratory Manual for Contemporary Specimen...',
    image: blog3
  },
  {
    id: 4,
    date: '4 NOV, 2024',
    title: 'A Guide for Remote Patient Monitoring in a Lab.',
    image: blog4
  },
  {
    id: 5,
    date: '4 NOV, 2024',
    title: 'We will discuss the progress of our research.',
    image: blog5
  },
  {
    id: 6,
    date: '4 NOV, 2024',
    title: 'Osmolality Testing\'s Significance in Nephrology',
    image: blog6
  },
  {
    id: 7,
    date: '4 NOV, 2024',
    title: 'The study focuses on the process of drug...',
    image: blog7
  },
  {
    id: 8,
    date: '4 NOV, 2024',
    title: 'Providing Resources for Researchers in Developing.',
    image: blog8
  },
  {
    id: 9,
    date: '4 NOV, 2024',
    title: 'Blood Protein Signatures Change Across Lifespan',
    image: blog9
  }
];

const BlogPage = () => {
  return (
    <div className="blog-page-v2">
      {/* Banner Section */}
      <section className="blog-banner" style={{ backgroundImage: `url(${labBannerBg})` }}>
        <div className="blog-banner-overlay">
          <div className="blog-banner-content">
            <h1 className="blog-banner-title">Our Articles</h1>
            <p className="blog-banner-desc">
              Modular working tables designed for ultimate flexibility
              and safety in modern scientific environments.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <div className="blog-grid-container">
        <div className="blog-posts-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-post-card">
              <div className="blog-post-image-wrap">
                <img src={post.image} alt={post.title} className="blog-post-image" />
              </div>
              <div className="blog-post-info">
                <div className="blog-post-meta">
                  <span className="blog-post-date">{post.date}</span>
                  <span className="blog-post-divider">/</span>
                </div>
                <h3 className="blog-post-title">{post.title}</h3>
                <div className="blog-post-btn-wrap">
                  <button className="blog-post-btn" aria-label="Read More">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

    </div>
  );
};

export default BlogPage;
