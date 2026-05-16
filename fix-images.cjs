const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace src="filename.ext" with src="/filename.ext"
  // Make sure to not replace src="http..." or src="/..."
  content = content.replace(/src="(?!\/|http)([^"]+)"/g, 'src="/$1"');

  fs.writeFileSync(filePath, content);
});

console.log('Fixed image paths');
