import SEO from './SEO';
import React, { useState, useMemo } from 'react';
import './clients-page.css';
import clientBannerBg from './assets/College-Laboratory-Furniture-63.webp';

const clientsData = [
  { name: 'Zydus Lifesciences Ltd', category: 'Pharma & Biotech', short: 'ZY' },
  { name: 'Tata Group', category: 'Industrial & Energy', short: 'TA' },
  { name: 'Accuprec Research Labs Private Limited', category: 'Healthcare & Research', short: 'AR' },
  { name: 'Acuvits Healthcare LLP', category: 'Healthcare & Research', short: 'AH' },
  { name: 'Amishi Drugs and Chemicals Private Limited', category: 'Pharma & Biotech', short: 'AD' },
  { name: 'Avanteclad Modular Solutions LLP', category: 'Industrial & Energy', short: 'AM' },
  { name: 'Barfani\'s Wellness Private Limited', category: 'Cosmetics & Wellness', short: 'BW' },
  { name: 'CG Semi Private Limited', category: 'Industrial & Energy', short: 'CG' },
  { name: 'Doon International School', category: 'Educational & Institutional', short: 'DI' },
  { name: 'Collage Food of Technologies', category: 'Food & FMCG', short: 'CF' },
  { name: 'Cotecna Life Sciences India Private Limited', category: 'Healthcare & Research', short: 'CL' },
  { name: 'Crossasia Biotech Pvt Ltd', category: 'Pharma & Biotech', short: 'CB' },
  { name: 'Cureza Healthcare Pvt Ltd', category: 'Healthcare & Research', short: 'CH' },
  { name: 'Genus Breeding India Private Limited', category: 'Healthcare & Research', short: 'GB' },
  { name: 'Geo-Chem Laboratories Private Limited', category: 'Healthcare & Research', short: 'GC' },
  { name: 'Ginger Science Pvt Ltd', category: 'Healthcare & Research', short: 'GS' },
  { name: 'Goldspire Naturals', category: 'Cosmetics & Wellness', short: 'GN' },
  { name: 'Halewood Laboratories Pvt Ltd', category: 'Pharma & Biotech', short: 'HL' },
  { name: 'Ice Make Refrigeration Ltd', category: 'Industrial & Energy', short: 'IM' },
  { name: 'J. K. Masala', category: 'Food & FMCG', short: 'JK' },
  { name: 'Le Wilson Cosmetics Private Limited', category: 'Cosmetics & Wellness', short: 'LW' },
  { name: 'Matrix Enterprises', category: 'Industrial & Energy', short: 'ME' },
  { name: 'MNEC Consultants Pvt. Ltd', category: 'Industrial & Energy', short: 'MN' },
  { name: 'ESIC Indore', category: 'Educational & Institutional', short: 'ES' },
  { name: 'P & J Cretechem Pvt Ltd', category: 'Industrial & Energy', short: 'PJ' },
  { name: 'Rajasthan Vikas Sansthan Vyas Medical College', category: 'Educational & Institutional', short: 'RV' },
  { name: 'RKS Herbals Pvt Ltd', category: 'Cosmetics & Wellness', short: 'RK' },
  { name: 'Sarvesh Tripathi Max Science', category: 'Healthcare & Research', short: 'ST' },
  { name: 'Omni Pharmaceutical Mumbai', category: 'Pharma & Biotech', short: 'OP' },
  { name: 'Sonar & Sons Group of Educational Trust', category: 'Educational & Institutional', short: 'SS' },
  { name: 'Spire Automation and Innovation India', category: 'Industrial & Energy', short: 'SA' },
  { name: 'ST. MARY\'S OSC Public Trust', category: 'Educational & Institutional', short: 'SM' },
  { name: 'Suntara Cosmetics Private Limited', category: 'Cosmetics & Wellness', short: 'SC' },
  { name: 'Tectonic Power Pvt Ltd', category: 'Industrial & Energy', short: 'TP' },
  { name: 'Tint Tech Coatings Pvt Ltd', category: 'Industrial & Energy', short: 'TT' },
  { name: 'Truptyum Foods LLP', category: 'Food & FMCG', short: 'TF' },
  { name: 'Vihaan Clean & Green Tech Pvt Ltd', category: 'Industrial & Energy', short: 'VC' },
  { name: 'Vijai Polyproduct', category: 'Industrial & Energy', short: 'VP' },
  { name: 'Nilavar Laboratories', category: 'Healthcare & Research', short: 'NL' },
  { name: 'Andhjan Mandal Bavla', category: 'Educational & Institutional', short: 'AM' },
];

const categories = ['All', 'Pharma & Biotech', 'Healthcare & Research', 'Educational & Institutional', 'Industrial & Energy', 'Cosmetics & Wellness', 'Food & FMCG'];

const ClientsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredClients = useMemo(() => {
    return clientsData.filter((client) => {
      const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || client.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="clients-page-v2">
      <SEO 
        title="Our Clients & Key Partners | Rayon Lab Tech" 
        description="Explore our list of trusted clients across pharmaceutical, healthcare research, educational institutions, cosmetics, and industrial enterprises in India." 
      />

      {/* Hero Banner Section */}
      <section className="clients-banner" style={{ backgroundImage: `url(${clientBannerBg})` }}>
        <div className="clients-banner-overlay">
          <div className="clients-banner-content">
            <h1 className="clients-banner-title">OUR CLIENTS</h1>
            <p className="clients-banner-desc">
              Trusted by leading pharmaceutical giants, healthcare research institutes, educational universities, and industrial enterprises across India.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <div className="clients-stats-bar">
        <div className="clients-stats-container">
          <div className="client-stat-card">
            <div className="client-stat-number">40+</div>
            <div className="client-stat-label">Corporate & Research Clients</div>
          </div>
          <div className="client-stat-card">
            <div className="client-stat-number">100%</div>
            <div className="client-stat-label">On-Time Project Handover</div>
          </div>
          <div className="client-stat-card">
            <div className="client-stat-number">15+</div>
            <div className="client-stat-label">States Covered In India</div>
          </div>
          <div className="client-stat-card">
            <div className="client-stat-number">ISO</div>
            <div className="client-stat-label">CE Certified Manufacturing</div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="clients-main-container">
        {/* Search & Filter Bar */}
        <div className="clients-filter-bar">
          <div className="clients-search-box">
            <svg className="clients-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              className="clients-search-input" 
              placeholder="Search by client name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="clients-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`client-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clients Grid */}
        <div className="clients-grid">
          {filteredClients.length > 0 ? (
            filteredClients.map((client, index) => (
              <div key={index} className="client-card-item">
                <div className="client-card-badge">{client.short}</div>
                <div className="client-card-details">
                  <h3 className="client-card-name">{client.name}</h3>
                  <span className="client-card-cat">{client.category}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="no-clients-found">
              No clients found matching "{searchTerm}". Try resetting search or filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
