const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.css'));

const newMobileFix = `/* --- MOBILE NAVBAR TWEAKS --- */
@media (max-width: 768px) {
  .navbar nav, nav.nav-wrapper {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    padding: 10px 20px !important;
  }
  .logo {
    order: 1 !important;
    margin-right: auto !important;
  }
  .icon-links {
    order: 2 !important;
    display: flex !important;
    gap: 25px !important; /* Proper gap between 4 icons */
    margin-right: 30px !important; /* Gap between icons and hamburger */
  }
  .hamburger {
    order: 3 !important;
    position: static !important;
    display: block !important;
  }
  .icon-item a {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    gap: 5px !important;
  }
  .icon-item span {
    display: block !important;
    font-size: 10px !important;
    line-height: 1 !important;
    text-transform: capitalize !important;
  }
}
`;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the old MOBILE NAVBAR TWEAKS block, up to the end of the file or the next comment
  const regex = /\/\* --- MOBILE NAVBAR TWEAKS --- \*\/[\s\S]*/;
  if (regex.test(content)) {
    content = content.replace(regex, newMobileFix);
  } else {
    content += '\n' + newMobileFix;
  }
  fs.writeFileSync(filePath, content);
});

console.log('Successfully updated mobile media query in all CSS files.');
