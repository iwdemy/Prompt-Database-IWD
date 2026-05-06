import fs from 'fs';

let code = fs.readFileSync('src/data/prompts.ts', 'utf8');
console.log('Last 100 chars:');
console.log(code.slice(-100));
