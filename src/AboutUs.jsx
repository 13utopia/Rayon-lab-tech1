import React from 'react';
import './about-us.css';
import teamImage from './assets/about-team-main.png';
import heroBg from './assets/about-hero-bg.png';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="about-hero-content">
          {/* Text is already in the image */}
        </div>
      </section>

      {/* About Main Section */}
      <section className="about-main-section">
        <div className="about-container">
          <div className="about-grid">
            {/* Left: Image */}
            <div className="about-image-wrap">
              <img src={teamImage} alt="Our Team Working" className="about-main-img" />
            </div>

            {/* Right: Content */}
            <div className="about-content-wrap">
              <h2 className="about-section-title">ABOUT US</h2>
              <h3 className="about-subtitle">WE BELIEVE IN CREATION, QUALITY AND HONESTY</h3>

              <div className="about-description">
                <p>
                  <strong>RAYON LAB TECH</strong> is a one of the growing company. We established in Ahmedabad, Gujarat, India.
                  We have a vast experience in this field also have an expert team for developing products, problem solving
                  capability and successfully erection work of projects to fulfil client's requirements.
                </p>
                <p>
                  We offer smart solution for lab projects like Lab Furniture, Lab Fume Hood, Lab Fume Exhaust System,
                  Spot Extractor, Clean Room Furniture and Turnkey Solution. <strong>RAYON LAB TECH</strong> provides the
                  full range of service from design to engineering, through the final installation and erection.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mission-section">
            <h2 className="about-section-title">OUR MISSION</h2>
            <ul className="mission-list">
              <li>
                <span className="mission-icon">🎯</span>
                <p>To manufacture high quality & durable products to meet every technical aspects of the customer.</p>
              </li>
              <li>
                <span className="mission-icon">🎯</span>
                <p>Our key mission to build up and maintain a strong and joyful relationship with our valuable customer.</p>
              </li>
              <li>
                <span className="mission-icon">🎯</span>
                <p>Create Healthy & Toxic free work environment for people who are working in the laboratory.</p>
              </li>
              <li>
                <span className="mission-icon">🎯</span>
                <p>Our prime focus to build supreme quality laboratory with maximum space optimization.</p>
              </li>
            </ul>
            <p className="mission-footer-text">
              We are welcome and appreciate our customer's reviews and suggestions to make our products more batter and flexible as per their requirement.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Sidebar */}

    </div>
  );
};

export default AboutUs;
