const fs = require('fs');

let content = fs.readFileSync('src/AboutUs.jsx', 'utf-8');

// Add hidden h1 at top of about-page
content = content.replace(
  '<div className="about-page">',
  `<div className="about-page">
      <h1 className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: '0' }}>
        Manufacturer Of Laboratory Furniture & Equipment In India
      </h1>`
);

// Change h1 to h2 in about-hero
content = content.replace(
  '<h1 className="about-hero-title">About Us</h1>',
  '<h2 className="about-hero-title">About Us</h2>'
);

// Update Main Heading
content = content.replace(
  '<h2 className="intro-main-title">Precision, Quality and Trust in Every Laboratory</h2>',
  '<h2 className="intro-main-title">Precision Laboratory Solutions Manufactured for Modern Workspaces</h2>'
);

// Update Paragraph 1
content = content.replace(
  'Rayon Lab Tech is a growing laboratory solutions company established in Ahmedabad, Gujarat, India. Our experienced team combines technical knowledge, practical design, precise manufacturing, problem-solving capability, and dependable project execution to develop laboratory furniture and equipment that accurately fulfil each client’s specific operational requirements.',
  'Rayon Lab Tech is a Manufacturer Of Laboratory Furniture & Equipment In Ahmedabad, delivering customised working tables, island tables, fume hoods, storage cabinets, exhaust systems, and stainless steel furniture for educational, research, healthcare, pharmaceutical, chemical, and industrial laboratory environments across India with professional support.'
);

// Update Paragraph 2
content = content.replace(
  'We provide smart solutions for laboratory projects including working tables, island tables, fume hoods, exhaust systems, spot extractors, storage cabinets, stainless steel furniture, and complete setups. Rayon Lab Tech supports every stage from requirement analysis and design through manufacturing, installation, and final handover.',
  'Our experienced team combines technical planning, practical design, precise manufacturing, quality materials, and dependable project execution. We support every stage from requirement analysis and layout development to furniture production, equipment installation, and final handover, creating safer, organised, efficient, and durable laboratories every time.'
);

// Update Mission Point 1
content = content.replace(
  'To manufacture durable laboratory furniture and dependable scientific equipment.',
  'To manufacture durable laboratory furniture and reliable scientific equipment.'
);

// Update Mission Footer Note
content = content.replace(
  'We value every customer’s feedback and suggestions, helping us improve our products and deliver more flexible solutions according to their specific requirements.',
  'We value every customer’s feedback and suggestions, helping us improve our products and deliver flexible solutions according to their specific laboratory requirements.'
);

// Update CTA Heading
content = content.replace(
  'Build Better Laboratories With High-Quality Modular Furniture',
  'Build Better Laboratories With Custom Furniture Solutions'
);

fs.writeFileSync('src/AboutUs.jsx', content);
console.log('AboutUs.jsx updated.');
