const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.css'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Fix nav wrap
  content = content.replace(/nav\s*\{[^}]+\}/g, (match) => {
    // replace flex-wrap: wrap; with flex-wrap: nowrap;
    // ensure gap is present to prevent squishing
    let newMatch = match.replace(/flex-wrap:\s*wrap;/g, 'flex-wrap: nowrap;');
    return newMatch;
  });

  // 2. Fix search box margin
  content = content.replace(/\.search-box\s*\{[^}]+\}/g, (match) => {
    let newMatch = match.replace(/margin-right:\s*360px;/g, 'margin-right: 0;');
    return newMatch;
  });

  // 3. Fix nav ul margin if it's too big
  content = content.replace(/nav\s+ul\s*\{[^}]+\}/g, (match) => {
    let newMatch = match.replace(/margin-left:\s*50px;/g, 'margin-left: 20px;');
    return newMatch;
  });

  // 4. Fix icon-links margin
  content = content.replace(/\.icon-links\s*\{[^}]+\}/g, (match) => {
    let newMatch = match.replace(/margin-right:\s*80px;/g, 'margin-right: 0;');
    return newMatch;
  });

  fs.writeFileSync(filePath, content);
});

console.log('Fixed navbar alignment across all CSS files');
