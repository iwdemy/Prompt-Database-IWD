const fs = require('fs');
let html = fs.readFileSync('./public/PromptsDatabase.html', 'utf8');

// Remove injected aistudio iframe script
html = html.replace('<script src="/_aistudio-iframe.js"></script>', '');

// Change type="module" to normal script so it works with file:// protocol
// The vite-plugin-singlefile generates an IIFE anyway, but leaves type="module"
html = html.replace('<script type="module" crossorigin>', '<script>');

fs.writeFileSync('./public/PromptsDatabase.html', html, 'utf8');
console.log('Fixed PromptsDatabase.html');
