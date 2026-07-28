import SEO from './SEO';
import React, { useState } from 'react';
import './gallery-page.css';
import labBannerBg from './assets/lab-working-table-62.webp';

// Dynamically import all converted gallery WebP images
const galleryModules = import.meta.glob('./assets/gallery/*.webp', { eager: true, import: 'default' });
const galleryImages = Object.values(galleryModules);

const GalleryPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="gallery-page-v2">
      <SEO 
        title="Photo Gallery & Laboratory Infrastructure Showcase | Rayon Lab Tech" 
        description="Browse our photo gallery featuring custom laboratory working tables, island tables, fume hoods, storage cabinets, and complete cleanroom setups manufactured across India." 
      />

      {/* Title / Banner Section */}
      <section className="gallery-banner" style={{ backgroundImage: `url(${labBannerBg})` }}>
        <div className="gallery-banner-overlay">
          <div className="gallery-banner-content">
            <h1 className="gallery-banner-title">Photo Gallery</h1>
            <p className="gallery-banner-desc">
              Explore our state-of-the-art laboratory installations, custom modular furniture, fume hoods, and cleanroom setups manufactured by Rayon Lab Tech.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Image Grid */}
      <div className="gallery-section-container">
        <div className="gallery-grid">
          {galleryImages.map((imgUrl, index) => (
            <div 
              key={index} 
              className="gallery-card"
              onClick={() => setSelectedImg(imgUrl)}
            >
              <div className="gallery-img-wrapper">
                <img 
                  src={imgUrl} 
                  alt={`Laboratory Installation ${index + 1}`} 
                  className="gallery-img" 
                  loading="lazy"
                />
                <div className="gallery-card-overlay">
                  <div className="gallery-card-info">
                    <h3 className="gallery-card-title">Laboratory Installation #{index + 1}</h3>
                    <span className="gallery-card-tag">Rayon Lab Tech Project</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="lightbox-modal" onClick={() => setSelectedImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImg(null)} aria-label="Close">
              ×
            </button>
            <img src={selectedImg} alt="Laboratory Showcase Large View" className="lightbox-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
