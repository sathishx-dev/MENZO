const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.css'));

const overrideCSS = `
/* --- DESKTOP NAVBAR LAYOUT FIX --- */
@media (min-width: 769px) {
  .navbar nav, nav.nav-wrapper {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    flex-wrap: nowrap !important;
    padding: 12px 30px !important;
    gap: 20px !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  .logo {
    flex-shrink: 0 !important;
  }

  .logo img {
    width: 75px !important;
    height: auto !important;
  }

  nav ul.nav-links {
    display: flex !important;
    gap: 15px !important;
    margin: 0 !important;
    padding: 0 !important;
    align-items: center !important;
    white-space: nowrap !important;
    flex-shrink: 0 !important;
  }

  .nav-center {
    flex: 1 1 auto !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    margin: 0 !important;
  }

  .search-box {
    position: relative !important;
    display: flex !important;
    width: 100% !important;
    max-width: 400px !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .search-box input[type="text"] {
    width: 100% !important;
    padding: 10px 40px 10px 20px !important;
    border-radius: 30px !important;
    border: 1px solid var(--input-border) !important;
    box-sizing: border-box !important;
  }

  .search-box .clear-btn {
    position: absolute !important;
    right: 15px !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
  }

  .icon-links {
    display: flex !important;
    gap: 20px !important;
    align-items: center !important;
    margin: 0 !important;
    padding: 0 !important;
    flex-shrink: 0 !important;
  }

  .icon-item {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    gap: 8px !important;
    cursor: pointer !important;
  }

  .icon-item a {
    display: flex !important;
    align-items: center !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .icon-item span {
    margin: 0 !important;
    white-space: nowrap !important;
    font-size: 14px !important;
  }
}
`;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('DESKTOP NAVBAR LAYOUT FIX')) {
    content += '\n' + overrideCSS;
    fs.writeFileSync(filePath, content);
  }
});

console.log('Successfully appended media query overrides for Navbar.');
