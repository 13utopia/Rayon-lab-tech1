import React from 'react';
import './blog-page.css';
import labBannerBg from './assets/labimage.png';

const BlogPage = ({ blogFeatured, blogSide1, blogSide2, blogSide3, CalendarIcon, UserIcon }) => {
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

    </div>
  );
};

export default BlogPage;
