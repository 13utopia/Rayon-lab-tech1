import React from 'react';
import './contact-us.css';
import contactHero from './assets/hero1.png';

const ContactUs = () => {
  const contactCards = [
    {
      id: 1,
      title: "Mail Us 24/7",
      details: ["Rltsales@rayonlabtech.in", "support@pbminfotech.com"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
          <circle cx="12" cy="11" r="3"></circle>
          <path d="M12 11c0 0.5 0.5 1 1 1s1-0.5 1-1"></path>
        </svg>
      ),
      type: "light"
    },
    {
      id: 2,
      title: "Our Location",
      details: ["85 Preston, Inglewood, Maine 98", "380, Hoofddorp Noord- 2132"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
          <ellipse cx="12" cy="21" rx="7" ry="2"></ellipse>
        </svg>
      ),
      type: "light"
    },
    {
      id: 3,
      title: "Call US 24/7",
      details: ["Phone: +001 236-895-4732", "Mobile: +91 9909030607"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          <path d="M14 7a2 2 0 0 1 2 2"></path>
          <path d="M14 3a6 6 0 0 1 6 6"></path>
        </svg>
      ),
      type: "light"
    },
    {
      id: 4,
      title: "Working Days",
      details: ["Mon to Fri - 09:00am To 06:00pm", "Saturday to Sunday - Closed"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
          <path d="M9 16l2 2 4-4"></path>
          <rect x="8" y="14" width="8" height="6" rx="1"></rect>
        </svg>
      ),
      type: "light"
    }
  ];

  return (
    <div className="contact-page">
      {/* Banner Section */}
      <section className="contact-banner" style={{ backgroundImage: `url(${contactHero})` }}>
        <div className="contact-banner-overlay">
          <div className="contact-banner-content">
            <h1 className="contact-banner-title">Contact Us</h1>
            <p className="contact-banner-desc">
              Get in touch with our experts for professional laboratory solutions and equipment consultations.
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <div className="contact-cards-container">
        <div className="contact-cards-grid">
          {contactCards.map((card) => (
            <div key={card.id} className={`contact-info-card ${card.type}`}>
              <div className="card-top">
                <h3 className="card-title">{card.title}</h3>
                <div className="card-details">
                  {card.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
              <div className="card-bottom">
                <div className="card-icon-box">
                  {card.icon}
                </div>
              </div>
              <button className="card-arrow-btn" aria-label="Learn More">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="10 7 17 7 17 14"></polyline>
                </svg>
              </button>
              <div className="card-pattern"></div>
            </div>
          ))}
        </div>
      </div>

      {/* New Q&A Section */}
      <section className="contact-qa-section">
        <div className="qa-container">
          <div className="qa-grid">
            {/* Left Content */}
            <div className="qa-left">
              <span className="qa-pill">CONTACT US</span>
              <h2 className="qa-title">Happy to Answer All Your Questions</h2>
              <p className="qa-desc">
                We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing.
              </p>
              <button className="qa-more-btn">
                More Details <span className="btn-arrow">→</span>
              </button>
            </div>

            {/* Right Form Card */}
            <div className="qa-right">
              <div className="qa-form-card">
                <h3 className="form-card-title">Send a message to staff</h3>
                <p className="form-card-subtitle">Your email address will not be published. Required fields are marked *</p>

                <form className="qa-actual-form">
                  <div className="qa-form-row">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                  </div>
                  <div className="qa-form-row">
                    <input type="tel" placeholder="Your Phone" />
                    <input type="text" placeholder="Subject" />
                  </div>
                  <textarea placeholder="Message" rows="4"></textarea>

                  <div className="qa-checkbox-wrap">
                    <input type="checkbox" id="save-info" />
                    <label htmlFor="save-info">Save my name, email, and website in this browser for the next time I comment.</label>
                  </div>
                </form>

                <div className="qa-card-footer">
                  <button className="qa-estimate-btn">
                    Get Cost Estimate <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
