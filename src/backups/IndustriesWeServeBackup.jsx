// Backup of Industries We Serve Section
// Restore by placing this component back into App.jsx on Home Page

import React from 'react';

export const IndustriesWeServeSection = ({ industryData, handleNavClick }) => {
  return (
    <section className="industries-section" aria-label="Industries We Serve">
      <div className="industries-header">
        <span className="industries-badge">INDUSTRIES WE SERVE</span>
        <h2 className="industries-title">Industries We Serve</h2>
        <p className="industries-subtitle">
          Laboratory solutions for scientific, educational, and industrial applications.
        </p>
      </div>

      <div className="industries-grid">
        {industryData.map((item, idx) => (
          <div className="industry-card" key={idx}>
            <img src={item.image} alt={item.title} className="industry-card-img" />
            <div className="industry-info-card">
              <h3>{item.title}</h3>
              <div className="card-line"></div>
              <p>{item.desc}</p>
              <div className="industry-btn-tab">
                <button
                  className="industry-action-btn-circle"
                  type="button"
                  aria-label={`Explore ${item.title}`}
                  onClick={(e) => handleNavClick(e, 'portfolio')}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="industry-all-btn-wrap">
        <div className="industry-btn-container">
          <a href="#" className="industry-all-btn" onClick={(e) => handleNavClick(e, 'portfolio')}>
            All Projects <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
