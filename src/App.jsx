import React, { useState } from 'react';
import './why-choose-us.css';
import './why-rayon.css';
import './stats-row.css';
import './industries-serve.css';
import './product-page.css';
import AboutUs from './AboutUs';
import scientistImage from './assets/scientist.png';
import showcase1 from './assets/showcase-1.png';
import showcase2 from './assets/showcase-2.png';
import showcase3 from './assets/showcase-3.png';
import heroMain from './assets/hero-v2-final.png';
import serveNew1 from './assets/serve-new-1.png';
import serveNew2 from './assets/serve-new-2.png';
import serveNew3 from './assets/serve-new-3.png';
import icon1 from './assets/feature-icon-1.png';
import icon2 from './assets/feature-icon-2.png';
import icon3 from './assets/feature-icon-3.png';
import icon4 from './assets/feature-icon-4.png';
import blog1 from './assets/blog-1.png';
import blog2 from './assets/blog-2.png';
import blog3 from './assets/blog-3.png';
import whyCenter from './assets/why-center.png';
import industryColleges from './assets/industries/colleges.png';
import industryChemical from './assets/industries/chemical.png';
import industryLabs from './assets/industries/labs.png';
import whyV3Center from './assets/why-v3-center.png';
import labIslandTable from './assets/laboratory-island-table.png';
import thumbMan from './assets/thumb-man.png';
import thumbLike from './assets/thumb-like.png';
import thumbCircle from './assets/thumb-circle.png';
import productHeroBg from './assets/product-hero-bg.png';
import productNavLogo from './assets/product-nav-logo.png';
import { products } from './data/products';

function HeaderLogo() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="header-logo-svg">
      <ellipse cx="50" cy="55" rx="42" ry="16" transform="rotate(-30, 50, 55)" stroke="#0D1E44" strokeWidth="4.5" strokeLinecap="round" />
      <g transform="rotate(-15, 50, 55)">
        <path d="M42 36 L58 36 L58 44 L70 72 A 6 6 0 0 1 65 80 L35 80 A 6 6 0 0 1 30 72 L42 44 Z" fill="#ffffff" stroke="#0D1E44" strokeWidth="4.5" strokeLinejoin="round" />
        <path d="M38 36 L62 36" stroke="#0D1E44" strokeWidth="4.5" strokeLinecap="round" />
      </g>
      <circle cx="42" cy="22" r="5" fill="#0D1E44" />
      <circle cx="56" cy="14" r="3" fill="#0D1E44" />
      <circle cx="38" cy="12" r="2" fill="#0D1E44" />
    </svg>
  );
}

const navItems = ['Home', 'About Us', 'Products', 'Portfolio', 'Blog', 'Contact Us'];

const featureCards = [
  {
    title: 'Advanced Engineering',
    description: 'Built with precision materials for long-term durability and chemical resistance.',
    image: icon1,
  },
  {
    title: 'Modular Flexibility',
    description: 'Custom-designed lab setups tailored to your workflow and space requirements.',
    image: icon2,
  },
  {
    title: 'Quality Assurance',
    description: 'Every unit is tested to meet safety, performance, and industry standards.',
    image: icon3,
  },
  {
    title: 'End-to-End Solutions',
    description: 'From planning to installation — complete laboratory setup under one roof.',
    image: icon4,
  },
];

const showcaseCards = [
  {
    title: 'Sentinel Fume Hoods',
    description: 'Variable air volume (VAV) containment for high-toxicity environments.',
    image: showcase1,
    productId: 'fume-hood-expert'
  },
  {
    title: 'Monolith Workstations',
    description: 'Heavy-duty, vibration-isolated benches for precision instrumentation.',
    image: showcase2,
    productId: 'laboratory-island-table'
  },
  {
    title: 'Secure Storage Vaults',
    description: 'Corrosive and flammable material storage with passive venting.',
    image: showcase3,
    productId: 'chemical-storage-cabinet'
  },
];

const showcaseLabels = ['CONSECTE', 'IMMUNOLOGY', 'EQUIPMENT'];

const whyChooseUsCards = [
  {
    title: 'Precision Build',
    desc: 'High-accuracy components for critical lab workflows.',
    icon: 'target'
  },
  {
    title: 'Modular Design',
    desc: 'Scalable systems that grow with your research needs.',
    icon: 'grid'
  },
  {
    title: 'Safety Certified',
    desc: 'Strict compliance with SEFA & international standards.',
    icon: 'shield'
  },
  {
    title: 'Expert Support',
    desc: 'Seamless on-site installation and maintenance.',
    icon: 'support'
  }
];

const statsData = [
  { value: '250', label: 'Projects Delivered' },
  { value: '14', label: 'Years Industry Experience' },
  { value: '400', label: 'Lab Installations' },
  { value: '10000', label: 'Precision Components Manufactured' },
];

const serveCards = [
  {
    title: 'Requirement Analysis',
    texts: [
      'We understand your laboratory needs, space, workflow, and industry requirements to plan the right solution.',
      'We analyze your lab layout, operations, and compliance standards to design efficient, future-ready solutions.',
      'We study your processes, equipment flow, and safety needs to deliver a workspace that performs seamlessly.'
    ],
    icon: 'analysis',
    image: serveNew1
  },
  {
    title: 'Design & Planning',
    texts: [
      'Our team creates optimized lab layouts and selects the right materials, ensuring safety, efficiency, and scalability.',
      'Our team designs efficient lab layouts and chooses ideal materials, ensuring safety, performance, and future growth.',
      'Our experts plan smart lab spaces and select suitable materials, delivering safety, functionality, and long-term scalability.'
    ],
    icon: 'design',
    image: serveNew2
  },
  {
    title: 'Manufacturing & Installation',
    texts: [
      'We manufacture precision-built components and ensure smooth on-site installation with quality assurance.',
      'We produce precision-crafted components and handle seamless on-site installation with strict quality control.',
      'We build high-accuracy components and manage smooth on-site setup while maintaining top quality standards.'
    ],
    icon: 'manufacturing',
    image: serveNew3
  }
];

const industryData = [
  {
    title: 'Colleges',
    desc: 'Our clinical pathologists are available seven days a week to render diagnoses.',
    image: industryColleges
  },
  {
    title: 'Chemical Industry',
    desc: 'Our clinical pathologists are available seven days a week to render diagnoses.',
    image: industryChemical
  },
  {
    title: 'Labs',
    desc: 'Our clinical pathologists are available seven days a week to render diagnoses.',
    image: industryLabs
  }
];

const whyPills = [
  'Precision Manufacturing',
  'Chemical & Heat Resistant Materials',
  'Custom Layout Planning',
  'On-Time Delivery & Installation',
  'Long-Term Durability'
];

const whyBenefits = [
  'Access Expert Advice For A Thriving Life',
  'Benefits Of Health Conscious Living',
  'Benefits Of Proactive Health Management',
  'Countless Benefits Of Prioritizing Health'
];

const funFacts = [
  { num: '250+', text: 'Projects Delivered' },
  { num: '14+', text: 'Years Industry Experience' },
  { num: '400+', text: 'Lab Installations' },
  { num: '10000+', text: 'Precision Components Manufactured' }
];

function ServeIcon({ type }) {
  switch (type) {
    case 'analysis':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 8V19C5 20.1046 5.89543 21 7 21H10C11.1046 21 12 20.1046 12 19V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 3V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.5 3H10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 12V20C16 20.5523 16.4477 21 17 21H19C19.5523 21 20 20.5523 20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 12V9C17 8.44772 17.4477 8 18 8C18.5523 8 19 8.44772 19 9V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'design':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 7C14 4.79086 12.2091 3 10 3C7.79086 3 6 4.79086 6 7V14C6 16.2091 7.79086 18 10 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 7H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 11H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 14H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 21H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 21V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'manufacturing':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14C14.7614 14 17 11.7614 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 11.7614 9.23858 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 21C21 16.5817 16.9706 13 12 13C7.02944 13 3 16.5817 3 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.5 8C19.5 8.82843 18.8284 9.5 18 9.5C17.1716 9.5 16.5 8.82843 16.5 8C16.5 7.17157 17.1716 6.5 18 6.5C18.8284 6.5 19.5 7.17157 19.5 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 5V6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 9.5V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20.1213 5.87868L19.0607 6.93934" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.9393 9.06066L15.8787 10.1213" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20.1213 10.1213L19.0607 9.06066" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.9393 6.93934L15.8787 5.87868" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

function FeatureIcon({ type }) {
  switch (type) {
    case 'microscope':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18h8" />
          <path d="M3 22h18" />
          <path d="M14 22a7 7 0 1 0 0-14h-1" />
          <path d="M9 14h2" />
          <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
          <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
        </svg>
      );
    case 'modular':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case 'flask':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.31" />
          <path d="M14 9.3V1.99" />
          <path d="M8.5 2h7" />
          <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
          <path d="M5.52 16h12.96" />
        </svg>
      );
    default:
      return null;
  }
}

function WhyIcon({ type }) {
  switch (type) {
    case 'target':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 'grid':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'support':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    default:
      return null;
  }
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
}

function FooterLogo() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="nf-logo-svg">
      <ellipse cx="50" cy="55" rx="42" ry="16" transform="rotate(-30, 50, 55)" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
      <g transform="rotate(-15, 50, 55)">
        <path d="M42 36 L58 36 L58 44 L70 72 A 6 6 0 0 1 65 80 L35 80 A 6 6 0 0 1 30 72 L42 44 Z" fill="#ffffff" />
        <path d="M38 36 L62 36" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
      </g>
      <circle cx="42" cy="22" r="5" fill="#ffffff" />
      <circle cx="56" cy="14" r="3" fill="#ffffff" />
      <circle cx="38" cy="12" r="2" fill="#ffffff" />
    </svg>
  );
}

function QuoteModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [phone, setPhone] = React.useState('');

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Keep only digits
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>

        <div className="modal-left">
          <h2>Technical Quote Request</h2>
          <p className="modal-left-desc">
            Provide your project specifications below. Our precision engineering team will review your requirements and provide a calibrated proposal within 24 hours.
          </p>

          <div className="modal-feature">
            <svg className="modal-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            <div className="modal-feature-text">
              <h4>CALIBRATED ASSESSMENT</h4>
              <p>Exact matching of hardware to procedural needs.</p>
            </div>
          </div>

          <div className="modal-feature">
            <svg className="modal-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <div className="modal-feature-text">
              <h4>EXPERT REVIEW</h4>
              <p>Analysis by certified laboratory technicians.</p>
            </div>
          </div>
        </div>

        <div className="modal-right">
          <h3>Client Data</h3>
          <div className="form-divider"></div>

          <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Dr. Jane Doe" />
              </div>
              <div className="form-group">
                <label>Institutional E-mail</label>
                <input type="email" placeholder="j.doe@institute.edu" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Direct Line</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="+1 (555) 012-3456"
                />
              </div>
              <div className="form-group">
                <label>Facility Location (City)</label>
                <input type="text" placeholder="Cambridge, MA" />
              </div>
            </div>

            <h3>Technical Requirements</h3>
            <div className="form-divider"></div>

            <div className="form-group">
              <label>Equipment Specifications & Usage Context</label>
              <textarea placeholder="Describe the required parameters, throughput needs, and integration environment..."></textarea>
            </div>

            <div className="verification-box">
              <div className="verification-content">
                <div className="verification-check"></div>
                <div className="verification-text">
                  <p>Human Verification</p>
                  <span>Please confirm you are a human operator.</span>
                </div>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" width="20" height="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>

            <div className="submit-btn-wrap">
              <button type="submit" className="submit-protocol-btn">
                Submit Protocol <span className="arrow">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function ProductPage({ product, onGetQuote }) {
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);
  const images = product.images;

  // Reset image index when product changes
  React.useEffect(() => {
    setActiveImageIndex(0);
  }, [product]);

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="product-page-container">
      <section className="product-hero" aria-label="Product Hero" style={{
        backgroundImage: `linear-gradient(rgba(13, 30, 68, 0.6), rgba(13, 30, 68, 0.6)), url(${productHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px'
      }}>
        <div className="product-hero-bg-text">RAYON</div>
        <div className="product-hero-content">
          <h1 className="product-hero-title">{product.heroTitle}</h1>
          <p className="product-hero-subtitle">
            {product.heroSubtitle}
          </p>
        </div>
      </section>

      <section className="product-details" aria-label="Product Details">
        <div className="product-details-container">
          <div className="product-details-header">
            <h2 className="product-details-main-title">{product.title}</h2>
            <div className="title-underline"></div>
          </div>

          <div className="product-details-grid">
            {/* Left: Gallery */}
            <div className="product-gallery">
              <div className="gallery-main">
                <img src={images[activeImageIndex]} alt={product.title} />
                <button className="gallery-nav prev" onClick={handlePrev} aria-label="Previous image">‹</button>
                <button className="gallery-nav next" onClick={handleNext} aria-label="Next image">›</button>
              </div>
              <div className="gallery-thumbs">
                {images.map((img, idx) => (
                  <div
                    className={`thumb ${activeImageIndex === idx ? 'active' : ''}`}
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Info */}
            <div className="product-info">
              <p className="product-description">
                {product.description}
              </p>

              <div className="tech-specs-header">
                <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
                </svg>
                <h3>TECHNICAL SPECIFICATIONS</h3>
              </div>

              <div className="specs-grid">
                {product.specs.map((spec, index) => (
                  <div className="spec-item-card" key={index}>
                    <h4>{spec.heading}</h4>
                    <div className="spec-card-divider"></div>
                    <ul>
                      {spec.items.map((item, idx) => (
                        <li key={idx}>
                          <div className="spec-check">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-5" /></svg>
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="note-box">
                {product.notes.map((note, index) => (
                  <p key={index}>• {note}</p>
                ))}
              </div>

              <button className="get-quote-btn" onClick={() => onGetQuote()}>
                Get Quote <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="product-features" aria-label="Application and Features">
        <div className="product-features-container">
          <div className="product-features-header">
            <div className="vertical-accent"></div>
            <h2 className="features-title">APPLICATION & FEATURES</h2>
          </div>

          <div className="features-card">
            <ul className="features-list">
              {product.features.map((feature, index) => (
                <li key={index}>
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="product-cta" aria-label="Request a Quote">
        <div className="product-cta-watermark">RAYON</div>
        <div className="product-cta-container">
          <div className="product-cta-left">
            <div className="cta-visual-col">
              <div className="cta-point"><div className="cta-check">✓</div></div>
              <div className="cta-line"></div>
              <div className="cta-point"><div className="cta-check">✓</div></div>
            </div>
            <div className="cta-text-col">
              <div className="cta-text-row">Transform Your Laboratory With High-Quality Modular Furniture</div>
              <div className="cta-text-row bold">Transform Your Laboratory With High-Quality Modular Furniture</div>
            </div>
          </div>
          <div className="product-cta-right">
            <button className="product-cta-btn outline" onClick={() => onGetQuote()}>
              Request A Quote <span className="arrow">→</span>
            </button>
            <button className="product-cta-btn solid" onClick={() => onGetQuote()}>
              Request A Quote <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  const [activeShowcase, setActiveShowcase] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState('home');
  const [selectedProduct, setSelectedProduct] = React.useState(products[0]);
  const [showQuoteModal, setShowQuoteModal] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const handleNavClick = (e, page, product = null) => {
    e.preventDefault();
    setCurrentPage(page);
    setIsDropdownOpen(false); // Close dropdown on any nav click
    if (product) {
      setSelectedProduct(product);
    } else if (page === 'products' && !product) {
      setSelectedProduct(products[0]);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`page-shell ${currentPage === 'products' ? 'page-shell-products' : ''}`}>
      <header className={`topbar ${(currentPage === 'products' || currentPage === 'about-us') ? 'product-header-premium' : ''}`}>
        {(currentPage === 'products' || currentPage === 'about-us') ? (
          <div className="premium-nav-bar">
            <div className="premium-nav-logo" onClick={(e) => handleNavClick(e, 'home')}>
              <img src={productNavLogo} alt="Rayon Lab Tech" />
            </div>

            <nav className="premium-nav-links">
              {navItems.map((item, index) => {
                const pageId = item.toLowerCase().replace(/\s+/g, '-');
                const isProducts = pageId === 'products';
                const isHome = pageId === 'home';
                const isAbout = pageId === 'about-us';

                return (
                  <React.Fragment key={item}>
                    <a
                      href="#"
                      className={currentPage === pageId ? 'active' : ''}
                      onClick={(e) => {
                        if (isHome || isAbout || isProducts) {
                          handleNavClick(e, pageId);
                        } else {
                          e.preventDefault();
                        }
                      }}
                    >
                      {item.toUpperCase()}
                    </a>
                    {index < navItems.length - 1 && <span className="nav-dot">•</span>}
                  </React.Fragment>
                );
              })}
            </nav>

            <div className="premium-nav-right">
              <div className="nav-phone-group">
                <div className="nav-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <span className="nav-phone-num">+1(212)-255-511</span>
              </div>
              <div className="nav-icon-circle search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <button className="nav-appointment-btn" onClick={() => setShowQuoteModal(true)}>
                Appointment <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="brand-group" onClick={(e) => handleNavClick(e, 'home')} style={{ cursor: 'pointer' }}>
              <div className="brand-mark">
                <img src={productNavLogo} alt="Rayon Lab Tech" style={{ height: '55px', width: 'auto' }} />
              </div>
            </div>

            <nav className="main-nav" aria-label="Primary navigation">
              {navItems.map((item, index) => {
                const pageId = item.toLowerCase().replace(/\s+/g, '-');
                const isHome = pageId === 'home';
                const isAbout = pageId === 'about-us';
                const isProducts = pageId === 'products';

                return (
                  <React.Fragment key={item}>
                    {isProducts ? (
                      <div
                        className="nav-dropdown-wrapper"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        <a
                          href="#"
                          className={currentPage === 'products' ? 'active' : ''}
                          onClick={(e) => {
                            handleNavClick(e, 'products');
                            setIsDropdownOpen(!isDropdownOpen);
                          }}
                        >
                          {item.toUpperCase()}
                        </a>
                        <div className={`nav-dropdown ${isDropdownOpen ? 'is-open' : ''}`}>
                          {products.map((p) => (
                            <div
                              key={p.id}
                              className="dropdown-item"
                              onClick={(e) => handleNavClick(e, 'products', p)}
                            >
                              {p.title}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href="#"
                        style={{ cursor: (isHome || isAbout) ? 'pointer' : 'default' }}
                        className={((isHome && currentPage === 'home') || (isAbout && currentPage === 'about-us')) ? 'active' : ''}
                        onClick={(e) => {
                          if (isHome || isAbout) {
                            handleNavClick(e, isHome ? 'home' : 'about-us');
                          } else {
                            e.preventDefault();
                          }
                        }}
                      >
                        {item.toUpperCase()}
                      </a>
                    )}
                    {index < navItems.length - 1 ? <span className="nav-divider">•</span> : null}
                  </React.Fragment>
                );
              })}
            </nav>

            <div className="header-actions">
              <div className="phone-action">
                <div className="phone-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <span className="phone-text">+1(212)-255-511</span>
              </div>

              <div className="search-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>

              <button className="appointment-pill" onClick={() => setShowQuoteModal(true)}>
                Appointment <span className="arrow">→</span>
              </button>
            </div>
          </>
        )}
      </header>

      {currentPage === 'about-us' ? (
        <AboutUs />
      ) : currentPage === 'home' ? (
        <>
          <section className="hero-custom-section" aria-label="Hero Section">
            <div className="hero-custom-content">
              <h1 className="hero-custom-title">
                Manufacturer Of Premium Laboratory<br />
                Furniture & Equipment In Ahmedabad<br />
                For Your Lab Needs
              </h1>
            </div>
            <div className="hero-custom-images">
              <img src={heroMain} alt="Rayon Lab Tech Hero" className="hero-custom-full-banner" />
            </div>
          </section>

          <section className="feature-grid-v2" aria-label="Product advantages">
            {featureCards.map(({ title, description, image }) => (
              <article className="feature-card-v2" key={title}>
                <div className="f-card-header">
                  <div className="f-icon-wrap">
                    <img src={image} alt={title} className="f-icon-img" />
                  </div>
                  <h3 className="f-title">{title}</h3>
                </div>
                <div className="f-divider"></div>
                <p className="f-desc">{description}</p>
                <div className="f-btn-tab">
                  <button className="f-action-btn" type="button" aria-label={`Explore ${title}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </section>

          <section className="showcase-section-v2" aria-label="Laboratory showcase">
            <div className="showcase-v2-header">
              <div className="showcase-v2-text">
                <h2 className="showcase-v2-title">Laboratory Infrastructure Solutions</h2>
                <p className="showcase-v2-subtitle">Modular systems engineered for adaptability and stringent safety protocols.</p>
              </div>
              <div className="showcase-v2-controls">
                <button type="button" className="showcase-v2-arrow" onClick={() => setActiveShowcase((prev) => (prev > 0 ? prev - 1 : 2))}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                </button>
                <button type="button" className="showcase-v2-arrow" onClick={() => setActiveShowcase((prev) => (prev < 2 ? prev + 1 : 0))}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>

            <div className="showcase-v2-grid">
              {showcaseCards.map((card, idx) => (
                <article
                  className={`showcase-v2-card ${activeShowcase === idx ? 'is-active' : ''}`}
                  key={card.title}
                  onMouseEnter={() => setActiveShowcase(idx)}
                  onClick={(e) => {
                    setActiveShowcase(idx);
                    const prod = products.find(p => p.id === card.productId);
                    if (prod) handleNavClick(e, 'products', prod);
                  }}
                >
                  <div className="showcase-v2-media-wrap">
                    <div className="showcase-v2-media" style={{ backgroundImage: `url(${card.image})` }} />
                  </div>
                  <div className="showcase-v2-meta">
                    <h3 className="showcase-v2-card-title">{card.title}</h3>
                    <p className="showcase-v2-card-desc">{card.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="showcase-v2-dots">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  className={`showcase-v2-dot ${activeShowcase === i ? 'active' : ''}`}
                  onClick={() => setActiveShowcase(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="showcase-marquee-wrapper">
              <div className="showcase-marquee-content">
                {[...Array(4)].map((_, i) => (
                  <React.Fragment key={i}>
                    {showcaseLabels.map((label) => (
                      <React.Fragment key={`${i}-${label}`}>
                        <span className="marquee-text">{label}</span>
                        <span className="marquee-plus">+</span>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>

          <section className="why-rayon-section">
            <div className="why-rayon-container">
              <div className="why-rayon-header">
                <div className="why-badge">WHY CHOOSE US?</div>
                <h2 className="why-rayon-title">Why Industry Leaders Choose Rayon</h2>
              </div>

              <div className="why-rayon-content">
                <div className="why-left-list">
                  {whyPills.map((pill, idx) => (
                    <div className={`why-pill ${idx === 0 ? 'active' : ''}`} key={idx}>
                      <span>{pill}</span>
                      <div className="why-pill-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="why-middle-circle">
                  <div className="circle-ring">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} className={`circle-dot dot-${i}`}></div>
                    ))}
                    <div className="circle-img-wrap">
                      <img src={whyV3Center} alt="Lab Interior" className="circle-img" />
                      <div className="circle-overlay-icon">
                        <div className="speed-icon-wrap">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                            <path d="M12 12L16 10" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="why-right-benefits">
                  <h2 className="benefit-main-title">Well Ensure You Always Covid 19 Vaccine.</h2>
                  <p className="benefit-desc">We help ambitious businesses like yours generate more profits by building awareness.</p>
                  <p className="benefit-desc">We help ambitious businesses like yours generate more profits by building awareness.</p>

                  <div className="benefit-list">
                    <div className="benefit-connector"></div>
                    {whyBenefits.map((benefit, idx) => (
                      <div className="benefit-item" key={idx}>
                        <div className="benefit-icon-wrap">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="benefit-text">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="fun-facts-divider">
                <div className="fun-facts-line"></div>
                <span className="fun-facts-text">FUN AND FACTS</span>
                <div className="fun-facts-line"></div>
              </div>
            </div>
          </section>
          <section className="stats-row-section">
            <div className="stats-row-container">
              {funFacts.map((fact, idx) => {
                const numPart = fact.num.replace('+', '');
                return (
                  <div className="stat-item-final" key={idx}>
                    <div className="stat-num-box">
                      <span className="stat-num-outlined">{numPart}</span>
                      <span className="stat-plus-solid">+</span>
                    </div>
                    <p className="stat-label-final">{fact.text}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="consultation-section" aria-label="Get Consultation">
            <div className="consultation-container">
              <div className="consultation-image-box">
                <img src={scientistImage} alt="Scientist performing laboratory research" />
              </div>

              <div className="consultation-form-card">
                <div className="consult-hex-overlay">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 0 L186.6 50 L186.6 150 L100 200 L13.4 150 L13.4 50 Z" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.05" />
                    <path d="M186.6 50 L273.2 100 L273.2 200 L186.6 250 L100 200 L100 100 Z" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.05" />
                    <path d="M13.4 50 L100 100 L100 200 L13.4 150 L-73.2 100 L-73.2 0 Z" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.05" />
                    <path d="M100 -100 L186.6 -50 L186.6 50 L100 100 L13.4 50 L13.4 -50 Z" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.05" />
                  </svg>
                </div>

                <div className="consult-content">
                  <div className="consult-badge">CONTACT US</div>
                  <h2 className="consult-title">Let's Design Your Laboratory Setup</h2>

                  <form className="consult-grid-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="consult-row">
                      <div className="consult-field">
                        <select className="consult-input" defaultValue="">
                          <option value="" disabled>Choose a Service</option>
                          <option value="planning">Lab Planning</option>
                          <option value="furniture">Lab Furniture</option>
                          <option value="exhaust">Exhaust System</option>
                        </select>
                      </div>
                      <div className="consult-field">
                        <select className="consult-input" defaultValue="">
                          <option value="" disabled>Type of Clean</option>
                          <option value="class100">Class 100</option>
                          <option value="class1000">Class 1000</option>
                          <option value="class10000">Class 10000</option>
                        </select>
                      </div>
                    </div>

                    <div className="consult-row">
                      <div className="consult-field">
                        <input type="text" className="consult-input" placeholder="Total Floor Area (sq ft)" />
                      </div>
                      <div className="consult-field">
                        <input type="text" className="consult-input" placeholder="Your Name" />
                      </div>
                    </div>

                    <div className="consult-row full">
                      <div className="consult-field">
                        <input type="email" className="consult-input" placeholder="Email Address" />
                      </div>
                    </div>

                    <p className="consult-disclaimer">
                      Share your requirements and our experts will guide you with the right layout, products, and cost estimation.
                    </p>

                    <div className="consult-submit-wrap">
                      <div className="consult-btn-pill">
                        <button type="submit" className="consult-main-btn">
                          Get Consultation
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section className="serve-section-final" aria-label="What We Serve">
            <div className="serve-header-final">
              <h2 className="serve-heading-final">What We Serve</h2>
              <p className="serve-subheading-final">
                Precision-engineered components built to withstand rigorous scientific environments.
              </p>
            </div>

            <div className="serve-grid-final">
              {serveCards.map((card, index) => (
                <article className="serve-card-final" key={index}>
                  <div className="serve-card-bg-icon">
                    <ServeIcon type={card.icon} />
                  </div>

                  <div className="serve-card-header">
                    <div className="serve-card-main-icon">
                      <ServeIcon type={card.icon} />
                    </div>
                    <h3 className="serve-card-title-final">{card.title}</h3>
                  </div>

                  <div className="serve-card-body-final">
                    {card.texts.map((text, tIndex) => (
                      <p key={tIndex} className="serve-card-text-final">{text}</p>
                    ))}
                  </div>

                  <div className="serve-card-image-final-wrap">
                    <div className="serve-plus-hexagon-outer">
                      <div className="serve-plus-hexagon-inner">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </div>
                    </div>
                    <img src={card.image} alt={card.title} className="serve-card-image-final" />
                  </div>
                </article>
              ))}
            </div>
          </section>



          <section className="client-section" aria-label="Our Clients">
            <div className="client-bg-watermark">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50" cy="55" rx="38" ry="14" transform="rotate(-25, 50, 55)" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="150 50" strokeDashoffset="10" />
                <ellipse cx="50" cy="55" rx="38" ry="14" transform="rotate(35, 50, 55)" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="170 50" strokeDashoffset="100" />
                <g transform="rotate(-15, 50, 50)">
                  <path d="M42 36 L58 36 L58 44 L70 72 A 6 6 0 0 1 65 80 L35 80 A 6 6 0 0 1 30 72 L42 44 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M38 36 L62 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </g>
                <circle cx="48" cy="24" r="4" fill="currentColor" />
                <circle cx="60" cy="16" r="2.5" fill="currentColor" />
                <circle cx="44" cy="12" r="1.5" fill="currentColor" />
              </svg>
            </div>

            <h2 className="client-main-heading">Our Clients</h2>

            <div className="client-marquee-container">
              <div className="client-divider"></div>

              <div className="client-logo-row">
                <div className="cl-logo">
                  <span className="cl-logo-text">L</span>
                  <div className="cl-icon-a">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#0D1E44">
                      <path d="M12 4 L4 20 H7 L9 15 H15 L17 20 H20 L12 4 Z M10 12 L12 7 L14 12 H10 Z" />
                      <circle cx="12" cy="1" r="1.5" />
                      <circle cx="16" cy="3" r="1" />
                      <circle cx="8" cy="3" r="1" />
                    </svg>
                  </div>
                  <span className="cl-logo-text">B</span>
                </div>

                <div className="cl-logo">
                  <div className="cl-logo-sc">
                    <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="16" stroke="#0D1E44" strokeWidth="1" strokeDasharray="4 2" />
                      <ellipse cx="20" cy="20" rx="18" ry="8" transform="rotate(45 20 20)" stroke="#0D1E44" strokeWidth="1" />
                      <text x="20" y="25" fontSize="14" fontWeight="800" textAnchor="middle" fill="#0D1E44">SC</text>
                    </svg>
                  </div>
                  <span className="cl-logo-text">IENCE</span>
                </div>

                <div className="cl-logo">
                  <span className="cl-logo-text">BIOLAB</span>
                </div>

                <div className="cl-logo">
                  <span className="cl-logo-text">LAB</span>
                  <svg width="18" height="22" viewBox="0 0 20 24" fill="none">
                    <path d="M10 2L10 8L4 18C3.5 19 4 21 5.5 21H14.5C16 21 16.5 19 16 18L10 8" stroke="#0D1E44" strokeWidth="2" strokeLinejoin="round" />
                    <circle cx="10" cy="17" r="2" fill="#0D1E44" />
                    <path d="M13 14 Q15 10 18 11" stroke="#0D1E44" strokeWidth="1.5" strokeDasharray="2 2" />
                  </svg>
                  <span className="cl-logo-text">RA</span>
                </div>

                <div className="cl-logo" style={{ gap: '6px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#0D1E44" />
                    <path d="M8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8C9.79 8 8 9.79 8 12Z" fill="#0D1E44" />
                    <path d="M12 8V4 M12 20V16 M4 12H8 M20 12H16" stroke="#0D1E44" strokeWidth="1.5" />
                  </svg>
                  <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1', alignItems: 'flex-start' }}>
                    <span className="cl-logo-text" style={{ fontSize: '0.65rem', fontWeight: '800' }}>BIOLOGY</span>
                    <span className="cl-logo-text" style={{ fontSize: '0.65rem', fontWeight: '800' }}>CENTER</span>
                  </div>
                </div>

                <div className="cl-logo">
                  <span className="cl-logo-text" style={{ marginRight: '4px' }}>EC</span>
                  <svg width="18" height="22" viewBox="0 0 20 24" fill="none">
                    <path d="M10 16L14 10" stroke="#0D1E44" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 14L16 8" stroke="#0D1E44" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="15" cy="9" r="1.5" fill="#0D1E44" />
                    <path d="M6 20L14 20" stroke="#0D1E44" strokeWidth="2" strokeLinecap="round" />
                    <path d="M10 20V16" stroke="#0D1E44" strokeWidth="2" strokeLinecap="round" />
                    <path d="M7 16H13" stroke="#0D1E44" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="cl-logo-text" style={{ marginLeft: '4px' }}>LAB</span>
                </div>
              </div>

              <div className="client-divider"></div>

              <div className="client-logo-row">
                <div className="cl-logo">
                  <span className="cl-logo-text">L</span>
                  <div className="cl-icon-a">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#0D1E44">
                      <path d="M12 4 L4 20 H7 L9 15 H15 L17 20 H20 L12 4 Z M10 12 L12 7 L14 12 H10 Z" />
                      <circle cx="12" cy="1" r="1.5" />
                      <circle cx="16" cy="3" r="1" />
                      <circle cx="8" cy="3" r="1" />
                    </svg>
                  </div>
                  <span className="cl-logo-text">B</span>
                </div>

                <div className="cl-logo">
                  <div className="cl-logo-sc">
                    <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="16" stroke="#0D1E44" strokeWidth="1" strokeDasharray="4 2" />
                      <ellipse cx="20" cy="20" rx="18" ry="8" transform="rotate(45 20 20)" stroke="#0D1E44" strokeWidth="1" />
                      <text x="20" y="25" fontSize="14" fontWeight="800" textAnchor="middle" fill="#0D1E44">SC</text>
                    </svg>
                  </div>
                  <span className="cl-logo-text">IENCE</span>
                </div>

                <div className="cl-logo">
                  <span className="cl-logo-text">BIOLAB</span>
                </div>

                <div className="cl-logo">
                  <span className="cl-logo-text">LAB</span>
                  <svg width="18" height="22" viewBox="0 0 20 24" fill="none">
                    <path d="M10 2L10 8L4 18C3.5 19 4 21 5.5 21H14.5C16 21 16.5 19 16 18L10 8" stroke="#0D1E44" strokeWidth="2" strokeLinejoin="round" />
                    <circle cx="10" cy="17" r="2" fill="#0D1E44" />
                    <path d="M13 14 Q15 10 18 11" stroke="#0D1E44" strokeWidth="1.5" strokeDasharray="2 2" />
                  </svg>
                  <span className="cl-logo-text">RA</span>
                </div>

                <div className="cl-logo" style={{ gap: '6px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#0D1E44" />
                    <path d="M8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8C9.79 8 8 9.79 8 12Z" fill="#0D1E44" />
                    <path d="M12 8V4 M12 20V16 M4 12H8 M20 12H16" stroke="#0D1E44" strokeWidth="1.5" />
                  </svg>
                  <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1', alignItems: 'flex-start' }}>
                    <span className="cl-logo-text" style={{ fontSize: '0.65rem', fontWeight: '800' }}>BIOLOGY</span>
                    <span className="cl-logo-text" style={{ fontSize: '0.65rem', fontWeight: '800' }}>CENTER</span>
                  </div>
                </div>

                <div className="cl-logo">
                  <span className="cl-logo-text" style={{ marginRight: '4px' }}>EC</span>
                  <svg width="18" height="22" viewBox="0 0 20 24" fill="none">
                    <path d="M10 16L14 10" stroke="#0D1E44" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 14L16 8" stroke="#0D1E44" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="15" cy="9" r="1.5" fill="#0D1E44" />
                    <path d="M6 20L14 20" stroke="#0D1E44" strokeWidth="2" strokeLinecap="round" />
                    <path d="M10 20V16" stroke="#0D1E44" strokeWidth="2" strokeLinecap="round" />
                    <path d="M7 16H13" stroke="#0D1E44" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="cl-logo-text" style={{ marginLeft: '4px' }}>LAB</span>
                </div>
              </div>
            </div>
          </section>

          <section className="industries-section" aria-label="Industries We Serve">
            <div className="industries-header">
              <span className="industries-badge">INDUSTRIES WE SERVE</span>
              <h2 className="industries-title">Industries We Serve</h2>
              <p className="industries-subtitle">
                Precision-engineered components built to withstand rigorous scientific environments.
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
                    <div className="industry-action-btn-circle">
                      <div className="industry-action-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="industry-all-btn-wrap">
              <div className="industry-btn-container">
                <a href="#" className="industry-all-btn">
                  All Projects <span>→</span>
                </a>
              </div>
            </div>
          </section>

          <section className="blog-section" aria-label="Our Blogs">
            <div className="blog-header">
              <h2>Our Blogs</h2>
              <p>Precision-engineered components built to withstand rigorous scientific environments.</p>
            </div>

            <div className="blog-container">
              {/* Left Large Card */}
              <div className="blog-card-large">
                <div className="blog-card-large-image" style={{ backgroundImage: `url(${scientistImage})` }}></div>
                <div className="blog-card-large-content">
                  <div className="blog-meta">
                    <span className="blog-date">4 NOV, 2024</span>
                    <span className="blog-divider">/</span>
                    <span className="blog-category">CHEMISTRY</span>
                  </div>
                  <h3 className="blog-title-large">Hospital Labs Focused On<br />Patients Begin Here.</h3>
                  <div className="blog-content-divider"></div>
                  <p className="blog-excerpt">Most laboratory is a facility that provides controlled<br />conditions in which...</p>

                  <div className="blog-read-more-wrapper">
                    <a href="#" className="blog-read-more">
                      Read More <span>→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Small Cards List */}
              <div className="blog-list">
                <article className="blog-card-small">
                  <div className="blog-card-small-image" style={{ backgroundImage: `url(${blog1})` }}></div>
                  <div className="blog-card-small-content">
                    <div className="blog-meta-small">
                      <span className="blog-meta-item"><CalendarIcon /> NOVEMBER 04, 2024</span>
                      <span className="blog-meta-item"><UserIcon /> BY XLEBPBM</span>
                    </div>
                    <h4 className="blog-title-small">Hospital Labs Focused On<br />Patients Begin Here.</h4>
                  </div>
                </article>
                <div className="blog-list-divider"></div>

                <article className="blog-card-small">
                  <div className="blog-card-small-image" style={{ backgroundImage: `url(${blog2})` }}></div>
                  <div className="blog-card-small-content">
                    <div className="blog-meta-small">
                      <span className="blog-meta-item"><CalendarIcon /> NOVEMBER 04, 2024</span>
                      <span className="blog-meta-item"><UserIcon /> BY XLEBPBM</span>
                    </div>
                    <h4 className="blog-title-small">Exploring Anatomy Methods In<br />The Lab</h4>
                  </div>
                </article>
                <div className="blog-list-divider"></div>

                <article className="blog-card-small">
                  <div className="blog-card-small-image" style={{ backgroundImage: `url(${blog3})` }}></div>
                  <div className="blog-card-small-content">
                    <div className="blog-meta-small">
                      <span className="blog-meta-item"><CalendarIcon /> NOVEMBER 04, 2024</span>
                      <span className="blog-meta-item"><UserIcon /> BY XLEBPBM</span>
                    </div>
                    <h4 className="blog-title-small">A Laboratory Manual For<br />Contemporary Specimen...</h4>
                  </div>
                </article>
              </div>
            </div>

          </section>
        </>
      ) : (
        <ProductPage product={selectedProduct} onGetQuote={() => setShowQuoteModal(true)} />
      )}

      <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />

      {/* Redesigned Footer V2 */}
      {currentPage !== 'products' && (
        <footer className="footer-v2">
          <div className="footer-v2-watermark">RAYON</div>

          <div className="footer-v2-container">
            <div className="footer-v2-top-row">
              {/* Left: Logo & Brand */}
              <div className="footer-v2-brand-area">
                <div className="footer-v2-logo">
                  <img src={productNavLogo} alt="Rayon Lab Tech" style={{ height: '70px', width: 'auto' }} />
                </div>
                <p className="footer-v2-desc">
                  Pioneering precision laboratory manufacturing for global scientific excellence since 2008.
                </p>
                <div className="footer-v2-social">
                  <div className="social-icons-row">
                    <a href="#" className="social-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    </a>
                    <a href="#" className="social-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </a>
                    <a href="https://wa.me/yournumber" className="footer-whatsapp-btn" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                      WhatsApp Expert
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Newsletter */}
              <div className="footer-v2-newsletter">
                <h3>Subscribe to Our<br />Newsletter</h3>
                <div className="newsletter-v2-form">
                  <input type="email" placeholder="Enter Your Email Address" />
                  <button type="button">Subscribe Now <span>→</span></button>
                </div>
              </div>
            </div>

            <div className="footer-v2-divider"></div>

            <div className="footer-v2-links-grid">
              {/* Column 1: Useful Links */}
              <div className="footer-v2-col">
                <h4>Useful Link</h4>
                <div className="footer-v2-dual-links">
                  <ul>
                    <li><a href="#" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Blog</a></li>
                  </ul>
                  <ul>
                    <li><a href="#" onClick={(e) => handleNavClick(e, 'about-us')}>About</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>

              {/* Column 2: Working Time */}
              <div className="footer-v2-col">
                <h4>Working Time</h4>
                <ul className="footer-v2-info-list">
                  <li>Mon - Fri: 9.00am - 5.00pm</li>
                  <li>Saturday: 10.00am - 6.00pm</li>
                  <li>Sunday Closed</li>
                </ul>
              </div>

              {/* Column 3: Say Hello */}
              <div className="footer-v2-col">
                <h4>Say Hello</h4>
                <ul className="footer-v2-info-list footer-v2-contact">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    no-reply@pbminfotech.com
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    +1-800123-456-789
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-v2-bottom">
            <div className="footer-v2-bottom-container">
              <div className="footer-v2-copyright">
                Copyright © 2024 Xieb All Rights Reserved.
              </div>
              <div className="footer-v2-bottom-links">
                <a href="#">Privacy Policy</a>
                <span className="footer-v2-sep">|</span>
                <a href="#">Term And Condition</a>
                <span className="footer-v2-sep">|</span>
                <a href="#">FAQ</a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>

  );
}

export default App;
