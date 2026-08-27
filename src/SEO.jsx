import React, { useEffect } from 'react';

const SEO = ({ title, description, canonical, schemaJson }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);
      const twitterTitle = document.querySelector('meta[property="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute('content', title);
    }
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
      }

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);
      const twitterDesc = document.querySelector('meta[property="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute('content', description);
    }

    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.rel = 'canonical';
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }

    let scriptEl = null;
    if (schemaJson) {
      scriptEl = document.createElement('script');
      scriptEl.type = 'application/ld+json';
      scriptEl.id = 'dynamic-seo-schema';
      scriptEl.text = JSON.stringify(schemaJson);
      // Remove any existing dynamic-seo-schema
      const existing = document.getElementById('dynamic-seo-schema');
      if (existing) existing.remove();
      document.head.appendChild(scriptEl);
    }

    return () => {
      const existing = document.getElementById('dynamic-seo-schema');
      if (existing) existing.remove();
    };
  }, [title, description, canonical, schemaJson]);

  return null;
};

export default SEO;
