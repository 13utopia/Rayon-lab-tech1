const fs = require('fs');
const path = require('path');

const directoriesToProcess = [
  path.join(__dirname, 'src'),
  path.join(__dirname, 'public')
];

const fileExtensionsToUpdate = ['.jsx', '.js', '.css', '.html'];
const rootHtml = path.join(__dirname, 'index.html');

const seoKeywords = [
  "Laboratory-Furniture-Supplier",
  "Fume-Hood-Manufacturer",
  "Pharmaceutical-Laboratory-Furniture",
  "Chemical-Laboratory-Furniture",
  "College-Laboratory-Furniture",
  "lab-working-table",
  "lab-furniture"
];

// Product mapping for generic names found in products.js
const productImageMap = {
  'IMG_1692.webp': 'lab-working-table-1.webp',
  'IMG_20250516_153636.webp': 'lab-working-table-2.webp',
  'IMG_20251007_133917.webp': 'lab-working-table-3.webp',
  'IMG_20251007_142746.webp': 'lab-working-table-4.webp',
  'WhatsApp.webp': 'lab-working-table-5.webp',
  'IMG_3260.webp': 'lab-working-table-6.webp',
  'IMG_3272.webp': 'lab-working-table-7.webp',
  'IMG_3279.webp': 'lab-working-table-8.webp',
  'IMG_20251007_125058.webp': 'laboratory-furniture-1.webp',
  'IMG_20251007_142630.webp': 'laboratory-furniture-2.webp',
  'IMG_20260616_193734.webp': 'laboratory-furniture-3.webp',
  'IMG_3244.webp': 'laboratory-furniture-4.webp',
  'IMG_3294.webp': 'laboratory-furniture-5.webp',
  'IMG_20241120_014034.webp': 'overhead-storage-cabinet-1.webp',
  'IMG_20250411_232850.webp': 'overhead-storage-cabinet-2.webp',
  'IMG_3287.webp': 'overhead-storage-cabinet-3.webp',
  'IMG_3291.webp': 'overhead-storage-cabinet-4.webp',
};

// Keywords to determine if an image is already a well-named product
const productKeywords = [
  'working-table', 'lab-furniture', 'laboratory-furniture', 'fume-hood', 
  'fume-extractor', 'anti-vibration', 'exhaust-blower', 'blower', 
  'island-table', 'overhead', 'glassware', 'chemical'
];

let fileRenames = [];
let randomCounter = 1;

function getRandomSEOKeyword() {
  const keyword = seoKeywords[Math.floor(Math.random() * seoKeywords.length)];
  return `${keyword}-${randomCounter++}`;
}

// Function to collect all images
function getImages(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getImages(fullPath, fileList);
    } else if (entry.name.endsWith('.webp')) {
      fileList.push({ fullPath, dir, name: entry.name });
    }
  }
  return fileList;
}

function processImages() {
  let images = [];
  for (const dir of directoriesToProcess) {
    if (fs.existsSync(dir)) {
      images = getImages(dir, images);
    }
  }

  for (const img of images) {
    const oldName = img.name;
    let newName = '';

    // Check if it's explicitly mapped
    if (productImageMap[oldName]) {
      newName = productImageMap[oldName];
    } 
    // Check if it's already a well-named product
    else if (productKeywords.some(kw => oldName.toLowerCase().includes(kw))) {
      // Keep it as is
      continue;
    } 
    // Otherwise, it's a non-product (like hero, bg, team, icon), give it an SEO keyword
    else {
      // Ignore some crucial app icons if necessary, but user said ALL. Let's exclude favicon just in case.
      if (oldName === 'favicon.webp') continue;
      
      const newBase = getRandomSEOKeyword();
      newName = `${newBase}.webp`;
    }

    if (newName && newName !== oldName) {
      const newPath = path.join(img.dir, newName);
      
      try {
        fs.renameSync(img.fullPath, newPath);
        fileRenames.push({ oldName, newName });
        console.log(`Renamed ${oldName} to ${newName}`);
      } catch (e) {
        console.error(`Error renaming ${oldName}:`, e);
      }
    }
  }
}

function updateReferences(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      updateReferences(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (fileExtensionsToUpdate.includes(ext)) {
        updateFile(fullPath);
      }
    }
  }
}

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  for (const { oldName, newName } of fileRenames) {
    const regex = new RegExp(oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    if (regex.test(content)) {
      content = content.replace(regex, newName);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated references in ${path.relative(__dirname, filePath)}`);
  }
}

function run() {
  console.log('Starting image renaming...');
  processImages();

  console.log('Finished renaming. Updating references...');
  for (const dir of directoriesToProcess) {
    if (fs.existsSync(dir)) {
      updateReferences(dir);
    }
  }
  
  if (fs.existsSync(rootHtml)) {
     updateFile(rootHtml);
  }
  
  console.log('All done!');
}

run();
