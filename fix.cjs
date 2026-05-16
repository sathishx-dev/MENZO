const fs = require('fs');

let idx = fs.readFileSync('src/pages/Index.jsx', 'utf8');
idx = idx.replace('const cssFiles = [];', 'const cssFiles = ["index.css"];');
idx = idx.replace('autoplay muted loop playsinline', 'autoPlay muted loop playsInline');
fs.writeFileSync('src/pages/Index.jsx', idx);

let log = fs.readFileSync('src/pages/Login.jsx', 'utf8');
log = log.replace('<form action="login.html">', '<form action="/home">');
fs.writeFileSync('src/pages/Login.jsx', log);

console.log('Fixed Index.jsx and Login.jsx');
