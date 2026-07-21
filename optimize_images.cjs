const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directoriesToProcess = [
  path.join(__dirname, 'src'),
  path.join(__dirname, 'public')
];

const imageExtensions = ['.png', '.jpg', '.jpeg'];
const fileExtensionsToUpdate = ['.jsx', '.js', '.css', '.html'];
const rootHtml = path.join(__dirname, 'index.html');

let fileRenames = []; 

async function processDirectoryForImages(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectoryForImages(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (imageExtensions.includes(ext)) {
        const parsed = path.parse(fullPath);
        let newName = parsed.name + '.webp';
        
        // Handle double extensions like .png.png
        if (parsed.name.endsWith('.png') || parsed.name.endsWith('.jpg') || parsed.name.endsWith('.jpeg')) {
          const innerParsed = path.parse(parsed.name);
          newName = innerParsed.name + '.webp';
        }
        
        const newPath = path.join(parsed.dir, newName);
        const oldName = entry.name;

        try {
          await sharp(fullPath).webp({ quality: 80 }).toFile(newPath);
          fs.unlinkSync(fullPath);
          fileRenames.push({ oldName, newName });
          console.log(`Converted ${oldName} to ${newName}`);
        } catch (e) {
          console.error(`Error converting ${fullPath}:`, e);
        }
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

async function run() {
  console.log('Starting image conversion...');
  for (const dir of directoriesToProcess) {
    if (fs.existsSync(dir)) {
      await processDirectoryForImages(dir);
    }
  }

  console.log('Finished conversion. Updating references...');
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
