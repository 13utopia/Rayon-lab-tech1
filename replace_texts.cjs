const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf-8');

// 1. Feature Cards
content = content.replace(
  "'Built with precision materials for long-term durability and chemical resistance.'",
  "`Precision-engineered laboratory furniture built for durability, safety, and daily performance.`"
);
content = content.replace(
  "'Custom-designed lab setups tailored to your workflow and space requirements.'",
  "`Custom laboratory layouts designed around your space, workflow, and equipment.`"
);
content = content.replace(
  "'Every unit is tested to meet safety, performance, and industry standards.'",
  "`Every laboratory product is inspected for reliable quality, finish, and functionality.`"
);
content = content.replace(
  "'From planning to installation — complete laboratory setup under one roof.'",
  "`Complete support from laboratory planning and manufacturing to delivery and installation.`"
);

// 2. Showcase Cards
content = content.replace(
  "'Modular systems engineered for adaptability and stringent safety protocols.'",
  "`Modular laboratory systems engineered for safety, flexibility, and performance.`"
);
content = content.replace(
  "'Engineered fume containment for safer chemical handling environments.'",
  "`Laboratory fume hoods designed for safer chemical handling.`"
);
content = content.replace(
  "'Heavy-duty laboratory benches for precision instrumentation.'",
  "`Durable laboratory working tables for efficient daily operations.`"
);
content = content.replace(
  "'Specialized chemical storage cabinets for safer laboratory organization.'",
  "`Chemical storage cabinets for safe, organised laboratory storage.`"
);

// 3. Hero Section
content = content.replace(
  "Laboratory Furniture Built for Safety, Efficiency, and Daily Performance",
  "Manufacturer Of Laboratory Furniture & Equipment In Ahmedabad"
);
content = content.replace(
  "Rayon Lab Tech builds custom laboratory furniture, fume-control systems, storage, and equipment for schools, research centers, healthcare facilities, and modern industrial laboratories.",
  "Rayon Lab Tech manufactures laboratory working tables, island tables, fume hoods, storage cabinets, exhaust systems, and stainless steel furniture for modern laboratories."
);

// 4. Why Choose Us (subtitle if any)
// It seems there is no subtitle mapped in the render, but the text is: "Trusted laboratory furniture manufacturing with customised, application-focused execution."
// Wait, let's see if there is a subtitle in the Why Choose Us section...
content = content.replace(
  "Structured execution for accuracy, quality, coordination, and installation.",
  "Structured planning, manufacturing, quality checks, and installation support."
);
content = content.replace(
  "Laboratory solutions for modern scientific, academic, and industrial facilities.",
  "Laboratory solutions for education, research, healthcare, and industry."
);

// 5. Working Process (serveCards)
content = content.replace(
  "'We study your lab type, space, workflow, equipment, utilities, and operating needs before planning begins.'",
  "`We study your laboratory space, workflow, equipment, utilities, storage, and specific operating requirements before planning.`"
);
content = content.replace(
  "'We review layouts, working zones, storage, utilities, and safety needs to develop practical recommendations.'",
  "`Our team reviews working zones, laboratory furniture needs, safety considerations, and available service connections.`"
);
content = content.replace(
  "'We align each solution with your workflow, equipment placement, movement, safety, utilities, and future laboratory needs.'",
  "`Every recommendation is aligned with equipment placement, staff movement, storage, utilities, safety, laboratory expansion, and operational needs.`"
);

content = content.replace(
  "'Our team plans functional lab layouts and selects suitable materials for safety, durability, efficiency, and maintenance.'",
  "`We plan practical layouts and select suitable materials for laboratory safety, durability, maintenance, efficiency, and performance.`"
);
content = content.replace(
  "'Every bench, cabinet, utility point, and equipment position is planned around approved laboratory workflow and space.'",
  "`Every laboratory working table, island table, cabinet, utility point, and equipment position is planned for efficiency.`"
);
content = content.replace(
  "'Dimensions, materials, finishes, storage, and utility provisions are approved before manufacturing begins to ensure project execution.'",
  "`Dimensions, materials, finishes, storage, and utility provisions are approved before laboratory furniture manufacturing begins for accuracy.`"
);

content = content.replace(
  "'We manufacture approved laboratory components with dimensions, finishes, assembly, and quality checks.'",
  "`Approved laboratory furniture is manufactured with accurate dimensions, durable finishes, and components.`"
);
content = content.replace(
  "'Completed products are inspected before dispatch to verify finish, functionality, stability, and compliance.'",
  "`Each product is inspected before dispatch to verify finish, functionality, stability, and specifications.`"
);
content = content.replace(
  "'Our team coordinates delivery and on-site installation to ensure placement, assembly, and final handover.'",
  "`Our team coordinates delivery and laboratory installation for placement, assembly, inspection, and final handover.`"
);

// 6. Industries We Serve (industryData)
content = content.replace(
  "'Durable laboratory furniture designed for practical learning, demonstrations, and academic research.'",
  "`Modular laboratory furniture for practical learning, demonstrations, experiments, and academic research.`"
);
content = content.replace(
  "'Chemical-resistant furniture, storage, and fume-control systems for industrial laboratory operations.'",
  "`Chemical-resistant furniture, fume hoods, storage, and exhaust systems for industry.`"
);
content = content.replace(
  "'Research laboratory environments built for precision, safety, organization, and efficient operations.'",
  "`Laboratory working tables and solutions designed for precision, safety, and efficiency.`"
);

// 7. Blog Section
content = content.replace(
  "Discover best practices, industry standards, and new solutions in modern lab setups.",
  "Latest insights for safer, smarter, and efficient laboratory planning."
);

fs.writeFileSync('src/App.jsx', content);
console.log('Replacements completed.');
