import SEO from './SEO';
import React from 'react';
import { Link } from 'react-router-dom';
import './thank-you-page.css';
import thankYouBannerBg from './assets/College-Laboratory-Furniture-63.webp';

const ThankYouPage = () => {
  return (
    <div className="thank-you-page-v2">
      <SEO 
        title="Thank You | Rayon Lab Tech" 
        description="Thank you for reaching out to Rayon Lab Tech. We have received your inquiry and our engineering team will get back to you shortly." 
        canonical="https://rayonlabtech.in/thank-you"
      />

      {/* Hero Banner */}
      <section className="thank-you-hero-banner" style={{ backgroundImage: `url(${thankYouBannerBg})` }}>
        <div className="thank-you-banner-overlay">
          <div className="thank-you-banner-content">
            <h1 className="thank-you-banner-title">THANK YOU</h1>
            <p className="thank-you-banner-desc">
              Your inquiry has been successfully received. We appreciate your interest in Rayon Lab Tech laboratory solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Card Container */}
      <div className="thank-you-main-container">
        <div className="thank-you-card">
          {/* Animated Success Badge */}
          <div className="thank-you-icon-wrapper">
            <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          <h2 className="thank-you-heading">We Have Received Your Message!</h2>
          <p className="thank-you-text">
            Thank you for contacting <strong>Rayon Lab Tech</strong>. Our dedicated laboratory design and engineering specialists are reviewing your request and will get back to you within 24 business hours.
          </p>

          {/* Info Grid */}
          <div className="thank-you-info-grid">
            <div className="thank-you-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <h4>Fast Response</h4>
              <p>Our sales and technical support team responds within 24 hours.</p>
            </div>

            <div className="thank-you-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <h4>Immediate Assistance?</h4>
              <p>Call us directly at <a href="tel:+919909030607" style={{ color: '#0D1E44', fontWeight: 700 }}>+91 9909030607</a> for urgent quotes.</p>
            </div>

            <div className="thank-you-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              <h4>Explore Solutions</h4>
              <p>Browse our modular laboratory furniture, fume hoods, and SS tables.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="thank-you-actions">
            <Link to="/" className="btn-thank-primary">
              Return to Homepage <span>→</span>
            </Link>
            <Link to="/products" className="btn-thank-secondary">
              Explore Our Products <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
