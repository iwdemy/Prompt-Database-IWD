import fs from 'fs';

let content = fs.readFileSync('./src/data/prompts.ts', 'utf8');

// If it ends with 'scale cautio', fix it.
if (content.endsWith('scale cautio')) {
    content = content.replace(/scale cautio$/, 'scale cautiously, flag resource needs, and suggest realistic limits.",\n    "category": "Other"\n  }\n];');
    fs.writeFileSync('./src/data/prompts.ts', content);
    console.log('Fixed truncation');
} else {
    // If it ends with something else, like it was already fixed but just missing `];`
    console.log('Did not match scale cautio');
}
