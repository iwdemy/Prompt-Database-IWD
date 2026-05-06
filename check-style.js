import fs from 'fs';

const html = fs.readFileSync('public/PromptsDatabase.html', 'utf8');

const styleMatch = html.match(/<style>(.*?)<\/style>/s);
if (styleMatch) {
  console.log('Style tag found! Length:', styleMatch[0].length);
  console.log('First 100 chars:', styleMatch[0].slice(0, 100));
} else {
  console.log('No <style> tag found!');
}
