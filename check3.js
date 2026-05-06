import fs from 'fs';

let content = fs.readFileSync('dist/index.html', 'utf8');

const exportMatches = content.match(/.{0,20}export\s+.{0,20}/g);
console.log('Exports:', exportMatches ? exportMatches.slice(0, 10) : 'No exports');
