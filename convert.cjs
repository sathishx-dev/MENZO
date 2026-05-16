const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'MENZO-main');
const destDir = path.join(__dirname, 'src', 'pages');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const htmlFiles = fs.readdirSync(sourceDir).filter(file => file.endsWith('.html'));

function styleToObject(styleStr) {
  const styles = {};
  styleStr.split(';').forEach(s => {
    const [key, value] = s.split(':');
    if (key && value) {
      const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      styles[camelKey] = value.trim();
    }
  });
  return JSON.stringify(styles);
}

htmlFiles.forEach(file => {
  let content = fs.readFileSync(path.join(sourceDir, file), 'utf-8');
  
  const cssMatches = [...content.matchAll(/<link rel="stylesheet" href="([^"]+\.css)"/g)];
  const cssFiles = cssMatches.map(m => m[1]).filter(f => !f.startsWith('http'));

  let bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let bodyContent = bodyMatch ? bodyMatch[1] : content;

  // Remove script tags from body
  bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  bodyContent = bodyContent.replace(/class=/g, 'className=');
  bodyContent = bodyContent.replace(/for=/g, 'htmlFor=');
  
  const tagsToClose = ['img', 'input', 'br', 'hr', 'source', 'meta', 'link'];
  tagsToClose.forEach(tag => {
    const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'gi');
    bodyContent = bodyContent.replace(regex, `<${tag}$1 />`);
  });

  bodyContent = bodyContent.replace(/style="([^"]*)"/g, (match, p1) => {
    return `style={${styleToObject(p1)}}`;
  });

  bodyContent = bodyContent.replace(/href="([^"]+)\.html"/g, (match, p1) => {
    return `href="/${p1}"`;
  });
  
  // Remove onclick attributes as they will be handled via global delegation
  bodyContent = bodyContent.replace(/onclick="[^"]*"/gi, '');

  
  const componentName = file.replace('.html', '').charAt(0).toUpperCase() + file.replace('.html', '').slice(1).replace(/[^a-zA-Z0-9]/g, '');

  const jsxFile = `
import React, { useEffect } from 'react';

export default function ${componentName}() {
  useEffect(() => {
    const cssFiles = ${JSON.stringify(cssFiles)};
    const links = cssFiles.map(file => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/' + file;
      document.head.appendChild(link);
      return link;
    });

    return () => {
      links.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, []);

  return (
    <>
      ${bodyContent}
    </>
  );
}
`;

  fs.writeFileSync(path.join(destDir, `${componentName}.jsx`), jsxFile);
  console.log(`Converted ${file} to ${componentName}.jsx`);
});
