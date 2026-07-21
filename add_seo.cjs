const fs = require('fs');

const files = {
  'src/App.jsx': {
    imports: "import SEO from './SEO';\n",
    replaceTarget: '<Route path="/" element={\n            <>',
    replacement: '<Route path="/" element={\n            <>\n            <SEO title="Manufacturer Of Laboratory Furniture & Equipment In Ahmedabad" description="Rayon Lab Tech is a leading manufacturer of premium laboratory furniture, fume hoods, and scientific equipment in Ahmedabad, providing high-quality solutions for modern research environments." />'
  },
  'src/AboutUs.jsx': {
    imports: "import SEO from './SEO';\n",
    replaceTarget: '<div className="about-page">',
    replacement: '<div className="about-page">\n      <SEO title="Manufacturer Of Laboratory Furniture & Equipment In India" description="Rayon Lab Tech is a Manufacturer Of Laboratory Furniture & Equipment In Ahmedabad, delivering customised working tables, island tables, fume hoods, storage cabinets, exhaust systems, and stainless steel furniture for educational, research, healthcare, pharmaceutical, chemical, and industrial laboratory environments across India with professional support." />'
  },
  'src/BlogPage.jsx': {
    imports: "import SEO from './SEO';\n",
    replaceTarget: '<div className="blog-page">',
    replacement: '<div className="blog-page">\n      <SEO title="Our Blogs - Rayon Lab Tech" description="Latest insights for safer, smarter, and efficient laboratory planning." />'
  },
  'src/ArticleDetailPage.jsx': {
    imports: "import SEO from './SEO';\n",
    replaceTarget: '<div className="article-detail-page">',
    replacement: '<div className="article-detail-page">\n      <SEO title={post.title} description={post.excerpt || post.title} />'
  },
  'src/PortfolioPage.jsx': {
    imports: "import SEO from './SEO';\n",
    replaceTarget: '<div className="portfolio-page">',
    replacement: '<div className="portfolio-page">\n      <SEO title="Our Portfolio - Rayon Lab Tech" description="Explore our successful laboratory installations and projects." />'
  },
  'src/ProductPage.jsx': {
    imports: "import SEO from './SEO';\n",
    replaceTarget: '<div className="product-page">',
    replacement: '<div className="product-page">\n      <SEO title={product.title} description={product.heroSubtitle} />'
  },
  'src/ContactUs.jsx': {
    imports: "import SEO from './SEO';\n",
    replaceTarget: '<div className="contact-page">',
    replacement: '<div className="contact-page">\n      <SEO title="Contact Us - Rayon Lab Tech" description="Get in touch with Rayon Lab Tech for your laboratory furniture needs." />'
  }
};

for (const [file, config] of Object.entries(files)) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // add import if not there
    if (!content.includes("import SEO from './SEO'")) {
      content = config.imports + content;
    }

    // inject SEO component
    if (!content.includes("<SEO ")) {
      content = content.replace(config.replaceTarget, config.replacement);
      fs.writeFileSync(file, content);
      console.log(`Updated ${file}`);
    } else {
      console.log(`Already injected in ${file}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
}
