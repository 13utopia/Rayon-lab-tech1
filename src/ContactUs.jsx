import React from 'react';
import './contact-us.css';
import contactHero from './assets/hero1.png';
import { sendFormEmail } from './email';

const ContactUs = () => {
  const tooltipTimerRef = React.useRef(null);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [showFormTooltip, setShowFormTooltip] = React.useState(false);

  const isFormComplete = Object.values(formData).every((value) => value.trim());

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!isFormComplete) {
      setShowFormTooltip(true);
      return;
    }

    const subject = `Contact Message: ${formData.subject} - ${formData.name}`;
    const body = `
New Contact Us form submission from Rayon Lab Tech Website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();

    try {
      await sendFormEmail({ subject, body, replyTo: formData.email });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      alert(error.message || 'Could not send your message. Please try again.');
    }
  };

  const handleEstimateClick = () => {
    if (isFormComplete) {
      setShowFormTooltip(false);
      return;
    }

    setShowFormTooltip(true);
    window.clearTimeout(tooltipTimerRef.current);
    tooltipTimerRef.current = window.setTimeout(() => {
      setShowFormTooltip(false);
    }, 2400);
  };

  React.useEffect(() => {
    return () => window.clearTimeout(tooltipTimerRef.current);
  }, []);

  const contactCards = [
    {
      id: 1,
      title: "Mail Us 24/7",
      details: ["Rltsales@rayonlabtech.in", "support@pbminfotech.com"],
      icon: (
        <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33.9959 10.4104C31.6152 8.77004 19.345 0.667507 19.1254 0.49117C18.6439 0.170877 18.0785 0 17.5002 0C16.9219 0 16.3565 0.170877 15.8749 0.49117L1.48094 10.085C1.03378 10.3322 0.660733 10.6943 0.400376 11.1339C0.140019 11.5735 0.00179767 12.0747 0 12.5856V30.5995C0.0059953 31.3583 0.310088 32.0844 0.846657 32.6209C1.38323 33.1575 2.10925 33.4616 2.86804 33.4676H32.132C32.7541 33.4678 33.3587 33.2615 33.8509 32.881C34.2064 32.616 34.4953 32.2719 34.6947 31.8759C34.8942 31.4799 34.9987 31.0429 35 30.5995V12.5856C35.0013 12.1718 34.912 11.7627 34.7386 11.3869C34.5652 11.0112 34.3117 10.6779 33.9959 10.4104ZM21.0744 19.9636C24.5519 17.6457 31.6336 12.9257 33.4749 11.6983C33.6528 11.9601 33.7486 12.2691 33.75 12.5856V30.5995C33.7497 30.9312 33.6468 31.2546 33.4553 31.5254L21.0744 19.9636ZM16.5662 1.53276C16.8429 1.34863 17.1679 1.25042 17.5004 1.25048C17.8328 1.25053 18.1578 1.34885 18.4345 1.53307L32.4536 10.8769L19.7278 19.363L18.4345 20.2208C18.1578 20.4053 17.8327 20.5037 17.5002 20.5037C17.1676 20.5037 16.8425 20.4053 16.5659 20.2208L2.54608 10.8769L16.5662 1.53276ZM1.54465 31.5254C1.35319 31.2546 1.25026 30.9312 1.25 30.5995V12.5856C1.25267 12.2694 1.34875 11.961 1.52618 11.6992C3.51345 13.0244 11.5617 18.3914 13.9228 19.9659C11.6723 22.0675 3.51795 29.6826 1.54465 31.5254ZM2.86804 32.2176C2.79757 32.2152 2.72734 32.2081 2.65781 32.1963C5.09041 29.9246 13.1858 22.3647 14.9911 20.6787C16.8329 22.0733 18.0874 22.1538 20.0056 20.6759L32.3422 32.1963C32.1147 32.2635 3.10471 32.1926 2.86804 32.2176Z" fill="url(#mailIconGradient)" />
          <defs>
            <linearGradient id="mailIconGradient" x1="0" y1="16.7338" x2="48.54" y2="16.5389" gradientUnits="userSpaceOnUse">
              <stop offset="0.323492" stopColor="#666666" />
              <stop offset="1" stopColor="#CCCCCC" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Our Location",
      details: ["85 Preston, Inglewood, Maine 98", "380, Hoofddorp Noord- 2132"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Call US 24/7",
      details: ["Phone: +001 236-895-4732", "Mobile: +91 9909030607"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Working Days",
      details: ["Mon to Fri - 09:00am To 06:00pm", "Saturday to Sunday - Closed"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
          <path d="M9 16l2 2 4-4"></path>
        </svg>
      ),
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

      {/* Info Cards Section — feature-card-v2 design */}
      <div className="contact-cards-container">
        <div className="contact-cards-grid">
          {contactCards.map((card) => (
            <article className="feature-card-v2 contact-feature-card" key={card.id}>
              {/* Header: icon + title */}
              <div className="f-card-header">
                <div className="f-icon-wrap contact-icon-wrap">
                  {card.icon}
                </div>
                <h3 className="f-title">{card.title}</h3>
              </div>

              {/* Divider */}
              <div className="f-divider"></div>

              {/* Detail lines as description */}
              <div className="contact-card-details">
                {card.details.map((detail, idx) => (
                  <p key={idx} className="f-desc contact-detail-line">{detail}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Q&A Section */}
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
                More Details <span className="btn-arrow">&rarr;</span>
              </button>
            </div>

            {/* Right Form Card */}
            <div className="qa-right">
              <div className="qa-form-card">
                <h3 className="form-card-title">Send a message to staff</h3>
                <p className="form-card-subtitle">Your email address will not be published. Required fields are marked *</p>

                <form className="qa-actual-form" id="contact-estimate-form" onSubmit={handleFormSubmit}>
                  <div className="qa-form-row">
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
                  </div>
                  <div className="qa-form-row">
                    <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleInputChange} required />
                    <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} required />
                  </div>
                  <textarea name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleInputChange} required></textarea>

                  <div className="qa-checkbox-wrap">
                    <input type="checkbox" id="save-info" />
                    <label htmlFor="save-info">Save my name, email, and website in this browser for the next time I comment.</label>
                  </div>
                </form>

                <div className="qa-card-footer">
                  {showFormTooltip && (
                    <div className="qa-submit-tooltip" role="status">
                      Please fill all details first.
                    </div>
                  )}
                  <button className="qa-estimate-btn" type="submit" form="contact-estimate-form" onClick={handleEstimateClick}>
                    Get Cost Estimate <span className="btn-arrow">&rarr;</span>
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
