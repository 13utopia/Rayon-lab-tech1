import SEO from './SEO';
import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import './why-choose-us.css';
import './why-rayon.css';
import './stats-row.css';
import './industries-serve.css';
import './product-page.css';
import './hero-v2.css';
import './hero-v4.css';
import './footer.css';
import AboutUs from './AboutUs';
import BlogPage from './BlogPage';
import ContactUs from './ContactUs';
import PortfolioPage from './PortfolioPage';
import { sendFormEmail } from './email';
import ArticleDetailPage from './ArticleDetailPage';
import { blogPosts, generateSlug } from './BlogPage';
import './quote-modal.css';
import './manufacturer-section.css';
import './sub-products.css';
import './what-we-serve-premium.css';
import './our-clients.css';
import scientistImage from './assets/lab-working-table-107.webp';
import showcase1 from './assets/lab-working-table-130.webp';
import showcase2 from './assets/lab-working-table-131.webp';
import showcase3 from './assets/lab-working-table-132.webp';
import infra1 from './assets/lab-furniture-73.webp';
import infra2 from './assets/Laboratory-Furniture-Supplier-74.webp';
import infra3 from './assets/lab-working-table-75.webp';
import heroMain from './assets/Manufacturer Of Laboratory Furniture & Equipment In Ahmedabad.webp';
import labInterior from './assets/College-Laboratory-Furniture-78.webp';
import serveNew1 from './assets/Pharmaceutical-Laboratory-Furniture-127.webp';
import serveNew2 from './assets/College-Laboratory-Furniture-128.webp';
import serveNew3 from './assets/Chemical-Laboratory-Furniture-129.webp';
import icon1 from './assets/Laboratory-Furniture-Supplier-47.webp';
import icon2 from './assets/Fume-Hood-Manufacturer-48.webp';
import icon3 from './assets/Chemical-Laboratory-Furniture-49.webp';
import icon4 from './assets/lab-furniture-50.webp';
import serveIcon1 from './assets/College-Laboratory-Furniture-120.webp';
import serveIcon2 from './assets/lab-working-table-121.webp';
import serveIcon3 from './assets/Fume-Hood-Manufacturer-122.webp';
import Logo from './assets/Chemical-Laboratory-Furniture-69.webp';
import whyCenter from './assets/lab-working-table-138.webp';
import labimage from './assets/College-Laboratory-Furniture-78.webp';
import blogFeatured from './assets/lab-working-table-25.webp';
import blogSide1 from './assets/Chemical-Laboratory-Furniture-30.webp';
import blogSide2 from './assets/lab-working-table-31.webp';
import blogSide3 from './assets/Laboratory-Furniture-Supplier-32.webp';
import whyChooseUsCenter from './assets/Pharmaceutical-Laboratory-Furniture-11.webp';
import industryCollegesNew from './assets/Laboratory-Furniture-Supplier-114.webp';
import industryChemicalNew from './assets/Pharmaceutical-Laboratory-Furniture-115.webp';
import industryLabsNew from './assets/Fume-Hood-Manufacturer-116.webp';
import labIslandTable from './assets/laboratory-island-table.webp';
import thumbMan from './assets/Chemical-Laboratory-Furniture-136.webp';
import thumbLike from './assets/Pharmaceutical-Laboratory-Furniture-135.webp';
import thumbCircle from './assets/lab-working-table-134.webp';
import productHeroBg from './assets/Pharmaceutical-Laboratory-Furniture-105.webp';
import heroIslandTable from './assets/hero-island-table.webp';

import productNavLogo from './assets/College-Laboratory-Furniture-106.webp';
import logoWhite from './assets/Pharmaceutical-Laboratory-Furniture-79.webp';
import newHeroImage from './assets/College-Laboratory-Furniture-1.webp';
import clientBgIcon from './assets/Laboratory-Furniture-Supplier-39.webp';
import { products } from './data/products';
import whyChooseUs1 from './assets/Laboratory-Furniture-Supplier-102.webp';
import whyChooseUs2 from './assets/Fume-Hood-Manufacturer-103.webp';
import whyChooseUs3 from './assets/Chemical-Laboratory-Furniture-104.webp';
import whyChooseUs4 from './assets/lab-working-table-99.webp';

function FixedSidebar({ theme = 'glass', onGetQuote }) {
  return (
    <div className={`fixed-sidebar-v2 ${theme}-theme`}>
      <a href="tel:+919909030607" className="sidebar-item-v2">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.18-2.18a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span>CALL</span>
      </a>

      <a href="https://wa.me/919909030607" target="_blank" rel="noopener noreferrer" className="sidebar-item-v2">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12H12V10H4V12ZM4 9H16V7H4V9ZM4 6H16V4H4V6ZM0 20V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H4L0 20ZM3.15 14H18V2H2V15.125L3.15 14ZM2 14V2V14Z" fill="currentColor" />
        </svg>
        <span>WHATSAPP</span>
      </a>

      <div className="sidebar-item-v2 is-quote" onClick={onGetQuote}>
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

const pagePaths = {
  home: '/',
  'about-us': '/about-us',
  products: '/products',
  portfolio: '/portfolio',
  blog: '/blog',
  'contact-us': '/contact-us',
};

const allProducts = products.flatMap((product) => [product, ...(product.subProducts || [])]);

const getProductById = (productId) => allProducts.find((product) => product.id === productId);

const getRouteFromLocation = () => {
  if (typeof window === 'undefined') {
    return { page: 'home', product: products[0] };
  }

  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path.startsWith('/products/')) {
    const productId = decodeURIComponent(path.split('/')[2] || '');
    return { page: 'products', product: getProductById(productId) || products[0] };
  }

  if (path === '/products') {
    return { page: 'products', product: products[0] };
  }

  const matchedPage = Object.entries(pagePaths).find(([, pagePath]) => pagePath === path);
  return { page: matchedPage?.[0] || 'home', product: products[0] };
};

const getPathForRoute = (page, product = null) => {
  if (page === 'products') {
    const selected = product || products[0];
    return `/products/${encodeURIComponent(selected.id)}`;
  }

  return pagePaths[page] || pagePaths.home;
};

const featureCards = [
  {
    title: 'Advanced Engineering',
    description: `Precision-engineered laboratory furniture built for durability, safety, and daily performance.`,
    image: icon1,
  },
  {
    title: 'Modular Flexibility',
    description: `Custom laboratory layouts designed around your space, workflow, and equipment.`,
    image: icon2,
  },
  {
    title: 'Quality Assurance',
    description: `Every laboratory product is inspected for reliable quality, finish, and functionality.`,
    image: icon3,
  },
  {
    title: 'End-to-End Solutions',
    description: `Complete support from laboratory planning and manufacturing to delivery and installation.`,
    image: icon4,
  },
];

const showcaseCards = [
  {
    title: 'Sentinel Fume Hoods',
    description: `Laboratory fume hoods designed for safer chemical handling.`,
    image: showcase1,
    productId: 'fume-spot-extractor'
  },
  {
    title: 'Monolith Workstations',
    description: `Durable laboratory working tables for efficient daily operations.`,
    image: showcase2,
    productId: 'laboratory-furniture'
  },
  {
    title: 'Secure Storage Vaults',
    description: `Chemical storage cabinets for safe, organised laboratory storage.`,
    image: showcase3,
    productId: 'laboratory-fume-hood'
  },
  {
    title: 'Adaptive Lab Benches',
    description: 'Precision-engineered modular systems for dynamic research spaces.',
    image: infra1,
    productId: 'anti-vibration-table'
  },
  {
    title: 'Cleanroom Stations',
    description: 'Ultra-pure environments designed for sensitive biological analysis.',
    image: infra2,
    productId: 'overhead-storage-cabinet'
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
      `We study your laboratory space, workflow, equipment, utilities, storage, and specific operating requirements before planning.`,
      `Our team reviews working zones, laboratory furniture needs, safety considerations, and available service connections.`,
      `Every recommendation is aligned with equipment placement, staff movement, storage, utilities, safety, laboratory expansion, and operational needs.`
    ],
    icon: 'analysis',
    image: serveNew1
  },
  {
    title: 'Design & Planning',
    texts: [
      `We plan practical layouts and select suitable materials for laboratory safety, durability, maintenance, efficiency, and performance.`,
      `Every laboratory working table, island table, cabinet, utility point, and equipment position is planned for efficiency.`,
      `Dimensions, materials, finishes, storage, and utility provisions are approved before laboratory furniture manufacturing begins for accuracy.`
    ],
    icon: 'design',
    image: serveNew2
  },
  {
    title: 'Manufacturing & Installation',
    texts: [
      `Approved laboratory furniture is manufactured with accurate dimensions, durable finishes, and components.`,
      `Each product is inspected before dispatch to verify finish, functionality, stability, and specifications.`,
      `Our team coordinates delivery and laboratory installation for placement, assembly, inspection, and final handover.`
    ],
    icon: 'manufacturing',
    image: serveNew3
  }
];

const industryData = [
  {
    title: 'Colleges',
    desc: `Modular laboratory furniture for practical learning, demonstrations, experiments, and academic research.`,
    image: industryCollegesNew
  },
  {
    title: 'Chemical Industry',
    desc: `Chemical-resistant furniture, fume hoods, storage, and exhaust systems for industry.`,
    image: industryChemicalNew
  },
  {
    title: 'Labs',
    desc: `Laboratory working tables and solutions designed for precision, safety, and efficiency.`,
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

/* Count-up animation component — triggers when scrolled into view */
function CountUpStat({ target, duration = 2000 }) {
  const [count, setCount] = React.useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(target);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
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

  const handleSubmit = async (e) => {
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

      try {
        await sendFormEmail({ subject, body, replyTo: email });
        alert('Technical Quote Protocol Initiated! Your request has been sent.');
        onClose();
      } catch (error) {
        alert(error.message || 'Could not send your request. Please try again.');
      }
    }
  };

  return (
    <div className="quote-modal-overlay" onClick={onClose}>
      <div className="quote-modal-content" onClick={e => e.stopPropagation()}>
        <button className="quote-modal-close" onClick={onClose}>&times;</button>
        <div className="quote-modal-grid">
          <div className="quote-modal-left">
            <h2 className="quote-modal-title">Get A Quote</h2>
            <p className="quote-modal-desc">
              Fill in your details below. Our team will review your requirements and provide a customized proposal within 24 hours.
            </p>
            <div className="quote-feature-list">
              <div className="quote-feature">
                <div className="quote-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                </div>
                <div className="quote-feature-text">
                  <strong>CUSTOMIZED SOLUTIONS</strong>
                  <p>Laboratory furniture tailored to your exact space and workflow.</p>
                </div>
              </div>
              <div className="quote-feature">
                <div className="quote-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
                </div>
                <div className="quote-feature-text">
                  <strong>EXPERT CONSULTATION</strong>
                  <p>Guidance from our experienced laboratory design experts.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="quote-modal-right">
            <form className="quote-form" onSubmit={handleSubmit}>
              <h3 className="form-section-title">Your Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="fullName" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>E-mail Address</label>
                  <input type="email" name="email" placeholder="johndoe@example.com" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <div className="phone-input-wrapper" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <span style={{ position: 'absolute', left: '12px', color: '#1a2b56', fontWeight: '600' }}>+91</span>
                    <input
                      type="text"
                      placeholder="12345 67890"
                      value={phone}
                      onChange={handlePhoneChange}
                      style={{ paddingLeft: '45px' }}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input type="text" name="city" placeholder="Ahmedabad" required />
                </div>
              </div>

              <h3 className="form-section-title">Project Requirements</h3>
              <div className="form-group">
                <label>Tell us about your requirements</label>
                <textarea name="requirements" placeholder="Describe your laboratory furniture or equipment needs..." required></textarea>
              </div>

              <div className="human-verification">
                <div className="hv-left">
                  <div className={`hv-check-box ${isVerified ? 'checked' : ''}`} onClick={() => setIsVerified(!isVerified)}>
                    {isVerified && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                  </div>
                  <div className="hv-text">
                    <strong>Human Verification</strong>
                    <span>Please confirm you are human.</span>
                  </div>
                </div>
                <div className="hv-shield">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
              </div>

              <button type="submit" className="submit-protocol-btn" disabled={phone.length !== 10 || !isVerified}>
                Get Quote →
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
  const [appointmentStatus, setAppointmentStatus] = React.useState('idle');

  if (!isOpen) return null;

  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 5) {
      return digits;
    }
    return `${digits.slice(0, 5)} ${digits.slice(5, 10)}`;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e) => {
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

    try {
      setAppointmentStatus('submitting');
      await sendFormEmail({
        subject,
        body,
        replyTo: email,
        configName: 'appointment',
        templateParams: {
          form_title: 'Appointment Request',
          from_name: name,
          customer_name: name,
          name,
          from_email: email,
          email,
          email_address: email,
          phone: `+91 ${phone}`,
          phone_number: `+91 ${phone}`,
          reply_to: email,
        },
      });
      setAppointmentStatus('success');
      onClose();
    } catch (error) {
      setAppointmentStatus('idle');
      alert(error.message || 'Could not send your request. Please try again.');
    }
  };

  return (
    <div className="quote-modal-overlay" onClick={onClose}>
      <div className="quote-modal-content appointment-modal-content" onClick={e => e.stopPropagation()}>
        <button className="quote-modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px', display: 'block' }}>
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="appointment-modal-header">
          <h2 className="quote-modal-title">Get A Quote Now</h2>
          <p className="quote-modal-desc">Fill in your details and our team will get back to you shortly.</p>
        </div>
        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="fullName" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label>E-mail Address</label>
            <input type="email" name="email" placeholder="johndoe@example.com" required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <div className="phone-input-wrapper">
              <span className="phone-prefix">+91</span>
              <input
                type="tel"
                placeholder="12345 67890"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="appointment-submit-btn"
            disabled={appointmentStatus === 'submitting' || phone.replace(/\s/g, '').length !== 10}
          >
            {appointmentStatus === 'submitting' ? 'Sending...' : 'Get Quote →'}
          </button>
        </form>
      </div>
    </div>
  );
}

function ProductPage({ product, onGetQuote, onProductSelect }) {
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);
  const subProductsTrackRef = React.useRef(null);
  const thumbsRef = React.useRef(null);
  const isHovered = React.useRef(false);
  const images = product.images;
  const defaultDescription = "LabEquip Inc. offers a modular type of working / instrument table with 3 unique types of frame design. This provides greater flexibility and interchangeability according to your laboratory room space. We strictly adhere to international safety & manufacturing standards during production, assembly, and installation of all laboratory furniture.";
  const defaultSpecs = [
    {
      heading: "Material of Construction",
      items: [
        "Galvanized Iron Sheet (G.I.) Construction",
        "Stainless Steel (SS) Construction",
        "Polypropylene (PP) Construction"
      ]
    },
    {
      heading: "Table Top",
      items: [
        "Natural Black Granite",
        "Stainless Steel",
        "Phenolic Resin"
      ]
    }
  ];
  const defaultNotes = [
    "We can design an island table as per the user in the laboratory.",
    "Epoxy powder coated with 60-80 micron thick as per customer's choice or standard color combination."
  ];
  const displayDescription = product.description || defaultDescription;
  const displaySpecs = defaultSpecs.map((fallback, index) => {
    const spec = product.specs?.[index];
    return {
      heading: spec?.heading || fallback.heading,
      items: spec?.items?.length ? spec.items : fallback.items
    };
  });
  const displayNotes = product.notes?.length ? product.notes : defaultNotes;

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

  const scrollSubProducts = (direction) => {
    const track = subProductsTrackRef.current;
    if (!track) return;

    track.scrollBy({
      left: direction * Math.max(track.clientWidth * 0.75, 360),
      behavior: 'smooth'
    });
  };

  // Autoplay functionality
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered.current && images && images.length > 1) {
        setActiveImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      }
    }, 3500);
    return () => clearInterval(timer);
  }, [images?.length]);

  // Keep active thumbnail in view
  React.useEffect(() => {
    if (thumbsRef.current && thumbsRef.current.children[activeImageIndex]) {
      const activeThumb = thumbsRef.current.children[activeImageIndex];
      const thumbLeft = activeThumb.offsetLeft;
      const thumbWidth = activeThumb.offsetWidth;
      const containerWidth = thumbsRef.current.clientWidth;
      
      thumbsRef.current.scrollTo({
        left: thumbLeft - containerWidth / 2 + thumbWidth / 2,
        behavior: 'smooth'
      });
    }
  }, [activeImageIndex]);

  return (
    <div className="product-page-container">
      <SEO title={`${product.title} - Rayon Lab Tech`} description={product.heroSubtitle} />
      
      <section className="product-hero" aria-label="Product Hero" style={{
        backgroundImage: `linear-gradient(rgba(13, 30, 68, 0.6), rgba(13, 30, 68, 0.6)), url(${productHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="product-hero-bg-text">RAYON</div>
        <div className="product-hero-content">
          <h2 className="product-hero-title">{product.heroTitle}</h2>
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
            <div 
              className="product-gallery"
              onMouseEnter={() => isHovered.current = true}
              onMouseLeave={() => isHovered.current = false}
            >
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
              <div className="gallery-thumbs" ref={thumbsRef}>
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
                {displayDescription}
              </p>

              <div className="tech-specs-header">
                <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
                </svg>
                <h3>TECHNICAL SPECIFICATIONS</h3>
              </div>

              <div className="specs-grid">
                {displaySpecs.map((spec, index) => (
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
                {displayNotes.map((note, index) => (
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
              <div className="sub-products-heading-copy">
                <h2 className="sub-products-title">Laboratory Infrastructure Solutions</h2>
                <p>Modular systems engineered for adaptability and stringent safety protocols.</p>
              </div>
              <div className="sub-products-controls" aria-label="Carousel controls">
                <button type="button" className="sub-products-nav" aria-label="Previous products" onClick={() => scrollSubProducts(-1)}>
                  <span aria-hidden="true">←</span>
                </button>
                <button type="button" className="sub-products-nav" aria-label="Next products" onClick={() => scrollSubProducts(1)}>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
            <div className="sub-products-grid" ref={subProductsTrackRef}>
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
            <div className="cta-hover-list">
              <div className="cta-hover-item">
                <span className="cta-hover-check" aria-hidden="true"></span>
                <span className="cta-hover-text">Design Smarter Lab Spaces With Durable Modular Workstations</span>
              </div>
              <div className="cta-hover-item">
                <span className="cta-hover-check" aria-hidden="true"></span>
                <span className="cta-hover-text">Transform Your Laboratory With High-Quality Modular Furniture</span>
              </div>
            </div>
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
          </div>
          <form className="footer-nl-form" onSubmit={async (e) => {
            e.preventDefault();
            const email = new FormData(e.currentTarget).get('newsletterEmail');
            try {
              await sendFormEmail({
                subject: `Newsletter Subscription: ${email}`,
                body: `New newsletter subscription from Rayon Lab Tech Website\n\nEmail: ${email}`,
                replyTo: email,
              });
              e.currentTarget.reset();
            } catch (error) {
              alert(error.message || 'Could not send your subscription. Please try again.');
            }
          }}>
            <input type="email" name="newsletterEmail" placeholder="Enter Your Email Address" required />
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
            Copyright © {new Date().getFullYear()} <span>Rayon Lab Tech</span>. All Rights Reserved.
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

/* ── Custom Dropdown for Consultation Form ── */
function ConsultDropdown({ value, onChange, options, placeholder, id }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = useRef(null);

  // Close when clicking outside
  React.useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const selected = options.find(o => o.value === value);

  return (
    <div className={`consult-custom-select ${isOpen ? 'is-open' : ''}`} ref={ref} id={id}>
      <button
        type="button"
        className={`consult-select-trigger consult-glass-input ${value ? 'has-value' : ''}`}
        onClick={() => setIsOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="consult-select-label">{selected ? selected.label : placeholder}</span>
        <svg className="consult-select-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {isOpen && (
        <ul className="consult-select-dropdown" role="listbox">
          {options.map(opt => (
            <li
              key={opt.value}
              className={`consult-select-option ${value === opt.value ? 'is-selected' : ''}`}
              role="option"
              aria-selected={value === opt.value}
              onClick={() => { onChange(opt.value); setIsOpen(false); }}
            >
              {value === opt.value && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


const ArticleDetailRoute = ({ onGetQuote }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => generateSlug(p.title) === slug);

  if (!post) return <div style={{padding: '100px', textAlign: 'center'}}>Article not found.</div>;

  return (
    <ArticleDetailPage
      post={post}
      onBack={() => navigate('/updates')}
      allPosts={blogPosts}
      onSelectArticle={(p) => navigate('/updates/' + generateSlug(p.title))}
      onGetQuote={onGetQuote}
    />
  );
};

function App() {
  const initialRouteRef = React.useRef(null);
  if (!initialRouteRef.current) {
    initialRouteRef.current = getRouteFromLocation();
  }

  const [activeShowcase, setActiveShowcase] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'home' :
                      location.pathname.startsWith('/products') ? 'products' :
                      location.pathname.startsWith('/about') ? 'about-us' :
                      location.pathname.startsWith('/updates') ? (location.pathname === '/updates' ? 'blog' : 'blog-detail') :
                      location.pathname.startsWith('/portfolio') ? 'portfolio' :
                      location.pathname.startsWith('/contact') ? 'contact-us' : 'home';
  const [selectedArticle, setSelectedArticle] = React.useState(null);
  const [selectedProduct, setSelectedProduct] = React.useState(initialRouteRef.current.product);
  const [showQuoteModal, setShowQuoteModal] = React.useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isPremiumMobileMenuOpen, setIsPremiumMobileMenuOpen] = React.useState(false);
  const [isMainMobileMenuOpen, setIsMainMobileMenuOpen] = React.useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = React.useState(false);
  const [hoveredWhyIdx, setHoveredWhyIdx] = React.useState(0);
  const whyAutoRef = React.useRef(null);
  const showcaseGridRef = React.useRef(null);

  React.useEffect(() => {
    if (showcaseGridRef.current) {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        const cardWidth = showcaseGridRef.current.querySelector('.showcase-v2-card')?.offsetWidth || 0;
        const gap = 16;
        const targetIndex = activeShowcase * 3;
        const scrollAmount = targetIndex * (cardWidth + gap);
        showcaseGridRef.current.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  }, [activeShowcase]);

  const startWhyAutoRotate = React.useCallback(() => {
    if (whyAutoRef.current) clearInterval(whyAutoRef.current);
    whyAutoRef.current = setInterval(() => {
      setHoveredWhyIdx(prev => (prev + 1) % 5);
    }, 4000);
  }, []);

  React.useEffect(() => {
    startWhyAutoRotate();
    return () => clearInterval(whyAutoRef.current);
  }, [startWhyAutoRotate]);


  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowAppointmentModal(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const [consultForm, setConsultForm] = useState({
    service: '',
    cleanType: '',
    area: '',
    name: '',
    email: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success'

  const handleConsultSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

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

    try {
      const serviceLabel = {
        planning: 'Lab Planning',
        furniture: 'Lab Furniture',
        exhaust: 'Exhaust System',
      }[consultForm.service] || consultForm.service;
      const cleanTypeLabel = {
        class100: 'Class 100',
        class1000: 'Class 1000',
        class10000: 'Class 10000',
      }[consultForm.cleanType] || consultForm.cleanType;

      await sendFormEmail({
        subject,
        body,
        replyTo: consultForm.email,
        templateParams: {
          form_title: 'Free Estimate Request',
          service: serviceLabel,
          selected_service: serviceLabel,
          clean_type: cleanTypeLabel,
          type_of_clean: cleanTypeLabel,
          area: consultForm.area,
          total_floor_area: consultForm.area,
          from_name: consultForm.name,
          customer_name: consultForm.name,
          name: consultForm.name,
          from_email: consultForm.email,
          email: consultForm.email,
          email_address: consultForm.email,
          reply_to: consultForm.email,
        },
      });
      setFormStatus('success');
      setConsultForm({ service: '', cleanType: '', area: '', name: '', email: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      setFormStatus('idle');
      alert(error.message || 'Could not send your request. Please try again.');
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('newsletterEmail');

    if (!email) return;

    try {
      await sendFormEmail({
        subject: `Newsletter Subscription: ${email}`,
        body: `New newsletter subscription from Rayon Lab Tech Website\n\nEmail: ${email}`,
        replyTo: email,
      });
      e.currentTarget.reset();
    } catch (error) {
      alert(error.message || 'Could not send your subscription. Please try again.');
    }
  };

  const handleNavClick = (e, page, product = null, options = {}) => {
    if (e) e.preventDefault();
    const nextProduct = page === 'products' ? (product || products[0]) : products[0];
    
    setIsDropdownOpen(false);
    setIsPremiumMobileMenuOpen(false);
    setIsMainMobileMenuOpen(false);
    setSelectedProduct(nextProduct);

    if (page === 'products' && product) {
      navigate('/products/' + product.id);
    } else if (page === 'home') {
      navigate('/');
    } else if (page === 'blog') {
      navigate('/updates');
    } else {
      navigate('/' + page);
    }

    if (options.scroll !== false) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToWhatWeServe = (e) => {
    if (e) e.preventDefault();
    const scrollToSection = () => {
      const element = document.getElementById('what-we-serve');
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };

    if (currentPage !== 'home') {
      handleNavClick(e, 'home', null, { scroll: false });
      setTimeout(scrollToSection, 300);
    } else {
      scrollToSection();
    }
  };

  return (
    <>
      <FixedSidebar theme="glass" onGetQuote={() => setShowQuoteModal(true)} />
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
                            e.preventDefault();
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
              <a href="tel:+919909030607" className="nav-phone-group">
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
                Get a Quote
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
                  <a href="tel:+919909030607" className="nav-phone-group">
                    <div className="nav-icon-circle phone">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <span className="nav-phone-num"></span>
                  </a>
                </div>

                <button type="button" className="nav-appointment-btn" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }} onClick={() => { setIsPremiumMobileMenuOpen(false); setShowAppointmentModal(true); }}>
                  Get a Quote <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/about-us" element={<AboutUs onGetQuote={() => setShowQuoteModal(true)} />} />
          <Route path="/updates" element={<BlogPage onSelectArticle={(post) => navigate('/updates/' + generateSlug(post.title))} />} />
          <Route path="/updates/:slug" element={<ArticleDetailRoute onGetQuote={() => setShowQuoteModal(true)} />} />
          <Route path="/portfolio" element={<PortfolioPage onGetQuote={() => setShowQuoteModal(true)} onProductsClick={(e) => handleNavClick(e, 'products')} />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/products/:id" element={<ProductPage product={selectedProduct} onGetQuote={() => setShowQuoteModal(true)} onProductSelect={(p) => handleNavClick(null, 'products', p)} />} />
          <Route path="/" element={
            <>
            <SEO title="Manufacturer Of Laboratory Furniture & Equipment In Ahmedabad" description="Rayon Lab Tech is a leading manufacturer of premium laboratory furniture, fume hoods, and scientific equipment in Ahmedabad, providing high-quality solutions for modern research environments." />
            
            <h1 className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: '0' }}>
              Manufacturer Of Laboratory Furniture & Equipment In Ahmedabad
            </h1>

            <section className="hero-v4-section" aria-label="Hero Section">
              <div className="hero-v4-image-container">
                <img src={heroMain} alt="Rayon Lab Tech Hero" />
              </div>
            </section>

            <section className="feature-grid-v2" aria-label="Product advantages">
              {featureCards.map(({ title, description, image }) => (
                <div className="f-card-wrap" key={title}>
                  <article className="feature-card-v2">
                    <div className="f-card-header">
                      <div className="f-icon-wrap">
                        <img src={image} alt={title} className="f-icon-img" />
                      </div>
                      <h3 className="f-title">{title}</h3>
                    </div>
                    <div className="f-divider"></div>
                    <p className="f-desc">{description}</p>
                  </article>
                  <button
                    className="f-action-btn"
                    type="button"
                    aria-label={`Explore ${title}`}
                    onClick={(e) => handleNavClick(e, 'portfolio')}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </button>
                </div>
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

              <div className="showcase-v2-grid" ref={showcaseGridRef}>
                {showcaseCards.map((card, idx) => {
                  const isVisibleOnDesktop = Math.floor(idx / 3) === activeShowcase;
                  const isExtra = idx >= 2;
                  return (
                    <article
                      className={`showcase-v2-card ${isVisibleOnDesktop ? 'is-active' : 'desktop-hidden'}`}
                      key={card.title}
                      onClick={(e) => {
                        const prod = getProductById(card.productId);
                        if (prod) handleNavClick(e, 'products', prod);
                      }}
                    >
                      <div className={`showcase-v2-media-wrap ${isExtra ? 'extra-overlay' : ''}`}>
                        <div className="showcase-v2-media" style={{ backgroundImage: `url(${card.image})` }} />
                      </div>
                      <div className="showcase-v2-meta">
                        <h3 className="showcase-v2-card-title">{card.title}</h3>
                        <p className="showcase-v2-card-desc">{card.description}</p>
                      </div>
                    </article>
                  );
                })}
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

            <section className="hero-premium-v3">
              {/* Technical Pattern Overlay */}
              <div className="hero-v3-pattern"></div>

              {/* Large Background Watermark */}
              <div className="hero-v3-watermark">RAYON</div>

              <div className="hero-v3-container">
                <div className="hero-v3-text-side">
                  <h2 className="hero-v3-title">
                    Manufacturer Of Laboratory Furniture & Equipment In Ahmedabad
                  </h2>
                  <p className="hero-v3-desc">
                    Rayon Lab Tech manufactures laboratory working tables, island tables, fume hoods, storage cabinets, exhaust systems, and stainless steel furniture for modern laboratories.
                  </p>

                  <div className="hero-v3-buttons">
                    <button className="hero-v3-btn-gradient" onClick={(e) => handleNavClick(e, 'products')}>
                      <span>Our Products</span>
                      <span className="hero-v3-arrow">→</span>
                    </button>
                    <button className="hero-v3-btn-outline" onClick={scrollToWhatWeServe}>
                      <span>Our Services</span>
                      <span className="hero-v3-arrow">→</span>
                    </button>
                  </div>
                </div>

                <div className="hero-v3-visual-side">
                  <div className="hero-v3-image-mask">
                    <img src={newHeroImage} alt="Laboratory Showcase" />
                  </div>
                </div>
              </div>
            </section>

            <section className="why-rayon-section">
              <div className="why-rayon-container">
                <div className="why-rayon-header">
                  <div className="why-badge">WHY CHOOSE US?</div>
                  <h2 className="why-rayon-title">Why Industry Leaders Choose Rayon</h2>
                  <p className="why-rayon-subtitle" style={{marginTop: '1rem', color: '#666'}}>
                    Trusted laboratory furniture manufacturing with customised, application-focused execution.
                  </p>
                </div>
                <div className="why-rayon-content">
                  <div className="why-left-list">
                    {whyPills.map((pill, idx) => (
                      <div
                        className={`why-pill ${hoveredWhyIdx === idx ? 'active' : ''}`}
                        key={idx}
                        onMouseEnter={() => { setHoveredWhyIdx(idx); startWhyAutoRotate(); }}
                        onClick={() => { setHoveredWhyIdx(idx); startWhyAutoRotate(); }}
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
                      {/* Image-2 style: ~240° arc open at top-right, 3 dots, small L-bracket on right */}
                      <svg
                        className="circle-ring-svg"
                        viewBox="0 0 340 340"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          transform: `rotate(${hoveredWhyIdx * 90}deg)`,
                          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                          transformOrigin: 'center'
                        }}
                      >
                        {/* Left Arc: connected at ends back to the inner image border */}
                        <path d="M 71,71 L 49.8,49.8 A 170,170 0 0,0 49.8,290.2 L 71,269" stroke="#0D1E44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                        {/* Top Arc: connected at ends back to the inner image border */}
                        <path d="M 71,71 L 49.8,49.8 A 170,170 0 0,1 290.2,49.8 L 269,71" stroke="#0D1E44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                        {/* Bottom Arc: connected at ends back to the inner image border */}
                        <path d="M 71,269 L 49.8,290.2 A 170,170 0 0,0 290.2,290.2 L 269,269" stroke="#0D1E44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>

                      {/* 4 dots: top-left, top-right, bottom-left, bottom-right — matching Image 2 */}
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className={`circle-dot dot-${i}`}></div>
                      ))}
                      <div className="circle-img-wrap">
                        <img
                          src={
                            hoveredWhyIdx === 0 ? whyChooseUs1 :
                              hoveredWhyIdx === 1 ? whyChooseUs2 :
                                hoveredWhyIdx === 2 ? whyChooseUs4 :
                                  whyChooseUsCenter
                          }
                          alt="Lab Interior"
                          className="circle-img hover-transition"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="why-right-benefits">
                    <h2 className="benefit-main-title">Purpose-built solutions for demanding scientific and industrial environments.</h2>
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
                  const numPart = parseInt(fact.num.replace('+', ''), 10);
                  return (
                    <div className="stat-item-final" key={idx}>
                      <div className="stat-num-box">
                        <span className="stat-num-outlined">
                          <CountUpStat target={numPart} duration={2000 + idx * 200} />
                        </span>
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
                      <form id="consult-form" className="consult-modern-form" onSubmit={handleConsultSubmit}>
                        <div className="consult-form-grid">
                          <div className="consult-input-group">
                            <ConsultDropdown
                              id="consult-service-select"
                              value={consultForm.service}
                              onChange={(val) => setConsultForm({ ...consultForm, service: val })}
                              placeholder="Choose a Service"
                              options={[
                                { value: 'planning', label: 'Lab Planning' },
                                { value: 'furniture', label: 'Lab Furniture' },
                                { value: 'exhaust', label: 'Exhaust System' },
                              ]}
                            />
                          </div>
                          <div className="consult-input-group">
                            <ConsultDropdown
                              id="consult-clean-select"
                              value={consultForm.cleanType}
                              onChange={(val) => setConsultForm({ ...consultForm, cleanType: val })}
                              placeholder="Type of Clean"
                              options={[
                                { value: 'class100', label: 'Class 100' },
                                { value: 'class1000', label: 'Class 1000' },
                                { value: 'class10000', label: 'Class 10000' },
                              ]}
                            />
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
                          <div className="consult-input-group">
                            <input
                              type="email"
                              className="consult-glass-input"
                              placeholder="Email Address"
                              value={consultForm.email}
                              onChange={(e) => setConsultForm({ ...consultForm, email: e.target.value })}
                              required
                            />
                          </div>
                          <div className="consult-helper-text-wrap">
                            <p className="consult-helper-text">
                              Submit this information and we will send you the cost for the service.
                            </p>
                          </div>
                        </div>

                      </form>
                    )}
                  </div>

                  {/* Button is a direct child of the card (position:relative), NOT inside consult-content (position:relative) */}
                  {formStatus !== 'success' && (
                    <div className="consult-form-footer">
                      <button
                        type="submit"
                        form="consult-form"
                        className="consult-premium-btn"
                        disabled={formStatus === 'submitting'}
                      >
                        {formStatus === 'submitting' ? 'Sending...' : 'Get Cost Estimate'} <span>&rarr;</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section className="serve-section-premium" id="what-we-serve" aria-label="What We Serve">
              <svg className="serve-clip-defs" width="0" height="0" aria-hidden="true">
                <defs>
                  <clipPath id="serve-rounded-peak-clip" clipPathUnits="objectBoundingBox">
                    <path d="M 0.5 0 C 0.58 0.05, 0.86 0.10, 1 0.12 L 1 1 L 0 1 L 0 0.12 C 0.14 0.10, 0.42 0.05, 0.5 0 Z" />
                  </clipPath>
                </defs>
              </svg>
              <div className="serve-container-premium">
                <div className="serve-header-premium">
                  <h2>How We Work</h2>
                  <p>
                    Structured planning, manufacturing, quality checks, and installation support.
                  </p>
                </div>

                <div className="serve-grid-premium">
                  {serveCards.map((card, index) => (
                    <article className="serve-card-premium" key={index}>
                      <div className="serve-card-inner">
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
                          <div className="serve-hover-hexagon-overlay" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="serve-bottom-hexagon" aria-hidden="true">
                        <div className="serve-hexagon-outer-white">
                          <div className="serve-hexagon-center-btn">
                            <span className="plus-icon">+</span>
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

            <section className="blog-section" aria-label="Our Blogs">
              <div className="blog-header">
                <h2 className="blog-main-title">Our Blogs</h2>
                <p className="blog-main-subtitle">Latest insights for safer, smarter, and efficient laboratory planning.</p>
              </div>

              <div className="blog-container">
                {/* Left Large Card */}
                {blogPosts.length > 0 && (
                  <div className="blog-card-large" onClick={(e) => { e.preventDefault(); navigate('/updates/' + generateSlug(blogPosts[0].title)); window.scrollTo(0,0); }} style={{ cursor: 'pointer' }}>
                    <div className="blog-card-large-image" style={{ backgroundImage: `url(${blogPosts[0].image})` }}></div>
                    <div className="blog-card-large-content">
                      <div className="blog-meta">
                        <span className="blog-date">{blogPosts[0].date}</span>
                        <span className="blog-divider">/</span>
                        <span className="blog-category">UPDATE</span>
                      </div>
                      <h3 className="blog-title-large">Laboratory Furniture Trends for Modern Labs in 2026</h3>
                      <div className="blog-content-divider"></div>
                      <p className="blog-excerpt">Explore flexible furniture, smarter storage, safer layouts, and modern laboratory solutions...</p>

                      <div className="blog-read-more-wrapper">
                        <span className="blog-read-more">
                          Read More <span>→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Right Small Cards List */}
                <div className="blog-list">
                  {blogPosts.slice(1, 3).map((post, index) => (
                    <React.Fragment key={post.id}>
                      <article className="blog-card-small" onClick={(e) => { e.preventDefault(); navigate('/updates/' + generateSlug(post.title)); window.scrollTo(0,0); }} style={{ cursor: 'pointer' }}>
                        <div className="blog-card-small-image" style={{ backgroundImage: `url(${post.image})` }}></div>
                        <div className="blog-card-small-content">
                          <div className="blog-meta-small">
                            <span className="blog-meta-item"><CalendarIcon /> {post.date}</span>
                            <span className="blog-meta-item"><UserIcon /> BY RAYON</span>
                          </div>
                          <h4 className="blog-title-small">{post.title}</h4>
                        </div>
                      </article>
                      {index === 0 && <div className="blog-list-divider"></div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

            </section>
          </>
          } />
        </Routes>

        <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
        <AppointmentModal isOpen={showAppointmentModal} onClose={() => setShowAppointmentModal(false)} />
        <footer className="footer-premium-v2">
          {/* Main Footer Body */}
          <div className="footer-main-v2">
            {/* Watermark Background */}
            <div className="bg-watermark-v2">RAYON</div>

            <div className="footer-top-row">
              
              {/* Newsletter Section - Now centered or full width */}
              <div className="footer-newsletter-v2">
                <h2 className="newsletter-title-v2">Subscribe to Our Newsletter</h2>
                <form className="newsletter-form-v2" onSubmit={handleNewsletterSubmit}>
                  <input type="email" name="newsletterEmail" placeholder="Enter Your Email Address" className="newsletter-input-v2" required />
                  <button type="submit" className="newsletter-btn-v2">Subscribe Now <span className="arrow">→</span></button>
                </form>
              </div>
            </div>

            <div className="footer-divider-v2"></div>

            <div className="footer-grid-v2">
              {/* Branding Column - Now part of the grid for perfect alignment */}
              <div className="footer-col-v2 branding">
                <img src={logoWhite} alt="Rayon Logo" className="footer-logo-v2" />
                <p className="footer-tagline-v2">
                  Pioneering precision laboratory manufacturing for global scientific excellence since 2008.
                </p>
                <div className="footer-social-v2">
                  <a href="https://wa.me/919909030607" target="_blank" rel="noopener noreferrer" className="whatsapp-pill-v2">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.801.983 3.848 1.503 5.913 1.504h.005c6.554 0 11.89-5.335 11.893-11.893a11.826 11.826 0 00-3.48-8.413z" /></svg>
                    WhatsApp Expert
                  </a>
                </div>
              </div>

              {/* Useful Link Column */}
              <div className="footer-col-v2">
                <h4 className="footer-col-title-v2">Useful Link</h4>
                <div className="footer-links-v2 dual-col">
                  <div className="link-subcol">
                    <a href="#" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
                    <a href="#" onClick={(e) => handleNavClick(e, 'services')}>Service</a>
                    <a href="#" onClick={(e) => handleNavClick(e, 'blog')}>Blog</a>
                  </div>
                  <div className="link-subcol">
                    <a href="#" onClick={(e) => handleNavClick(e, 'about-us')}>About</a>
                    <a href="#" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</a>
                    <a href="#" onClick={(e) => handleNavClick(e, 'contact-us')}>Contact</a>
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
              <p className="copyright-v2">Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
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
