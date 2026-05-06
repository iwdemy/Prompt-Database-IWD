import fs from 'fs';

const html = fs.readFileSync('public/PromptsDatabase.html', 'utf8');

const dynMatches = html.match(/import\(/g);
console.log('Dynamic imports:', dynMatches ? dynMatches.length : 0);

const awaitMatches = html.match(/await\s/g);
console.log('Awaits:', awaitMatches ? awaitMatches.slice(0, 5) : 0);
