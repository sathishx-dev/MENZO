const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove target="_blank"
  content = content.replace(/target="_blank"/g, '');

  if (file === 'Login.jsx') {
    content = content.replace(/<form action="\/home">/g, '<form onSubmit={(e) => { e.preventDefault(); window.location.href = "/home"; }}>');
  }

  fs.writeFileSync(filePath, content);
});

console.log('Fixed links across all pages');
