import React from 'react';

function LogoMark() {
  return (
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="29" cy="29" r="28" fill="#E8EEFF" stroke="#0D1E44" strokeOpacity="0.08" strokeWidth="1.5" />
      <path d="M16 39C22 39 28 33 28 27C28 21 22 14 16 14" stroke="#0D1E44" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M42 19C37 18 30 19 26 25C22 31 20 36 20 38" stroke="#0D1E44" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="44" cy="14" r="4" fill="#0D1E44" />
      <circle cx="14" cy="44" r="3" fill="#0D1E44" />
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

function FeatureIcon({ type }) {
  switch (type) {
    case 'microscope':
      return (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 22L18 15" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M14 18L19 12" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18 12H22" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M10 23L17 30" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M9 19C9 16.7909 10.7909 15 13 15H15C17.2091 15 19 16.7909 19 19V21" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M9 25H14" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'modular':
      return (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="10" r="4" stroke="#fff" strokeWidth="1.8" />
          <path d="M12 20C12 17.7909 13.7909 16 16 16C18.2091 16 20 17.7909 20 20V24H12V20Z" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M10 18H22" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M14 22H18" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 7L22 7C24 7 25 9 24 11V16C24 21 20 25 16 26C12 25 8 21 8 16V11C8 9 9 7 10 7Z" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 13L20 21" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M20 13L12 21" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'flask':
      return (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8H20" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M14 8V13" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18 8V13" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 13H20" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M11 13L9 24C8.5 26.5 10.5 28 13 28H19C21.5 28 23.5 26.5 23 24L21 13" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-group">
          <div className="brand-mark">
            <LogoMark />
          </div>
          <div className="brand-copy">
            <div className="brand-title">Rayon Lab Tech</div>
            <div className="brand-subtitle">Labify your life</div>
          </div>
        </div>

        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <React.Fragment key={item}>
              <a href="#">{item}</a>
              {index < navItems.length - 1 ? <span className="divider" aria-hidden="true" /> : null}
            </React.Fragment>
          ))}
        </nav>

        <div className="actions">
          <a className="phone-pill" href="tel:+1212255511">
            <span className="phone-icon" aria-hidden="true">📞</span>
            +1 (212) 255-511
          </a>
          <button className="icon-btn" type="button" aria-label="Search">
            <span className="search-icon" aria-hidden="true">🔍</span>
          </button>
          <a className="cta-btn" href="#">
            Appointment
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </header>

      <section className="feature-grid" aria-label="Feature highlights">
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
            <button className="card-action" type="button" aria-label={`Explore ${title}`}>
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M5 8H11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M9 5L12 8L9 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}

export default App;
