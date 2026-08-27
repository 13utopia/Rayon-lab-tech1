import SEO from './SEO';
import React, { useState } from 'react';
import './gallery-page.css';
import labBannerBg from './assets/lab-working-table-62.webp';

// Dynamically import all converted gallery WebP images
const galleryModules = import.meta.glob('./assets/gallery/*.webp', { eager: true, import: 'default' });
const galleryImages = Object.values(galleryModules);

// 22 Descriptive titles & categories for gallery items
const galleryTitles = [
  { title: 'Modular Island Worktable System', category: 'Pharma & Biotech Lab' },
  { title: 'Aerodynamic Fume Hood Assembly', category: 'Chemical Research Facility' },
  { title: 'Heavy-Duty Steel Wall Bench', category: 'Industrial Testing Lab' },
  { title: 'Cleanroom Storage & Exhaust Unit', category: 'Healthcare Laboratory' },
  { title: 'Custom Reagent Rack Installation', category: 'Educational Science Lab' },
  { title: 'Stainless Steel Utility Workstation', category: 'Analytical Testing' },
  { title: 'Ergonomic Laboratory Island Table', category: 'R&D Center' },
  { title: 'High-Performance Ducted Fume Hood', category: 'Chemical Safety' },
  { title: 'Modular Chemical Storage Cabinets', category: 'QC Laboratory' },
  { title: 'Anti-Vibration Balance Table Unit', category: 'Precision Measurement' },
  { title: 'Microbiology Workstation Setup', category: 'Bio-Research Lab' },
  { title: 'Polypropylene Acid Storage Cabinet', category: 'Hazardous Chemical Handling' },
  { title: 'Central Laboratory Workstation Layout', category: 'Institutional Lab' },
  { title: 'Integrated Gas & Electrical Fitting Bench', category: 'Engineering Facility' },
  { title: 'Walk-In Fume Hood Enclosure', category: 'Industrial Processing' },
  { title: 'Clean Air Laminar Flow Cabinet', category: 'Sterile Environment' },
  { title: 'Epoxy Resin Top Island Assembly', category: 'Corrosion Resistant Setup' },
  { title: 'Laboratory Sink & Drainage Module', category: 'Washing & Utility Zone' },
  { title: 'Mobile Under-Bench Storage Cabinets', category: 'Flexible Storage' },
  { title: 'Cleanroom Stainless Steel Pass Box', category: 'Contamination Control' },
  { title: 'Exhaust Ducting & Blower System', category: 'Ventilation Engineering' },
  { title: 'Customized Laboratory Furniture Project', category: 'Turnkey Installation' },
];

const GalleryPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="gallery-page-v2">
      <SEO 
        title="Photo Gallery & Laboratory Infrastructure Showcase | Rayon Lab Tech" 
        description="Browse our photo gallery featuring custom laboratory working tables, island tables, fume hoods, storage cabinets, and complete cleanroom setups manufactured across India." 
        canonical="https://rayonlabtech.in/gallery"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Rayon Lab Tech Laboratory Photo Gallery",
          "url": "https://rayonlabtech.in/gallery",
          "description": "High resolution showcase of laboratory benches, island workstations, and fume extraction systems."
        }}
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
          {galleryImages.map((imgUrl, index) => {
            const itemInfo = galleryTitles[index % galleryTitles.length];
            return (
              <div 
                key={index} 
                className="gallery-card"
                onClick={() => setSelectedImg({ url: imgUrl, title: itemInfo.title, category: itemInfo.category })}
              >
                <div className="gallery-img-wrapper">
                  <img 
                    src={imgUrl} 
                    alt={itemInfo.title} 
                    className="gallery-img" 
                    loading="lazy"
                  />
                  <div className="gallery-card-overlay">
                    <div className="gallery-card-info">
                      <h3 className="gallery-card-title">{itemInfo.title}</h3>
                      <span className="gallery-card-tag">{itemInfo.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="lightbox-modal" onClick={() => setSelectedImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImg(null)} aria-label="Close">
              ×
            </button>
            <img src={selectedImg.url || selectedImg} alt={selectedImg.title || 'Laboratory Showcase'} className="lightbox-img" />
            {selectedImg.title && (
              <div style={{ color: '#ffffff', textAlign: 'center', marginTop: '16px' }}>
                <h3 style={{ fontSize: '1.2rem', margin: '0 0 4px', fontWeight: '700' }}>{selectedImg.title}</h3>
                <span style={{ fontSize: '0.85rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{selectedImg.category}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
