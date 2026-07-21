const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf-8');

// 1. Add React Router imports
if (!content.includes('react-router-dom')) {
  content = content.replace(
    "import React, { useState, useEffect, useRef } from 'react';",
    "import React, { useState, useEffect, useRef } from 'react';\nimport { Routes, Route, useNavigate, useLocation, useParams, Link } from 'react-router-dom';"
  );
}

// 2. Add ArticleDetailRoute component at the top (after imports)
if (!content.includes('ArticleDetailRoute')) {
  const routeCode = `
import { blogPosts, generateSlug } from './BlogPage';

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
`;
  content = content.replace("const App = () => {", routeCode + "\nconst App = () => {");
}

// 3. Replace state-based currentPage with hook-based
content = content.replace(
  "const [currentPage, setCurrentPage] = React.useState(initialRouteRef.current.page);",
  `const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'home' :
                      location.pathname.startsWith('/products') ? 'products' :
                      location.pathname.startsWith('/about') ? 'about-us' :
                      location.pathname.startsWith('/updates') ? (location.pathname === '/updates' ? 'blog' : 'blog-detail') :
                      location.pathname.startsWith('/portfolio') ? 'portfolio' :
                      location.pathname.startsWith('/contact') ? 'contact-us' : 'home';`
);

// 4. Update handleNavClick to use navigate
const oldNavClickRegex = /const handleNavClick = \[\^\{\]\*\{[\s\S]*?window\.scrollTo[^}]*\}\s*\};\s*\};\s*\};\s*\}\s*\};/g;
// Actually, it's easier to just replace the body of handleNavClick:
content = content.replace(
  /const handleNavClick = \(e, pageId, product = null\) => {[\s\S]*?window\.scrollTo\(\{ top: 0, behavior: 'smooth' \}\);\s*};/,
  `const handleNavClick = (e, pageId, product = null) => {
    if (e) e.preventDefault();
    if (isDropdownOpen) setIsDropdownOpen(false);
    if (isPremiumMobileMenuOpen) setIsPremiumMobileMenuOpen(false);
    
    if (pageId === 'products' && product) {
      setSelectedProduct(product);
      navigate('/products/' + product.id);
    } else if (pageId === 'home') {
      navigate('/');
    } else {
      navigate('/' + (pageId === 'blog' ? 'updates' : pageId));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };`
);

// 5. Replace the massive ternary block with <Routes>
// We need to match from `{currentPage === 'about-us' ? (` down to the ProductPage fallback.
// Because it's huge, we'll do this carefully.
const routesReplacement = `<Routes>
          <Route path="/about-us" element={<AboutUs onGetQuote={() => setShowQuoteModal(true)} />} />
          <Route path="/updates" element={<BlogPage onSelectArticle={(post) => navigate('/updates/' + generateSlug(post.title))} />} />
          <Route path="/updates/:slug" element={<ArticleDetailRoute onGetQuote={() => setShowQuoteModal(true)} />} />
          <Route path="/portfolio" element={<PortfolioPage onGetQuote={() => setShowQuoteModal(true)} onProductsClick={(e) => handleNavClick(e, 'products')} />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/products/:id" element={<ProductPage product={selectedProduct} onGetQuote={() => setShowQuoteModal(true)} onProductSelect={(p) => handleNavClick(null, 'products', p)} />} />
          <Route path="/" element={
            <>`;

content = content.replace("{currentPage === 'about-us' ? (", routesReplacement);
content = content.replace(") : currentPage === 'blog' ? (", "  {/* ");
content = content.replace(") : currentPage === 'blog-detail' && selectedArticle ? (", " */} ");
content = content.replace(") : currentPage === 'portfolio' ? (", "  {/* ");
content = content.replace(") : currentPage === 'contact-us' ? (", " */} ");
content = content.replace(") : currentPage === 'home' ? (", "  {/* ");

// And at the end of the home section:
content = content.replace(`          </>
        ) : (
          <ProductPage
            product={selectedProduct}
            onGetQuote={() => setShowQuoteModal(true)}
            onProductSelect={(p) => handleNavClick(null, 'products', p)}
          />
        )}`, `          </>
          } />
        </Routes>`);

fs.writeFileSync('src/App.jsx', content);
console.log('App.jsx refactored successfully.');
