import fs from 'fs';
import https from 'https';

async function fetchPrompts() {
  console.log("Fetching prompts...");
  const res = await fetch('https://raw.githubusercontent.com/f/awesome-chatgpt-prompts/main/prompts.csv');
  const text = await res.text();
  
  const results: any[] = [];
  
  // Custom CSV split
  let inQuotes = false;
  let currentVal = "";
  let currentRow: string[] = [];
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    
    if (char === '"') {
      if (inQuotes && text[i+1] === '"') {
        currentVal += '"';
        i++; // skip next
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentRow.push(currentVal);
      currentVal = "";
    } else if ((char === '\n' || char === '\r') && !inQuotes) {
      currentRow.push(currentVal);
      if (currentRow.length >= 2 && currentRow[0] !== 'act') {
        results.push({ act: currentRow[0], prompt: currentRow[1] });
      }
      if (char === '\r' && text[i+1] === '\n') {
        i++;
      }
      currentRow = [];
      currentVal = "";
    } else {
      currentVal += char;
    }
  }
  
  // push remaining
  if (currentVal || currentRow.length > 0) {
    currentRow.push(currentVal);
    if (currentRow.length >= 2 && currentRow[0] !== 'act') {
        results.push({ act: currentRow[0], prompt: currentRow[1] });
    }
  }

  // Generate categories based on keywords in title
  const prompts = results.map((r, index) => {
     let cat = "Other";
     const actStr = (r.act || "").toLowerCase();
     if (actStr.includes('developer') || actStr.includes('javascript') || actStr.includes('software') || actStr.includes('code') || actStr.includes('linux') || actStr.includes('commit') || actStr.includes('php') || actStr.includes('sql') || actStr.includes('regex')) cat = "Dev & IT";
     else if (actStr.includes('writer') || actStr.includes('poet') || actStr.includes('essay') || actStr.includes('story') || actStr.includes('author') || actStr.includes('editor')) cat = "Writing";
     else if (actStr.includes('tutor') || actStr.includes('teacher') || actStr.includes('math') || actStr.includes('school') || actStr.includes('education')) cat = "Education";
     else if (actStr.includes('marketing') || actStr.includes('seo') || actStr.includes('advertiser') || actStr.includes('sales')) cat = "Marketing";
     else if (actStr.includes('design') || actStr.includes('art') || actStr.includes('music')) cat = "Creative";
     else if (actStr.includes('coach') || actStr.includes('interviewer') || actStr.includes('career') || actStr.includes('manager')) cat = "Career & Biz";
     else if (actStr.includes('doctor') || actStr.includes('health') || actStr.includes('psych') || actStr.includes('therapist')) cat = "Health & Wellness";
     
     return {
       id: (index + 1).toString(),
       title: r.act.trim().replace(/^Act as (a|an) /i, 'Act as '),
       description: r.prompt.substring(0, 100).replace(/\n/g, ' ') + "...",
       content: r.prompt.trim(),
       category: cat
     };
  });
  
  // get unique categories
  const catSet = new Set<string>();
  catSet.add("Semua");
  prompts.forEach(p => catSet.add(p.category));
  const categories = Array.from(catSet);
  
  const finalFile = `export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
}

export const categories = ${JSON.stringify(categories, null, 2)};

export const prompts: Prompt[] = ${JSON.stringify(prompts, null, 2)};
`;

  fs.writeFileSync('src/data/prompts.ts', finalFile);
  console.log("Written successfully. Categories:", categories.length, "Prompts:", prompts.length);
}

fetchPrompts().catch(console.error);
