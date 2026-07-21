import React, { useEffect } from 'react';

const SEO = ({ title, description }) => {
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
  }, [title, description]);

  return null;
};

export default SEO;
