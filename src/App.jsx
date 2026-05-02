import React from 'react';
import './why-choose-us.css';
import './stats-row.css';
import scientistImage from './assets/scientist.png';
import serve1Img from './assets/serve-3.png';
import serve2Img from './assets/serve-2.png';
import serve3Img from './assets/serve-1.png';
import icon1 from './assets/icon-1.png';
import icon2 from './assets/icon-2.png';
import icon3 from './assets/icon-3.png';
import icon4 from './assets/icon-4.png';
import blog1 from './assets/blog-1.png';
import blog2 from './assets/blog-2.png';
import blog3 from './assets/blog-3.png';

function HeaderLogo() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="header-logo-svg">
      <ellipse cx="50" cy="55" rx="38" ry="14" transform="rotate(-25, 50, 55)" stroke="#0b1630" strokeWidth="4" strokeLinecap="round" strokeDasharray="150 50" strokeDashoffset="10" />
      <ellipse cx="50" cy="55" rx="38" ry="14" transform="rotate(35, 50, 55)" stroke="#0b1630" strokeWidth="4" strokeLinecap="round" strokeDasharray="170 50" strokeDashoffset="100" />
      <g transform="rotate(-15, 50, 50)">
        <path d="M42 36 L58 36 L58 44 L70 72 A 6 6 0 0 1 65 80 L35 80 A 6 6 0 0 1 30 72 L42 44 Z" fill="#ffffff" stroke="#0b1630" strokeWidth="4" strokeLinejoin="round" />
        <path d="M38 36 L62 36" stroke="#0b1630" strokeWidth="4" strokeLinecap="round" />
      </g>
      <circle cx="48" cy="24" r="4" fill="#0b1630" />
      <circle cx="60" cy="16" r="2.5" fill="#0b1630" />
      <circle cx="44" cy="12" r="1.5" fill="#0b1630" />
    </svg>
  );
}

const navItems = ['Home', 'About Us', 'Products', 'Portfolio', 'Blog', 'Contact Us'];

const featureCards = [
  {
    title: 'Advanced Engineering',
    description: 'Built with precision materials for long-term durability and chemical resistance.',
    icon: 'microscope',
  },
  {
    title: 'Modular Flexibility',
    description: 'Custom-designed lab setups tailored to your workflow and space requirements.',
    icon: 'modular',
  },
  {
    title: 'Quality Assurance',
    description: 'Every unit is tested to meet safety, performance, and industry standards.',
    icon: 'shield',
  },
  {
    title: 'End-to-End Solutions',
    description: 'From planning to installation — complete laboratory setup under one roof.',
    icon: 'flask',
  },
];

const showcaseCards = [
  {
    title: 'Sentinel Fume Hoods',
    description: 'Variable air volume (VAV) containment for high-toxicity environments.',
    image:
      'https://images.unsplash.com/photo-1581092918364-26e7d222d6f2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Monolith Workstations',
    description: 'Heavy-duty, vibration-isolated benches for precision instrumentation.',
    image:
      'https://images.unsplash.com/photo-1573497163129-6d6f7fab817f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Secure Storage Vaults',
    description: 'Corrosive and flammable material storage with passive venting.',
    image:
      'https://images.unsplash.com/photo-1581093448791-7a9c6dd68f3e?auto=format&fit=crop&w=1200&q=80',
  },
];

const showcaseLabels = ['CONSECTE', 'IMMUNOLOGY', 'EQUIPMENT'];

const whyChooseUsCards = [
  'Precision Manufacturing',
  'Chemical & Heat Resistant Materials',
  'Custom Layout Planning',
  'On-Time Delivery & Installation',
  'Long-Term Durability',
];

const whyChooseUsPoints = [
  'Access Expert Advice For A Thriving Life',
  'Benefits Of Health Conscious Living',
  'Benefits Of Proactive Health Management',
  'Countless Benefits Of Prioritizing Health',
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
    image: serve1Img
  },
  {
    title: 'Design & Planning',
    texts: [
      'Our team creates optimized lab layouts and selects the right materials, ensuring safety, efficiency, and scalability.',
      'Our team designs efficient lab layouts and chooses ideal materials, ensuring safety, performance, and future growth.',
      'Our experts plan smart lab spaces and select suitable materials, delivering safety, functionality, and long-term scalability.'
    ],
    icon: 'design',
    image: serve2Img
  },
  {
    title: 'Manufacturing & Installation',
    texts: [
      'We manufacture precision-built components and ensure smooth on-site installation with quality assurance.',
      'We produce precision-crafted components and handle seamless on-site installation with strict quality control.',
      'We build high-accuracy components and manage smooth on-site setup while maintaining top quality standards.'
    ],
    icon: 'manufacturing',
    image: serve3Img
  }
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
      <ellipse cx="50" cy="55" rx="38" ry="14" transform="rotate(-25, 50, 55)" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="150 50" strokeDashoffset="10" />
      <ellipse cx="50" cy="55" rx="38" ry="14" transform="rotate(35, 50, 55)" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="170 50" strokeDashoffset="100" />
      <g transform="rotate(-15, 50, 50)">
        <path d="M42 36 L58 36 L58 44 L70 72 A 6 6 0 0 1 65 80 L35 80 A 6 6 0 0 1 30 72 L42 44 Z" fill="#ffffff" />
        <path d="M38 36 L62 36" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
      </g>
      <circle cx="48" cy="24" r="4" fill="#ffffff" />
      <circle cx="60" cy="16" r="2.5" fill="#ffffff" />
      <circle cx="44" cy="12" r="1.5" fill="#ffffff" />
    </svg>
  );
}

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-group">
          <div className="brand-mark">
            <HeaderLogo />
          </div>
          <div className="brand-copy">
            <div className="brand-title">Rayon Lab Tech</div>
            <div className="brand-subtitle">Always There...</div>
          </div>
        </div>

        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <React.Fragment key={item}>
              <a href="#">{item}</a>
              {index < navItems.length - 1 ? <span className="nav-divider" aria-hidden="true">•</span> : null}
            </React.Fragment>
          ))}
        </nav>

        <div className="actions">
          <div className="phone-wrapper">
            <div className="circle-icon" aria-label="Phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </div>
            <span className="phone-number">+1(212)-255-511</span>
          </div>

          <div className="circle-icon search-icon" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>

          <a className="appt-btn" href="#">
            Appointment
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </header>


      <section className="feature-grid" aria-label="Product advantages">
        {featureCards.map(({ title, description, icon }) => (
          <article className="feature-card" key={title}>
            <div className="card-top">
              <div className="icon-circle">
                <FeatureIcon type={icon} />
              </div>
              <h3>{title}</h3>
            </div>
            <div className="card-divider" aria-hidden="true" />
            <p className="card-copy">{description}</p>
            <div className="card-btn-wrapper">
              <button className="card-action" type="button" aria-label={`Explore ${title}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="10 5 19 5 19 14"></polyline></svg>
              </button>
            </div>
          </article>
        ))}
      </section>

      <section className="showcase-section" aria-label="Laboratory showcase">
        <div className="showcase-header">
          <div className="showcase-copy">
            <h2>Laboratory Infrastructure Solutions</h2>
            <p>Modular systems engineered for adaptability and stringent safety protocols.</p>
          </div>
          <div className="showcase-controls" aria-label="Showcase navigation">
            <button type="button" className="showcase-arrow" aria-label="Previous showcase">
              ←
            </button>
            <button type="button" className="showcase-arrow" aria-label="Next showcase">
              →
            </button>
          </div>
        </div>

        <div className="showcase-grid">
          {showcaseCards.map(({ title, description, image }) => (
            <article className="showcase-card" key={title}>
              <div className="showcase-media" style={{ backgroundImage: `url(${image})` }} />
              <div className="showcase-meta">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="showcase-indicator" aria-hidden="true">
          <span className="showcase-dot active" />
          <span className="showcase-dot" />
          <span className="showcase-dot" />
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

      {/* New "What We Serve" Section */}


      <section className="hero-section" aria-label="Laboratory hero">
        <div className="hero-watermark">RAYON</div>
        <div className="hero-content">
          <h2 className="hero-heading">
            Manufacturer Of Premium Laboratory Furniture & Equipment In Ahmedabad For Your Lab Needs
          </h2>
          <p className="hero-description">
            Trusted by institutions and industries, Rayon Lab Tech delivers reliable, durable, and fully customized laboratory solutions built to perform in demanding environments.
          </p>
          <div className="hero-actions">
            <a className="hero-btn hero-btn-primary" href="#products">
              Our Products
              <span aria-hidden="true">→</span>
            </a>
            <a className="hero-btn hero-btn-secondary" href="#services">
              Our Services
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <div
              className="hero-image"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1581092918364-26e7d222d6f2?auto=format&fit=crop&w=1200&q=80)',
              }}
            />
          </div>
        </div>
      </section>

      {/* Our Clients Section */}


      <section className="why-choose-us-section">
        <div className="why-top-badge">WHY CHOOSE US?</div>
        <h2 className="why-main-heading">Why Industry Leaders Choose Rayon</h2>

        <div className="why-container">
          {/* Left: Cards */}
          <div className="why-left-cards">
            {whyChooseUsCards.map((card, index) => (
              <div key={index} className={`why-pill ${index === 0 ? 'active' : ''}`}>
                <span className="why-pill-text">{card}</span>
                <div className="why-pill-icon">
                  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Center: Circular Image */}
          <div className="why-center-wrapper">
            <div className="why-orbit">
              <span className="orbit-dot dot-1"></span>
              <span className="orbit-dot dot-2"></span>
              <span className="orbit-dot dot-3"></span>
              <span className="orbit-dot dot-4"></span>
            </div>
            <div className="why-image-circle">
              <div
                className="why-image"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80)',
                }}
              />
              <div className="why-center-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.06189 13C4.02104 12.6724 4 12.3387 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 12.3387 19.979 12.6724 19.9381 13" stroke="#0D1E44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 18C14.2091 18 16 16.2091 16 14C16 11.7909 14.2091 10 12 10C9.79086 10 8 11.7909 8 14C8 16.2091 9.79086 18 12 18Z" stroke="#0D1E44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.5 12.5L17.5 8.5" stroke="#0D1E44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 18H16" stroke="#0D1E44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="why-right-content">
            <h3 className="why-right-heading">Well Ensure You Always Covid 19 Vaccine.</h3>
            <p className="why-right-text">
              We help ambitious businesses like yours generate more profits by building awareness.
            </p>
            <p className="why-right-text">
              We help ambitious businesses like yours generate more profits by building awareness.
            </p>

            <div className="why-checklist-container">
              <div className="why-checklist-line"></div>
              <ul className="why-checklist">
                {whyChooseUsPoints.map((point, index) => (
                  <li key={index} className="why-check-item">
                    <div className="why-check-icon">
                      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 7L5.5 9.5L11 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="why-fun-facts">
          <div className="fact-line"></div>
          <span>FUN AND FACTS</span>
          <div className="fact-line"></div>
        </div>
      </section>

      <section className="stats-section" aria-label="Key Statistics">
        <div className="stats-row">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number-wrap">
                <span className="stat-number">{stat.value}</span>
                <span className="stat-plus">+</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
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

      {/* Our Blogs Section */}
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
            <div className="blog-card-small">
              <div className="blog-card-small-image" style={{ backgroundImage: `url(${blog1})` }}></div>
              <div className="blog-card-small-content">
                <div className="blog-meta-small">
                  <span><CalendarIcon /> NOVEMBER 04, 2024</span>
                  <span><UserIcon /> BY XLEBPBM</span>
                </div>
                <h4 className="blog-title-small">Hospital Labs Focused On<br />Patients Begin Here.</h4>
              </div>
            </div>
            <div className="blog-list-divider"></div>

            <div className="blog-card-small">
              <div className="blog-card-small-image" style={{ backgroundImage: `url(${blog2})` }}></div>
              <div className="blog-card-small-content">
                <div className="blog-meta-small">
                  <span><CalendarIcon /> NOVEMBER 04, 2024</span>
                  <span><UserIcon /> BY XLEBPBM</span>
                </div>
                <h4 className="blog-title-small">Exploring Anatomy Methods In<br />The Lab</h4>
              </div>
            </div>
            <div className="blog-list-divider"></div>

            <div className="blog-card-small">
              <div className="blog-card-small-image" style={{ backgroundImage: `url(${blog3})` }}></div>
              <div className="blog-card-small-content">
                <div className="blog-meta-small">
                  <span><CalendarIcon /> NOVEMBER 04, 2024</span>
                  <span><UserIcon /> BY XLEBPBM</span>
                </div>
                <h4 className="blog-title-small">A Laboratory Manual For<br />Contemporary Specimen...</h4>
              </div>
            </div>
          </div>
        </div>
      </section>


      <footer className="new-footer" aria-label="Site footer">
        <div className="new-footer-bg">RAYON</div>

        <div className="new-footer-top">
          <div className="new-footer-left">
            <div className="new-footer-logo-area">
              <FooterLogo />
              <div className="new-footer-brand">
                <h3>Rayon Lab Tech</h3>
                <span>Always There...</span>
              </div>
            </div>

            <p className="new-footer-desc">
              Pioneering precision laboratory manufacturing for global<br />
              scientific excellence since 2008.
            </p>

            <div className="new-footer-actions">
              <span className="nf-icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg></span>
              <span className="nf-icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg></span>
              <a href="#" className="nf-whatsapp-btn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                WhatsApp Expert
              </a>
            </div>
          </div>

          <div className="new-footer-right">
            <div className="nf-newsletter-row">
              <div className="nf-newsletter-text">
                <h3>Subscribe to Our<br />Newsletter</h3>
              </div>
              <div className="nf-newsletter-form">
                <input type="email" placeholder="Enter Your Email Address" />
                <button type="button">Subscribe Now <span>→</span></button>
              </div>
            </div>

            <div className="nf-divider"></div>

            <div className="nf-links-row">
              <div className="nf-col">
                <h4>Useful Link</h4>
                <div className="nf-2col-links">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Blog</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>

              <div className="nf-col">
                <h4>Working Time</h4>
                <ul className="nf-info-list">
                  <li>Mon - Fri: 9.00am - 5.00pm</li>
                  <li>Saturday: 10.00am - 6.00pm</li>
                  <li>Sunday Closed</li>
                </ul>
              </div>

              <div className="nf-col">
                <h4>Say Hello</h4>
                <ul className="nf-info-list nf-contact-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    no-reply@pbrinfotech.com
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    +1-800123-456-789
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="new-footer-bottom">
          <div className="nfb-left">Copyright © 2024 Xieb All Rights Reserved.</div>
          <div className="nfb-right">
            <a href="#">Privacy Policy</a>
            <span className="nfb-sep">|</span>
            <a href="#">Term And Condition</a>
            <span className="nfb-sep">|</span>
            <a href="#">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
