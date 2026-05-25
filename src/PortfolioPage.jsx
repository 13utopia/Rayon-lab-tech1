import React from 'react';
import './portfolio-page.css';
import microscopeImg from './assets/Microscope.png';
import portfolio1 from './assets/portfolio-1.png';
import portfolio2 from './assets/portfolio-2.png';
import portfolio3 from './assets/portfolio-3.png';
import portfolio4 from './assets/portfolio-4.png';
import portfolioItem1 from './assets/portfolio-item-1.png';
import portfolioItem2 from './assets/portfolio-item-2.png';
import portfolioS1Item1 from './assets/portfolio-s1-1.png';
import portfolioS1Item2 from './assets/portfolio-s1-2.png';
import portfolioS1Item3 from './assets/portfolio-s1-3.png';

const PortfolioPage = ({ onGetQuote, onProductsClick }) => {
  return (
    <div className="portfolio-page">
      {/* Premium Banner Section */}
      <div className="banner-container-v2">
        <div className="banner-card-v2">
          <div className="banner-content-v2">
            <h1 className="banner-title-v2">Our Portfolio</h1>
            <p className="banner-desc-v2">
              Modular working tables designed for ultimate flexibility <br className="desktop-br" />
              and safety in modern scientific environments.
            </p>
            <div className="portfolio-hero-link-wrap">
              <a href="#portfolio-installations" className="portfolio-hero-link">
                <span>Explore Portfolio</span>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12H19M13 6L19 12L13 18" />
                </svg>
              </a>
            </div>
          </div>
          <div className="banner-image-v2">
            <img src={microscopeImg} alt="Microscope" className="banner-microscope-img" />
          </div>
        </div>
      </div>

      {/* Section 1: Cureza Health Care (Text Left, Image Grid Right) */}
      <section className="portfolio-installation-section" id="portfolio-installations">
        <div className="installation-container">
          <div className="installation-grid-v1">
            <div className="installation-text-card">
              <div className="card-watermark">RAYON</div>
              <h2 className="installation-title">Cureza Health Care</h2>
              <div className="installation-desc">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
              <button className="products-link-btn" type="button" onClick={onProductsClick}>
                Our Products <span className="arrow-circle">&rarr;</span>
              </button>
            </div>
            <div className="installation-image-grid-v1">
              <div className="img-large-top">
                <img src={portfolioS1Item1} alt="Lab Installation 1" />
              </div>
              <div className="img-small-row">
                <div className="img-small">
                  <img src={portfolioS1Item2} alt="Lab Installation 2" />
                </div>
                <div className="img-small">
                  <img src={portfolioS1Item3} alt="Lab Installation 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Vihaan Lab (Image Grid Left, Text Right) */}
      <section className="portfolio-installation-section alt-bg">
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
              <button className="products-link-btn" type="button" onClick={onProductsClick}>
                Our Products <span className="arrow-circle">→</span>
              </button>
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
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <button className="products-link-btn" type="button" onClick={onProductsClick}>
                  Our Products <span className="arrow-circle">→</span>
                </button>
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
