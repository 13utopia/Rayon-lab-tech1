import React, { useState } from 'react';
import './why-choose-us.css';
import './why-rayon.css';
import './stats-row.css';
import './industries-serve.css';
import './product-page.css';
import './hero-v2.css';
import './footer.css';
import AboutUs from './AboutUs';
import BlogPage from './BlogPage';
import ContactUs from './ContactUs';
import PortfolioPage from './PortfolioPage';
import './quote-modal.css';
import './manufacturer-section.css';
import './sub-products.css';
import './what-we-serve-premium.css';
import './our-clients.css';
import scientistImage from './assets/scientist.png';
import showcase1 from './assets/showcase-1.png';
import showcase2 from './assets/showcase-2.png';
import showcase3 from './assets/showcase-3.png';
import infra1 from './assets/infra-1.png';
import infra2 from './assets/infra-2.png';
import infra3 from './assets/infra-3.jpg';
import heroMain from './assets/hero-v2-final.png';
import labInterior from './assets/hero-v3.png';
import serveNew1 from './assets/serve-v5-1.png';
import serveNew2 from './assets/serve-v5-2.png';
import serveNew3 from './assets/serve-v5-3.png';
import icon1 from './assets/feature-icon-1.png';
import icon2 from './assets/feature-icon-2.png';
import icon3 from './assets/feature-icon-3.png';
import icon4 from './assets/feature-icon-4.png';
import serveIcon1 from './assets/serve-icon-1.png';
import serveIcon2 from './assets/serve-icon-2.png';
import serveIcon3 from './assets/serve-icon-3.png';
import Logo from './assets/icon.png';
import whyCenter from './assets/why-center.png';
import labimage from './assets/labimage.png';
import blogFeatured from './assets/blog-featured.png';
import blogSide1 from './assets/blog-side-1.png';
import blogSide2 from './assets/blog-side-2.png';
import blogSide3 from './assets/blog-side-3.png';
import whyChooseUsCenter from './assets/why-choose-us-final.png';
import industryCollegesNew from './assets/serve-actual-1.png';
import industryChemicalNew from './assets/serve-actual-2.png';
import industryLabsNew from './assets/serve-actual-3.png';
import labIslandTable from './assets/laboratory-island-table.png';
import thumbMan from './assets/thumb-man.png';
import thumbLike from './assets/thumb-like.png';
import thumbCircle from './assets/thumb-circle.png';
import productHeroBg from './assets/product-hero-bg.png';
import productNavLogo from './assets/product-nav-logo.png';
import logoWhite from './assets/logo-white.png';
import clientBgIcon from './assets/client-bg-icon.png';
import { products } from './data/products';
import whyChooseUs1 from './assets/portfolio-s1-1.png';
import whyChooseUs2 from './assets/portfolio-s1-2.png';
import whyChooseUs3 from './assets/portfolio-s1-3.png';
import whyChooseUs4 from './assets/portfolio-4.png';

function FixedSidebar({ theme = 'light' }) {
  return (
    <div className={`fixed-sidebar-v2 ${theme}-theme`}>
      <a href="tel:+919909030607" className="sidebar-item-v2">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.18-2.18a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span>CALL</span>
      </a>

      <a href="https://wa.me/919909030607" target="_blank" rel="noopener noreferrer" className="sidebar-item-v2">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z" />
        </svg>
        <span>WHATSAPP</span>
      </a>

      <div className="sidebar-item-v2 is-quote">
        <div className="quote-box-inner">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="12" />
            <line x1="9" y1="15" x2="15" y2="15" />
          </svg>
          <span>QUOTE</span>
        </div>
      </div>

      <div className="sidebar-item-v2">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
        <span>BROCHURE</span>
      </div>
    </div>
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
  {
    title: 'Adaptive Lab Benches',
    description: 'Precision-engineered modular systems for dynamic research spaces.',
    image: infra1,
    productId: 'laboratory-island-table'
  },
  {
    title: 'Cleanroom Stations',
    description: 'Ultra-pure environments designed for sensitive biological analysis.',
    image: infra2,
    productId: 'laboratory-island-table'
  },
  {
    title: 'Chemical Flow Modules',
    description: 'Optimized cabinetry for streamlined chemical and reagent access.',
    image: infra3,
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
    desc: 'Custom laboratory furniture and workstations designed for academic excellence and durability.',
    image: industryCollegesNew
  },
  {
    title: 'Chemical Industry',
    desc: 'Chemical-resistant storage systems and specialized equipment for high-performance industrial labs.',
    image: industryChemicalNew
  },
  {
    title: 'Labs',
    desc: 'Advanced research lab environments built for precision, safety, and operational efficiency.',
    image: industryLabsNew
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
      return <img src={serveIcon1} alt="Requirement Analysis" className="serve-icon-png" />;
    case 'design':
      return <img src={serveIcon2} alt="Design & Planning" className="serve-icon-png" />;
    case 'manufacturing':
      return <img src={serveIcon3} alt="Manufacturing & Installation" className="serve-icon-png" />;
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
  const [phone, setPhone] = React.useState('');
  const [isVerified, setIsVerified] = React.useState(false);

  if (!isOpen) return null;

  const handlePhoneChange = (e) => {
    // Only allow digits and limit to 10
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length === 10 && isVerified) {
      const formData = new FormData(e.target);
      const name = formData.get('fullName');
      const email = formData.get('email');
      const city = formData.get('city');
      const requirements = formData.get('requirements');

      const subject = `Technical Quote Request from ${name}`;
      const body = `
Full Name: ${name}
Institutional E-mail: ${email}
Direct Line: +91 ${phone}
Facility Location: ${city}

Technical Requirements:
${requirements}
      `.trim();

      const mailtoLink = `mailto:Rltsales@rayonlabtech.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;

      alert('Technical Quote Protocol Initiated! Opening your mail client...');
      onClose();
    }
  };

  return (
    <div className="quote-modal-overlay" onClick={onClose}>
      <div className="quote-modal-content" onClick={e => e.stopPropagation()}>
        <button className="quote-modal-close" onClick={onClose}>&times;</button>
        <div className="quote-modal-grid">
          <div className="quote-modal-left">
            <h2 className="quote-modal-title">Technical Quote Request</h2>
            <p className="quote-modal-desc">
              Provide your project specifications below. Our precision engineering team will review your requirements and provide a calibrated proposal within 24 hours.
            </p>
            <div className="quote-feature-list">
              <div className="quote-feature">
                <div className="quote-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                </div>
                <div className="quote-feature-text">
                  <strong>CALIBRATED ASSESSMENT</strong>
                  <p>Exact matching of hardware to procedural needs.</p>
                </div>
              </div>
              <div className="quote-feature">
                <div className="quote-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
                </div>
                <div className="quote-feature-text">
                  <strong>EXPERT REVIEW</strong>
                  <p>Analysis by certified laboratory technicians.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="quote-modal-right">
            <form className="quote-form" onSubmit={handleSubmit}>
              <h3 className="form-section-title">Client Data</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="fullName" placeholder="abc" required />
                </div>
                <div className="form-group">
                  <label>Institutional E-mail</label>
                  <input type="email" name="email" placeholder="abc@company.in" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Direct Line</label>
                  <div className="phone-input-wrapper" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <span style={{ position: 'absolute', left: '12px', color: '#1a2b56', fontWeight: '600' }}>+91</span>
                    <input
                      type="text"
                      placeholder="99090 30607"
                      value={phone}
                      onChange={handlePhoneChange}
                      style={{ paddingLeft: '45px' }}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Facility Location (City)</label>
                  <input type="text" name="city" placeholder="India" required />
                </div>
              </div>

              <h3 className="form-section-title">Technical Requirements</h3>
              <div className="form-group">
                <label>Equipment Specifications & Usage Context</label>
                <textarea name="requirements" placeholder="Describe the required parameters, throughput needs, and integration environment..." required></textarea>
              </div>

              <div className="human-verification">
                <div className="hv-left">
                  <div className={`hv-check-box ${isVerified ? 'checked' : ''}`} onClick={() => setIsVerified(!isVerified)}>
                    {isVerified && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                  </div>
                  <div className="hv-text">
                    <strong>Human Verification</strong>
                    <span>Please confirm you are a human operator.</span>
                  </div>
                </div>
                <div className="hv-shield">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
              </div>

              <button type="submit" className="submit-protocol-btn" disabled={phone.length !== 10 || !isVerified}>
                Submit Protocol →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppointmentModal({ isOpen, onClose }) {
  const [phone, setPhone] = React.useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('fullName');
    const email = formData.get('email');

    const subject = `New Appointment Request from ${name}`;
    const body = `
Full Name: ${name}
E-mail: ${email}
Phone: +91 ${phone}
    `.trim();

    const mailtoLink = `mailto:Rltsales@rayonlabtech.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    onClose();
  };

  return (
    <div className="quote-modal-overlay" onClick={onClose}>
      <div className="quote-modal-content appointment-modal-content" onClick={e => e.stopPropagation()}>
        <button className="quote-modal-close" onClick={onClose}>&times;</button>
        <div className="appointment-modal-header">
          <h2 className="quote-modal-title">Book an Appointment</h2>
          <p className="quote-modal-desc">Fill in your details and our team will get back to you shortly.</p>
        </div>
        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="fullName" placeholder="abc" required />
          </div>
          <div className="form-group">
            <label>E-mail Address</label>
            <input type="email" name="email" placeholder="abc@company.in" required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <div className="phone-input-wrapper" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <span style={{ position: 'absolute', left: '12px', color: '#1a2b56', fontWeight: '600' }}>+91</span>
              <input
                type="tel"
                placeholder="99090 30607"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                style={{ paddingLeft: '45px' }}
                required
              />
            </div>
          </div>
          <button type="submit" className="submit-protocol-btn" style={{ width: '100%', marginTop: '10px' }}>
            Book Now →
          </button>
        </form>
      </div>
    </div>
  );
}

function ProductPage({ product, onGetQuote, onProductSelect }) {
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
                <img
                  key={activeImageIndex}
                  src={images[activeImageIndex]}
                  alt={product.title}
                  className="gallery-slide-in"
                />
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

      {product.subProducts && (
        <section className="sub-products-section">
          <div className="sub-products-container">
            <div className="sub-products-header">
              <h2 className="sub-products-title">Explore Our Range</h2>
              <div className="sub-products-underline"></div>
            </div>
            <div className="sub-products-grid">
              {product.subProducts.map((sub) => (
                <div
                  key={sub.id}
                  className="sub-product-card"
                  onClick={(e) => {
                    onProductSelect(sub);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="sub-product-image">
                    <img src={sub.images[0]} alt={sub.title} />
                  </div>
                  <div className="sub-product-info">
                    <h3>{sub.title}</h3>
                    <p>{sub.heroSubtitle}</p>
                    <button className="view-details-btn">View Details →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="product-cta" aria-label="Request a Quote">
        <div className="product-cta-watermark">RAYON</div>
        <div className="product-cta-container">
          <div className="product-cta-left">
            <div className="cta-visual-col">
              <div className="cta-point"><div className="cta-check">✓</div></div>


            </div>
            <div className="cta-text-col">
              <div className="cta-text-row">Transform Your Laboratory With High-Quality Modular Furniture</div>

            </div>
          </div>
          <div className="product-cta-right">
            <button className="product-cta-btn outline" onClick={() => onGetQuote()}>
              Request A Quote <span className="arrow">→</span>
            </button>

          </div>
        </div>
      </section>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-watermark">RAYON</div>

      {/* Newsletter Banner */}
      <div className="footer-newsletter-banner">
        <div className="footer-newsletter-v2">
          <div className="footer-nl-text">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get the latest updates on lab solutions, product launches &amp; industry news.</p>
          </div>
          <form className="footer-nl-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" />
            <button type="submit" className="footer-nl-btn">
              Subscribe Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
          </form>
        </div>
      </div>

      {/* 4-Column Grid */}
      <div className="footer-container">
        <div className="footer-grid">

          {/* Col 1 – Brand */}
          <div className="footer-brand-col">
            <img src={productNavLogo} alt="Rayon Lab Tech" className="footer-logo-img" />
            <p className="footer-desc">
              Pioneering precision laboratory manufacturing for global scientific excellence since 2008. Trusted by institutions across India.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-btn" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" className="footer-social-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="#" className="footer-social-btn" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.57 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>
              </a>
            </div>
            <a href="https://wa.me/1800123456" className="footer-wa-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              WhatsApp Expert
            </a>
          </div>

          {/* Col 2 – Useful Links */}
          <div className="footer-links-col">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'about-us')}>About Us</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'products')}>Products</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'portfolio')}>Portfolio</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'blog')}>Blog</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'contact-us')}>Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3 – Our Services */}
          <div className="footer-links-col">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Lab Furniture</a></li>
              <li><a href="#">Fume Hoods</a></li>
              <li><a href="#">Storage Cabinets</a></li>
              <li><a href="#">Exhaust Systems</a></li>
              <li><a href="#">Lab Planning</a></li>
              <li><a href="#">Installation</a></li>
            </ul>
          </div>

          {/* Col 4 – Contact */}
          <div className="footer-contact-col">
            <h4>Get In Touch</h4>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </div>
              <div className="footer-contact-info">
                <span>Phone</span>
                <a href="tel:+1800123456789"></a>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </div>
              <div className="footer-contact-info">
                <span>Email</span>
                <a href="mailto:info@rayonlabtech.com">info@rayonlabtech.com</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div className="footer-contact-info">
                <span>Address</span>
                <p>Ahmedabad, Gujarat, India</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <div className="footer-contact-info">
                <span>Working Hours</span>
                <p>Mon–Sat: 9:00am – 6:00pm</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            Copyright © 2024 <span>Rayon Lab Tech</span>. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [activeShowcase, setActiveShowcase] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState('home');
  const [selectedProduct, setSelectedProduct] = React.useState(products[0]);
  const [showQuoteModal, setShowQuoteModal] = React.useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isPremiumMobileMenuOpen, setIsPremiumMobileMenuOpen] = React.useState(false);
  const [isMainMobileMenuOpen, setIsMainMobileMenuOpen] = React.useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = React.useState(false);
  const [hoveredWhyIdx, setHoveredWhyIdx] = React.useState(0);

  // Auto-slide effect for showcase section (Home Page)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveShowcase((prev) => {
        const totalSlides = Math.ceil(showcaseCards.length / 3);
        if (totalSlides <= 1) return 0;
        return prev < totalSlides - 1 ? prev + 1 : 0;
      });
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const [consultForm, setConsultForm] = useState({
    service: '',
    cleanType: '',
    area: '',
    name: '',
    email: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success'

  const handleConsultSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Prepare mailto link
    const subject = `Consultation Request: ${consultForm.service} - ${consultForm.name}`;
    const body = `
New Consultation Request from Rayon Lab Tech Website

The user has requested a consultation for the following service and section:

Service Requested: ${consultForm.service.toUpperCase()}
Section/Type: ${consultForm.cleanType}
Estimated Area: ${consultForm.area} sq ft

Customer Details:
----------------
Name: ${consultForm.name}
Email: ${consultForm.email}

This request was submitted via the "Get your free estimate" section.
    `.trim();

    const mailtoLink = `mailto:Rltsales@rayonlabtech.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open mail client
    window.location.href = mailtoLink;

    // Simulate success
    setTimeout(() => {
      setFormStatus('success');
      setConsultForm({ service: '', cleanType: '', area: '', name: '', email: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1000);
  };

  const handleNavClick = (e, page, product = null) => {
    e.preventDefault();
    setCurrentPage(page);
    setIsDropdownOpen(false); // Close dropdown on any nav click
    setIsPremiumMobileMenuOpen(false);
    setIsMainMobileMenuOpen(false);
    if (product) {
      setSelectedProduct(product);
    } else if (page === 'products' && !product) {
      setSelectedProduct(products[0]);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToConsultation = (e) => {
    if (e) e.preventDefault();
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById('consultation-form');
        if (element) {
          const yOffset = -100; // Offset for header
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300);
    } else {
      const element = document.getElementById('consultation-form');
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {currentPage === 'contact-us' && <FixedSidebar theme="light" />}
      {currentPage === 'blog' && <FixedSidebar theme="blog" />}
      <div className={`page-shell ${currentPage === 'products' ? 'page-shell-products' : ''}`}>
        <header className={`topbar ${(currentPage === 'products' || currentPage === 'about-us' || currentPage === 'home' || currentPage === 'blog' || currentPage === 'contact-us' || currentPage === 'portfolio') ? 'product-header-premium' : ''}`}>
          <div className="premium-nav-bar">
            <div className="premium-nav-logo" onClick={(e) => handleNavClick(e, 'home')}>
              <img src={productNavLogo} alt="Rayon Lab Tech" />
            </div>

            <button
              type="button"
              className="premium-nav-menu-btn"
              aria-label={isPremiumMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isPremiumMobileMenuOpen}
              onClick={() => setIsPremiumMobileMenuOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {isPremiumMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="4" y1="6" x2="20" y2="6"></line>
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="18" x2="20" y2="18"></line>
                  </>
                )}
              </svg>
            </button>

            <nav className="premium-nav-links">
              {navItems.map((item, index) => {
                const pageId = item.toLowerCase().replace(/\s+/g, '-');
                const isProducts = pageId === 'products';
                const isHome = pageId === 'home';
                const isAbout = pageId === 'about-us';

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
                            <div key={p.id} className="dropdown-item-container">
                              <div
                                className="dropdown-item"
                                onClick={(e) => handleNavClick(e, 'products', p)}
                              >
                                {p.title}
                                {p.subProducts && <span className="flyout-arrow">›</span>}
                              </div>
                              {p.subProducts && (
                                <div className="flyout-submenu">
                                  {p.subProducts.map((sub) => (
                                    <div
                                      key={sub.id}
                                      className="dropdown-item sub-item"
                                      onClick={(e) => handleNavClick(e, 'products', sub)}
                                    >
                                      {sub.title}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href="#"
                        className={currentPage === pageId ? 'active' : ''}
                        onClick={(e) => {
                          if (isHome || isAbout || isProducts || pageId === 'blog' || pageId === 'contact-us' || pageId === 'portfolio') {
                            handleNavClick(e, pageId);
                          } else {
                            e.preventDefault();
                          }
                        }}
                      >
                        {item.toUpperCase()}
                      </a>
                    )}
                    {index < navItems.length - 1 && (
                      <span className="nav-dot">
                        <svg width="4" height="4" viewBox="0 0 4 4" fill="currentColor">
                          <circle cx="2" cy="2" r="2" />
                        </svg>
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </nav>

            <div className="premium-nav-right">
              <a href="tel:+1212255511" className="nav-phone-group">
                <div className="nav-icon-circle phone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="nav-phone-num">+91 9909030607</span>
              </a>
              <div className="nav-icon-circle search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <button className="nav-appointment-btn" onClick={() => setShowAppointmentModal(true)}>
                Appointment
                <span className="btn-arrow">
                  <svg width="18" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </button>
            </div>


            <div className={`premium-mobile-menu ${isPremiumMobileMenuOpen ? 'is-open' : ''}`}>
              <div className="premium-mobile-menu-inner">
                {navItems.map((item) => {
                  const pageId = item.toLowerCase().replace(/\s+/g, '-');
                  const isProducts = pageId === 'products';

                  if (isProducts) {
                    return (
                      <div className="premium-mobile-group" key={item}>
                        <button
                          type="button"
                          className={`premium-mobile-link ${currentPage === 'products' ? 'active' : ''}`}
                          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
                          onClick={(e) => {
                            e.preventDefault();
                            setIsMobileProductsOpen(!isMobileProductsOpen);
                          }}
                        >
                          <span>{item.toUpperCase()}</span>
                          <span className="mobile-expand-icon" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{isMobileProductsOpen ? '−' : '+'}</span>
                        </button>
                        {isMobileProductsOpen && (
                          <div className="premium-mobile-sublist">
                            {products.map((p) => (
                              <div className="premium-mobile-group" key={p.id}>
                                <button
                                  type="button"
                                  className={`premium-mobile-sublink ${selectedProduct?.id === p.id ? 'active' : ''}`}
                                  onClick={(e) => {
                                    handleNavClick(e, 'products', p);
                                    setIsPremiumMobileMenuOpen(false); // Close menu on selection
                                  }}
                                >
                                  {p.title}
                                  {p.subProducts && <span className="mobile-expand-icon">›</span>}
                                </button>

                                {p.subProducts && (
                                  <div className="premium-mobile-sub-expand">
                                    {p.subProducts.map((sub) => (
                                      <button
                                        key={sub.id}
                                        type="button"
                                        className={`premium-mobile-sublink sub-item ${selectedProduct?.id === sub.id ? 'active' : ''}`}
                                        onClick={(e) => {
                                          handleNavClick(e, 'products', sub);
                                          setIsPremiumMobileMenuOpen(false); // Close menu on selection
                                        }}
                                      >
                                        {sub.title}
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <button
                      type="button"
                      key={item}
                      className={`premium-mobile-link ${currentPage === pageId ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, pageId)}
                    >
                      {item.toUpperCase()}
                    </button>
                  );
                })}

                <div className="premium-mobile-contact">
                  <a href="tel:+1212255511" className="nav-phone-group">
                    <div className="nav-icon-circle phone">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <span className="nav-phone-num"></span>
                  </a>
                </div>

                <button type="button" className="nav-appointment-btn" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }} onClick={() => { setIsPremiumMobileMenuOpen(false); setShowAppointmentModal(true); }}>
                  Appointment <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {currentPage === 'about-us' ? (
          <AboutUs onGetQuote={() => setShowQuoteModal(true)} />
        ) : currentPage === 'blog' ? (
          <BlogPage />
        ) : currentPage === 'portfolio' ? (
          <PortfolioPage onGetQuote={() => setShowQuoteModal(true)} />
        ) : currentPage === 'contact-us' ? (
          <ContactUs />
        ) : currentPage === 'home' ? (
          <>
            <section className="hero-custom-section" aria-label="Hero Section">
              <div className="hero-custom-bg-text">RAYON</div>
              <div className="hero-custom-content">
                <h1 className="hero-custom-title">
                  Manufacturer Of Premium Laboratory<br />
                  Furniture & Equipment In <strong>Ahmedabad</strong><br />
                  For Your Lab Needs :
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
                  <button type="button" className="showcase-v2-arrow" onClick={() => setActiveShowcase((prev) => (prev > 0 ? prev - 1 : Math.ceil(showcaseCards.length / 3) - 1))}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                  </button>
                  <button type="button" className="showcase-v2-arrow" onClick={() => setActiveShowcase((prev) => (prev < Math.ceil(showcaseCards.length / 3) - 1 ? prev + 1 : 0))}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>

              <div className="showcase-v2-grid">
                {showcaseCards.slice(activeShowcase * 3, (activeShowcase + 1) * 3).map((card, idx) => (
                  <article
                    className="showcase-v2-card is-active"
                    key={`${activeShowcase}-${card.title}`}
                    onClick={(e) => {
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
                {[...Array(Math.ceil(showcaseCards.length / 3))].map((_, i) => (
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

            <section className="hero-container">
              {/* Background Watermark */}
              <div className="hero-watermark">RAYON</div>

              <div className="hero-content">
                <div className="text-side">
                  <h1 className="hero-title">
                    Manufacturer Of Premium Laboratory <br />
                    Furniture & Equipment In Ahmedabad <br />
                    For Your Lab Needs
                  </h1>
                  <p className="hero-subtitle">
                    Trusted by institutions and industries, Rayon Lab Tech delivers reliable,
                    durable, and fully customized laboratory solutions built to perform in
                    demanding environments.
                  </p>

                  <div className="hero-buttons">
                    <button className="btn-primary" onClick={(e) => handleNavClick(e, 'products')}>
                      Our Products <span>&rarr;</span>
                    </button>
                    <button className="btn-outline" onClick={scrollToConsultation}>
                      Our Services <span>&rarr;</span>
                    </button>
                  </div>
                </div>

                <div className="image-side">
                  <img src={labimage} alt="Laboratory Equipment" className="main-lab-img" />
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
                      <div 
                        className={`why-pill ${hoveredWhyIdx === idx ? 'active' : ''}`} 
                        key={idx}
                        onMouseEnter={() => setHoveredWhyIdx(idx)}
                        onClick={() => setHoveredWhyIdx(idx)} // Added for mobile tap support
                      >
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
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={`circle-dot dot-${i}`}></div>
                      ))}
                      <div className="circle-img-wrap">
                        <img 
                          src={
                            hoveredWhyIdx === 0 ? whyChooseUs1 :
                            hoveredWhyIdx === 1 ? whyChooseUs2 :
                            hoveredWhyIdx === 2 ? whyChooseUs3 :
                            hoveredWhyIdx === 3 ? whyChooseUs4 :
                            whyChooseUsCenter
                          } 
                          alt="Lab Interior" 
                          className="circle-img hover-transition" 
                        />
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

            <section className="consultation-section" id="consultation-form" aria-label="Get Consultation">
              <div className="consultation-container">
                {/* Left Side: Scientist Image */}
                <div className="consultation-image-box">
                  <img src={scientistImage} alt="Scientist performing laboratory research" />
                </div>

                {/* Right Side: Dark Form Card */}
                <div className="consultation-form-card">
                  {/* Background Pattern */}
                  <div className="consult-pattern-overlay">
                    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.08">
                        <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" />
                        <path d="M150 0 L200 25 L200 75 L150 100 L100 75 L100 25 Z" />
                        <path d="M250 0 L300 25 L300 75 L250 100 L200 75 L200 25 Z" />
                        <path d="M50 100 L100 125 L100 175 L50 200 L0 175 L0 125 Z" />
                        <path d="M150 100 L200 125 L200 175 L150 200 L100 175 L100 125 Z" />
                        <path d="M250 100 L300 125 L300 175 L250 200 L200 175 L200 125 Z" />
                      </g>
                    </svg>
                  </div>

                  <div className="consult-content">
                    <div className="consult-badge-pill">CONTACT US</div>
                    <h2 className="consult-main-title">Get your free estimate!</h2>

                    {formStatus === 'success' ? (
                      <div className="consult-success-message">
                        <div className="success-icon">✓</div>
                        <h3>Thank you!</h3>
                        <p>Your consultation request has been sent to our sales team.</p>
                      </div>
                    ) : (
                      <form className="consult-modern-form" onSubmit={handleConsultSubmit}>
                        <div className="consult-form-grid">
                          <div className="consult-input-group">
                            <select
                              className="consult-glass-input"
                              value={consultForm.service}
                              onChange={(e) => setConsultForm({ ...consultForm, service: e.target.value })}
                              required
                            >
                              <option value="" disabled>Choose a Service</option>
                              <option value="planning">Lab Planning</option>
                              <option value="furniture">Lab Furniture</option>
                              <option value="exhaust">Exhaust System</option>
                            </select>
                          </div>
                          <div className="consult-input-group">
                            <select
                              className="consult-glass-input"
                              value={consultForm.cleanType}
                              onChange={(e) => setConsultForm({ ...consultForm, cleanType: e.target.value })}
                              required
                            >
                              <option value="" disabled>Type of Clean</option>
                              <option value="class100">Class 100</option>
                              <option value="class1000">Class 1000</option>
                              <option value="class10000">Class 10000</option>
                            </select>
                          </div>
                          <div className="consult-input-group">
                            <input
                              type="text"
                              className="consult-glass-input"
                              placeholder="Total Floor Area (sq ft)"
                              value={consultForm.area}
                              onChange={(e) => setConsultForm({ ...consultForm, area: e.target.value })}
                              required
                            />
                          </div>
                          <div className="consult-input-group">
                            <input
                              type="text"
                              className="consult-glass-input"
                              placeholder="Your Name"
                              value={consultForm.name}
                              onChange={(e) => setConsultForm({ ...consultForm, name: e.target.value })}
                              required
                            />
                          </div>
                          <div className="consult-input-group full-width">
                            <input
                              type="email"
                              className="consult-glass-input"
                              placeholder="Email Address"
                              value={consultForm.email}
                              onChange={(e) => setConsultForm({ ...consultForm, email: e.target.value })}
                              required
                            />
                          </div>
                        </div>

                        <div className="consult-footer-row">
                          <p className="consult-helper-text">
                            Submit this information and we will send you the cost for the service.
                          </p>
                          <div className="consult-submit-btn-wrap">
                            <button
                              type="submit"
                              className="consult-premium-btn"
                              disabled={formStatus === 'submitting'}
                            >
                              {formStatus === 'submitting' ? 'Sending...' : 'Get Consultation'} <span>&rarr;</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </section>

            <section className="serve-section-premium" aria-label="What We Serve">
              <div className="serve-container-premium">
                <div className="serve-header-premium">
                  <h2>What We Serve</h2>
                  <p>
                    Precision-engineered components built to withstand rigorous scientific environments.
                  </p>
                </div>

                <div className="serve-grid-premium">
                  {serveCards.map((card, index) => (
                    <article className="serve-card-premium" key={index}>
                      {/* Background Icon Watermark */}
                      <div className="serve-card-watermark">
                        <ServeIcon type={card.icon} />
                      </div>

                      <div className="serve-card-content-wrap">
                        <div className="serve-card-top">
                          <div className="serve-card-icon-box">
                            <ServeIcon type={card.icon} />
                          </div>
                          <h3 className="serve-card-title">{card.title}</h3>
                        </div>

                        <div className="serve-card-line"></div>

                        <div className="serve-card-desc-list">
                          {card.texts.map((t, idx) => (
                            <p key={idx}>{t}</p>
                          ))}
                        </div>
                      </div>

                      <div className="serve-card-image-section">
                        <div className="serve-card-image-box">
                          <img src={card.image} alt={card.title} />
                        </div>
                        <div className="serve-hover-hexagon-overlay">
                          <div className="serve-hexagon-outer-white">
                            <div className="serve-hexagon-center-btn">
                              <span className="plus-icon">+</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* <section className="client-section-v2" aria-label="Our Clients">


              <div className="client-container-v2">
                <h2 className="client-main-heading-centered">Our Clients</h2>

                <div className="client-logo-grid-v2">
                  <div className="client-divider-v2"></div>
            <div className="client-logo-row-v2"> 
              <div className="client-logo-item-v2">
                <div className="logo-lab">
                  <div className="lab-text-wrap">
                    <span className="l-char">L</span>
                    <div className="lab-dots-diamond">
                      <div className="d-dot"></div>
                      <div className="d-mid"><div className="d-dot"></div><div className="d-dot"></div></div>
                      <div className="d-dot"></div>
                    </div>
                    <div className="a-char-stylized">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 22h4.5L12 9l5.5 13H22L12 2z" />
                        <path d="M12 14l-2 5h4l-2-5z" opacity="0.5" />
                      </svg>
                    </div>
                    <span className="b-char">B</span>
                  </div>
                </div>
              </div>

              <div className="client-logo-item-v2">
                <div className="logo-science-v2">
                  <div className="sc-orb-container">
                    <svg viewBox="0 0 40 40" className="sc-orb-svg">
                      <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="80 33" />
                      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" className="sc-text-inner">SC</text>
                    </svg>
                  </div>
                  <span className="science-text-v2">IENCE</span>
                </div>
              </div>

              <div className="client-logo-item-v2">
                <div className="logo-biolab-v2">BIOLAB</div>
              </div>

                <div className="client-logo-item-v2">
                <div className="logo-labora-v2">
                  <span className="lab-txt">LAB</span>
                  <div className="flask-o-stylized">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 2h6M10 2v6L5 21h14L14 8V2" />
                      <path d="M7 16h10" strokeWidth="1" opacity="0.5" />
                      <circle cx="12" cy="14" r="2" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="ra-txt">RA</span>
                </div>
              </div>

              <div className="client-logo-item-v2">
                <div className="logo-biology-v2">
                  <div className="bio-square-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <rect x="2" y="2" width="20" height="20" rx="4" />
                      <path d="M8 7c0 0 4 2 4 5s-4 5-4 5M16 7c0 0-4 2-4 5s4 5 4 5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="bio-text-stack">
                    <span className="bio-top">BIOLOGY</span>
                    <span className="bio-bot">CENTER</span>
                  </div>
                </div>
              </div>
              <div className="client-logo-item-v2">
                <div className="logo-ecolab-v2">
                  <span className="ec-txt">EC</span>
                  <div className="micro-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 18h8M10 18v3M9 21h2M7 14c0-3.3 2.7-6 6-6h1V4h2v4h1c1.1 0 2 .9 2 2v4M12 11c-1.1 0-2 .9-2 2v1M14 11c1.1 0 2 .9 2 2v1" />
                    </svg>
                  </div>
                  <span className="lab-txt">LAB</span>
                </div>
              </div>
            </div>

            <div className="client-divider-v2"></div>
            <div className="client-logo-row-v2">
              <div className="client-logo-item-v2">
                <div className="logo-lab">
                  <div className="lab-text-wrap">
                    <span className="l-char">L</span>
                    <div className="lab-dots-diamond">
                      <div className="d-dot"></div>
                      <div className="d-mid"><div className="d-dot"></div><div className="d-dot"></div></div>
                      <div className="d-dot"></div>
                    </div>
                    <div className="a-char-stylized">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 22h4.5L12 9l5.5 13H22L12 2z" />
                        <path d="M12 14l-2 5h4l-2-5z" opacity="0.5" />
                      </svg>
                    </div>
                    <span className="b-char">B</span>
                  </div>
                </div>
              </div>
              <div className="client-logo-item-v2">
                <div className="logo-science-v2">
                  <div className="sc-orb-container">
                    <svg viewBox="0 0 40 40" className="sc-orb-svg">
                      <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="80 33" />
                      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" className="sc-text-inner">SC</text>
                    </svg>
                  </div>
                  <span className="science-text-v2">IENCE</span>
                </div>
              </div>
              <div className="client-logo-item-v2">
                <div className="logo-biolab-v2">BIOLAB</div>
              </div>
              <div className="client-logo-item-v2">
                <div className="logo-labora-v2">
                  <span className="lab-txt">LAB</span>
                  <div className="flask-o-stylized">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 2h6M10 2v6L5 21h14L14 8V2" />
                      <path d="M7 16h10" strokeWidth="1" opacity="0.5" />
                      <circle cx="12" cy="14" r="2" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="ra-txt">RA</span>
                </div>
              </div>
              <div className="client-logo-item-v2">
                <div className="logo-biology-v2">
                  <div className="bio-square-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <rect x="2" y="2" width="20" height="20" rx="4" />
                      <path d="M8 7c0 0 4 2 4 5s-4 5-4 5M16 7c0 0-4 2-4 5s4 5 4 5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="bio-text-stack">
                    <span className="bio-top">BIOLOGY</span>
                    <span className="bio-bot">CENTER</span>
                  </div>
                </div>
              </div>
              <div className="client-logo-item-v2">
                <div className="logo-ecolab-v2">
                  <span className="ec-txt">EC</span>
                  <div className="micro-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 18h8M10 18v3M9 21h2M7 14c0-3.3 2.7-6 6-6h1V4h2v4h1c1.1 0 2 .9 2 2v4M12 11c-1.1 0-2 .9-2 2v1M14 11c1.1 0 2 .9 2 2v1" />
                    </svg>
                  </div>
                  <span className="lab-txt">LAB</span>
                </div>
              </div>
            </div>

            <div className="client-divider-v2"></div>
          </div>
      </div>
    </section > */
            }

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
                <h2 className="blog-main-title">Our Blogs</h2>
                <p className="blog-main-subtitle">Precision-engineered components built to withstand rigorous scientific environments.</p>
              </div>

              <div className="blog-container">
                {/* Left Large Card */}
                <div className="blog-card-large">
                  <div className="blog-card-large-image" style={{ backgroundImage: `url(${blogFeatured})` }}></div>
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
                    <div className="blog-card-small-image" style={{ backgroundImage: `url(${blogSide1})` }}></div>
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
                    <div className="blog-card-small-image" style={{ backgroundImage: `url(${blogSide2})` }}></div>
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
                    <div className="blog-card-small-image" style={{ backgroundImage: `url(${blogSide3})` }}></div>
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
          <ProductPage
            product={selectedProduct}
            onGetQuote={() => setShowQuoteModal(true)}
            onProductSelect={(p) => setSelectedProduct(p)}
          />
        )}

        <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
        <AppointmentModal isOpen={showAppointmentModal} onClose={() => setShowAppointmentModal(false)} />
        <footer className="footer-premium-v2">
          {/* Main Footer Body */}
          <div className="footer-main-v2">
            {/* Watermark Background */}
            <div className="bg-watermark-v2">RAYON</div>

            <div className="footer-top-row">
              {/* Branding Column on the Left */}
              <div className="footer-col-v2 branding">
                <img src={logoWhite} alt="Rayon Logo" className="footer-logo-v2" />
                <p className="footer-tagline-v2">
                  Pioneering precision laboratory manufacturing for global scientific excellence since 2008.
                </p>
                <div className="footer-social-v2">
                  <div className="social-circle-v2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div>
                  <div className="social-circle-v2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
                  <a href="https://wa.me/919909030607" target="_blank" rel="noopener noreferrer" className="whatsapp-pill-v2">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.801.983 3.848 1.503 5.913 1.504h.005c6.554 0 11.89-5.335 11.893-11.893a11.826 11.826 0 00-3.48-8.413z" /></svg>
                    WhatsApp Expert
                  </a>
                </div>
              </div>

              {/* Newsletter on the Right */}
              <div className="footer-newsletter-v2">
                <h2 className="newsletter-title-v2">Subscribe to Our Newsletter</h2>
                <div className="newsletter-form-v2">
                  <input type="email" placeholder="Enter Your Email Address" className="newsletter-input-v2" />
                  <button type="button" className="newsletter-btn-v2">Subscribe Now <span className="arrow">→</span></button>
                </div>
              </div>
            </div>

            <div className="footer-divider-v2"></div>
            <div className="footer-grid-v2">
              {/* Useful Link Column */}
              <div className="footer-col-v2">
                <h4 className="footer-col-title-v2">Useful Link</h4>
                <div className="footer-links-v2 dual-col">
                  <div className="link-subcol">
                    <a href="#" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
                    <a href="#" onClick={(e) => handleNavClick(e, 'blog')}>Blog</a>
                    <a href="#" onClick={(e) => handleNavClick(e, 'contact-us')}>Contact</a>
                  </div>
                  <div className="link-subcol">
                    <a href="#" onClick={(e) => handleNavClick(e, 'about-us')}>About</a>
                    <a href="#" onClick={(e) => handleNavClick(e, 'portfolio')}>Portfolio</a>
                  </div>
                </div>
              </div>

              {/* Working Time Column */}
              <div className="footer-col-v2">
                <h4 className="footer-col-title-v2">Working Time</h4>
                <div className="footer-info-v2">
                  <p>Mon - Fri: 9.00am - 5.00pm</p>
                  <p>Saturday: 10.00am - 6.00pm</p>
                  <p>Sunday Closed</p>
                </div>
              </div>

              {/* Say Hello Column */}
              <div className="footer-col-v2">
                <h4 className="footer-col-title-v2">Say Hello</h4>
                <div className="footer-info-v2 contact-col">
                  <a href="mailto:Rltsales@rayonlabtech.in" className="contact-item-v2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span>Rltsales@rayonlabtech.in</span>
                  </a>
                  <a href="tel:+919909030607" className="contact-item-v2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <span className="phone-v2">+91 9909030607</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom-v2">
            <div className="footer-bottom-inner-v2">
              <p className="copyright-v2">Copyright © 2026 RayonLabTech All Rights Reserved.</p>
              <div className="bottom-links-v2">
                <a href="#">Privacy Policy</a>
                <span className="sep-v2">|</span>
                <a href="#">Term And Condition</a>
                <span className="sep-v2">|</span>
                <a href="#">FAQ</a>
              </div>
            </div>
          </div>
        </footer>
      </div >
    </>
  );
}

export default App;
