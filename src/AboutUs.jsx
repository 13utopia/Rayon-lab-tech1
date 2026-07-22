import SEO from './SEO';
import React, { useState } from 'react';
import './about-us.css';
import teamImage from './assets/Laboratory-Furniture-Supplier-14.webp';
import heroBg from './assets/lab-working-table-9.webp';
import introLabImg from './assets/Pharmaceutical-Laboratory-Furniture-11.webp';
import contactBg from './assets/lab-furniture-45.webp';
import { sendFormEmail } from './email';
import arrowMoveWhite from './assets/College-Laboratory-Furniture-17.webp';

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
  const handleContactSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    if (formData.get('captcha') !== '4312') {
      form.elements.captcha.setCustomValidity('Please enter the correct captcha code.');
      form.reportValidity();
      form.elements.captcha.setCustomValidity('');
      return;
    }

    const subject = `About Page Contact Request: ${formData.get('name')}`;
    const body = `
New About page contact form submission from Rayon Lab Tech Website

Name: ${formData.get('name')}
Email: ${formData.get('email')}
City: ${formData.get('city')}
Phone: ${formData.get('phone')}
Requirement: ${formData.get('requirement')}
    `.trim();

    try {
      await sendFormEmail({ subject, body, replyTo: formData.get('email') });
      form.reset();
    } catch (error) {
      alert(error.message || 'Could not send your message. Please try again.');
    }
  };

  return (
    <div className="about-page">
      <SEO title="Manufacturer Of Laboratory Furniture & Equipment In India" description="Rayon Lab Tech is a Manufacturer Of Laboratory Furniture & Equipment In Ahmedabad, delivering customised working tables, island tables, fume hoods, storage cabinets, exhaust systems, and stainless steel furniture for educational, research, healthcare, pharmaceutical, chemical, and industrial laboratory environments across India with professional support." />
      
      <h1 className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: '0' }}>
        Manufacturer Of Laboratory Furniture & Equipment In India
      </h1>

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
          <h2 className="about-hero-title">About Us</h2>
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
              <h2 className="intro-main-title">Precision Laboratory Solutions Manufactured for Modern Workspaces</h2>
              <p className="intro-desc">
                Rayon Lab Tech is a Manufacturer Of Laboratory Furniture & Equipment In Ahmedabad, delivering customised working tables, island tables, fume hoods, storage cabinets, exhaust systems, and stainless steel furniture for educational, research, healthcare, pharmaceutical, chemical, and industrial laboratory environments across India with professional support.
              </p>
              <p className="intro-desc">
                Our experienced team combines technical planning, practical design, precise manufacturing, quality materials, and dependable project execution. We support every stage from requirement analysis and layout development to furniture production, equipment installation, and final handover, creating safer, organised, efficient, and durable laboratories every time.
              </p>
            </div>
          </div>

          <div className="about-mission-block">
            <h2 className="mission-title">OUR MISSION</h2>
            <ul className="mission-bullet-list">
              <li>
                <span className="mission-dot">⦿</span>
                To manufacture durable laboratory furniture and reliable scientific equipment.
              </li>
              <li>
                <span className="mission-dot">⦿</span>
                To provide customised laboratory solutions for every industry and application.
              </li>
              <li>
                <span className="mission-dot">⦿</span>
                To maintain high standards of safety, durability, precision, and functionality.
              </li>
              <li>
                <span className="mission-dot">⦿</span>
                To build lasting relationships through trust, quality, service, and satisfaction.
              </li>
            </ul>
            <p className="mission-footer-note">
              We value every customer’s feedback and suggestions, helping us improve our products and deliver flexible solutions according to their specific laboratory requirements.
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
          <form className="about-contact-form" onSubmit={handleContactSubmit}>
            <div className="form-field-row">
              <input type="text" name="name" placeholder="Name" className="about-form-input" required />
            </div>
            <div className="form-field-row">
              <input type="email" name="email" placeholder="E-Mail Address" className="about-form-input" required />
            </div>
            <div className="form-field-row">
              <input type="text" name="city" placeholder="City" className="about-form-input" required />
            </div>
            <div className="form-field-row">
              <input type="tel" name="phone" placeholder="Phone" className="about-form-input" pattern="[0-9]{10}" title="Please enter a 10 digit phone number." required />
            </div>
            <div className="form-field-row">
              <input type="text" name="requirement" placeholder="Requirement" className="about-form-input" required />
            </div>
            <div className="form-field-row captcha-row">
              <input type="text" name="captcha" placeholder="Captcha Code" className="about-form-input captcha-input" required />
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
              Build Better Laboratories With Custom Furniture Solutions
              <img src={arrowMoveWhite} alt="Arrow decoration" className="premium-cta-arrow" />
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
