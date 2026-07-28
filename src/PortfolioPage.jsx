import SEO from './SEO';
import React from 'react';
import './portfolio-page.css';
import portfolio1 from './assets/College-Laboratory-Furniture-96.webp';
import portfolio2 from './assets/lab-furniture-97.webp';
import portfolio3 from './assets/lab-furniture-98.webp';
import portfolio4 from './assets/lab-working-table-99.webp';
import portfolioItem1 from './assets/lab-furniture-100.webp';
import portfolioItem2 from './assets/Chemical-Laboratory-Furniture-101.webp';
import portfolioS1Item1 from './assets/Laboratory-Furniture-Supplier-102.webp';
import portfolioS1Item2 from './assets/Fume-Hood-Manufacturer-103.webp';
import portfolioS1Item3 from './assets/Chemical-Laboratory-Furniture-104.webp';

const PortfolioPage = ({ onGetQuote, onProductsClick }) => {
  return (
    <div className="portfolio-page">
      <SEO title="Our Portfolio - Rayon Lab Tech" description="Explore our successful laboratory installations and projects." />
      
      {/* Premium Banner Section */}
      <section className="portfolio-banner" style={{ backgroundImage: `linear-gradient(rgba(13, 30, 68, 0.75), rgba(13, 30, 68, 0.75)), url(${portfolio1})` }}>
        <div className="portfolio-banner-overlay">
          <div className="portfolio-banner-content">
            <h1 className="portfolio-banner-title">Our Portfolio</h1>
            <p className="portfolio-banner-desc">
              Explore customised laboratory furniture projects engineered for safety, durability, efficiency, precision, and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Vihaan Lab (Image Grid Left, Text Right) */}
      <section className="portfolio-installation-section alt-bg" id="portfolio-installations">
        <div className="installation-container">
          <div className="installation-grid-v2">
            <div className="installation-image-grid-v2">
              <div className="img-large-top">
                <img src={portfolioItem2} alt="Installation 4" />
              </div>
              <div className="img-wide-bottom">
                <img src={portfolioItem1} alt="Installation 5" />
              </div>
            </div>
            <div className="installation-text-card">
              <div className="card-watermark">RAYON</div>
              <h2 className="installation-title">Vihaan Lab</h2>
              <div className="installation-desc">
                <p>Rayon Lab Tech designed and installed customised laboratory furniture for Vihaan Lab, including modular working tables, island tables, storage cabinets, and utility-ready workstations. The layout was planned to improve movement, equipment placement, accessibility, organisation, and overall efficiency throughout daily scientific laboratory testing activities.</p>
                <p>Each unit was manufactured using durable materials and precise specifications to support safe, reliable, and long-term performance. The completed laboratory combines practical storage, strong working surfaces, organised utility access, and an efficient layout suited to testing, research, sample preparation, and everyday scientific operations across demanding modern laboratory environments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Cureza Health Care (Top row 2 images, Bottom row Mixed) */}
      <section className="portfolio-installation-section">
        <div className="installation-container">
          <div className="installation-grid-v3">
            <div className="top-images-row">
              <div className="img-wide">
                <img src={portfolio1} alt="Installation 6" />
              </div>
              <div className="img-wide">
                <img src={portfolio2} alt="Installation 7" />
              </div>
            </div>
            <div className="bottom-mixed-row">
              <div className="installation-text-card">
                <div className="card-watermark">RAYON</div>
                <h2 className="installation-title">Cureza Health Care</h2>
                <div className="installation-desc">
                  <p>Rayon Lab Tech delivered customised laboratory working tables, island tables, overhead storage cabinets, and stainless steel furniture for Cureza Health Care. The project focused on hygienic finishes, efficient space utilisation, organised storage, durable construction, and a practical workflow for daily healthcare laboratory operations.</p>
                </div>
              </div>
              <div className="vertical-images-pair">
                <div className="img-vertical">
                  <img src={portfolio3} alt="Installation 8" />
                </div>
                <div className="img-vertical">
                  <img src={portfolio4} alt="Installation 9" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PortfolioPage;
