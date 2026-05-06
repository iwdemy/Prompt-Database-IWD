import fs from 'fs';

const html = fs.readFileSync('public/PromptsDatabase.html', 'utf8');

const awaitMatches = html.match(/.{0,20}await\s.{0,20}/g);
console.log('Awaits contexts:', awaitMatches ? awaitMatches.slice(0, 10) : 0);
