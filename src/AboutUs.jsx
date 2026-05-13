import React, { useState } from 'react';
import './about-us.css';
import teamImage from './assets/about-team-main.png';
import heroBg from './assets/about-hero-scientific.png';
import introLabImg from './assets/about-intro-lab.png';
import contactBg from './assets/contact-handshake-bg.png';

function HeaderLogo() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer-logo-svg">
      <ellipse cx="50" cy="55" rx="42" ry="16" transform="rotate(-30, 50, 55)" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
      <g transform="rotate(-15, 50, 55)">
        <path d="M42 36 L58 36 L58 44 L70 72 A 6 6 0 0 1 65 80 L35 80 A 6 6 0 0 1 30 72 L42 44 Z" fill="transparent" stroke="#ffffff" strokeWidth="4.5" strokeLinejoin="round" />
        <path d="M38 36 L62 36" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
      </g>
      <circle cx="42" cy="22" r="5" fill="#ffffff" />
      <circle cx="56" cy="14" r="3" fill="#ffffff" />
      <circle cx="38" cy="12" r="2" fill="#ffffff" />
    </svg>
  );
}

const AboutUs = ({ onGetQuote }) => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero" style={{
        backgroundImage: `linear-gradient(rgba(13, 30, 68, 0.5), rgba(13, 30, 68, 0.5)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Us</h1>
        </div>
      </section>

      <section className="about-intro-top">
        <div className="about-intro-container">
          <div className="about-intro-content-row">
            <div className="about-intro-image">
              <img src={introLabImg} alt="Laboratory Installation" />
            </div>
            <div className="about-intro-text">
              <h4 className="intro-badge">ABOUT US</h4>
              <h2 className="intro-main-title">WE DESIGN MODERN LABORATORY SOLUTIONS</h2>
              <p className="intro-desc">
                Established in 2023, Rayon Lab Tech is a leading manufacturer of laboratory furniture and laboratory equipment based in Ahmedabad, Gujarat, India. We specialize in delivering high-quality, durable, and customized laboratory solutions designed to meet the requirements of educational, industrial, research, pharmaceutical, and healthcare laboratories.
              </p>
              <p className="intro-desc">
                Our product range includes laboratory benches, laboratory furniture, fume hoods, laboratory cabinets, island tables, laminar airflow systems, storage lockers, and stainless steel laboratory equipment. Every product is manufactured with precision, quality materials, and modern engineering standards to ensure long-lasting performance and maximum efficiency.
              </p>
            </div>
          </div>

          <div className="about-mission-block">
            <h2 className="mission-title">OUR MISSION</h2>
            <ul className="mission-bullet-list">
              <li>
                <span className="mission-dot">⦿</span>
                To manufacture high-quality and reliable laboratory furniture and equipment.
              </li>
              <li>
                <span className="mission-dot">⦿</span>
                To provide innovative and customized laboratory solutions for every industry.
              </li>
              <li>
                <span className="mission-dot">⦿</span>
                To maintain the highest standards of safety, durability, and functionality.
              </li>
              <li>
                <span className="mission-dot">⦿</span>
                To build long-term relationships through trust, quality, and customer satisfaction.
              </li>
            </ul>
            <p className="mission-footer-note">
              We are welcome and appreciate our customer's reviews and suggestions to make our products more better and flexible as per their requirement.
            </p>
          </div>
        </div>
      </section>

      {/* Stay In Touch Section */}
      <section
        className="about-contact-section"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 20, 50, 0.78), rgba(10, 20, 50, 0.78)), url(${contactBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="about-contact-inner">
          <h2 className="about-contact-title">STAY IN TOUCH WITH US</h2>
          <form className="about-contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-field-row">
              <input type="text" placeholder="Name" className="about-form-input" />
            </div>
            <div className="form-field-row">
              <input type="email" placeholder="E-Mail Address" className="about-form-input" />
            </div>
            <div className="form-field-row">
              <input type="text" placeholder="City" className="about-form-input" />
            </div>
            <div className="form-field-row">
              <input type="tel" placeholder="Phone" className="about-form-input" />
            </div>
            <div className="form-field-row">
              <input type="text" placeholder="Requirement" className="about-form-input" />
            </div>
            <div className="form-field-row captcha-row">
              <input type="text" placeholder="Captcha Code" className="about-form-input captcha-input" />
              <div className="captcha-box">4312</div>
            </div>
            <div className="form-field-row">
              <button type="submit" className="about-form-submit">Submit Now!</button>
            </div>
          </form>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="about-premium-cta-section">
        <div className="premium-cta-bar">
          <div className="premium-cta-content">
            <h2 className="premium-cta-text">
              Transform Your Laboratory With High-Quality Modular Furniture
              <span className="cta-curly-arrow">
                <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20 C 30 5, 70 5, 90 20 M 85 10 L 92 22 L 80 25" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <button className="premium-cta-btn" onClick={onGetQuote}>
              Request A Quote
              <span className="btn-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
