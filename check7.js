import fs from 'fs';

const html = fs.readFileSync('public/PromptsDatabase.html', 'utf8');

const twMatch = html.match(/bg-brand-light/g);
console.log('Tailwind classes found:', twMatch ? twMatch.length : 0);

const styleStart = html.indexOf('<style');
const scriptStart = html.indexOf('<script');

console.log('<style> index:', styleStart);
console.log('<script> index:', scriptStart);
