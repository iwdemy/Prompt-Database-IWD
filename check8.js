import fs from 'fs';

const html = fs.readFileSync('public/PromptsDatabase.html', 'utf8');

const classDef = html.match(/\.bg-brand-light/g);
console.log('CSS Definition for bg-brand-light:', classDef ? classDef.length : 0);
