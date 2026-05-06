import fs from 'fs';

const html = fs.readFileSync('public/PromptsDatabase.html', 'utf8');

console.log(html.slice(0, 1000));
