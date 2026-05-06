import fs from 'fs';

const html = fs.readFileSync('public/PromptsDatabase.html', 'utf8');
const scriptMatch = html.match(/<script>(.*?)<\/script>/s);

console.log(scriptMatch ? scriptMatch[0].slice(0, 500) : 'No script found');
