import fs from 'fs';

let content = fs.readFileSync('dist/index.html', 'utf8');

const matches = content.match(/import[^;'"]+/g);
console.log(matches ? matches.slice(0, 10) : 'No imports');
