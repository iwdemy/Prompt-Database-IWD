const fs = require('fs');
const path = require('path');

// Ensure dist/index.html is copied cross-platform
if (fs.existsSync('./dist/index.html')) {
  fs.copyFileSync('./dist/index.html', './public/PromptsDatabase.html');
  console.log('Copied dist/index.html to public/PromptsDatabase.html');
  
  // Also sync to Membership project if present
  const membershipPublic = path.resolve(__dirname, '../Membership/public/PromptsDatabase.html');
  try {
    if (fs.existsSync(path.dirname(membershipPublic))) {
      fs.copyFileSync('./dist/index.html', membershipPublic);
      console.log('Synced to ../Membership/public/PromptsDatabase.html');
    }
  } catch (err) {
    console.warn('Could not sync to Membership:', err.message);
  }
}

if (fs.existsSync('./public/PromptsDatabase.html')) {
  let html = fs.readFileSync('./public/PromptsDatabase.html', 'utf8');

  // Remove injected aistudio iframe script
  html = html.replace('<script src="/_aistudio-iframe.js"></script>', '');

  // Change type="module" to normal script so it works with file:// protocol
  // The vite-plugin-singlefile generates an IIFE anyway, but leaves type="module"
  html = html.replace('<script type="module" crossorigin>', '<script>');

  fs.writeFileSync('./public/PromptsDatabase.html', html, 'utf8');
  console.log('Fixed PromptsDatabase.html');
}
