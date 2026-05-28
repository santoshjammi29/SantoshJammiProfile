const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const destDir = path.join(srcDir, 'public-resume');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// 1. Read index.html
const htmlContent = fs.readFileSync(path.join(srcDir, 'index.html'), 'utf8');
const lines = htmlContent.split('\n');

// 2. Extract Head & Header (lines 1 to 55)
const headHeader = lines.slice(0, 55).join('\n');

// 3. Extract Resume Section (lines 87 to 456)
const resumeSection = lines.slice(86, 456).join('\n');

// 4. Construct standalone HTML
const standaloneHtml = `
${headHeader}

  <!-- ── MAIN CONTENT ───────────────────────────────────────────── -->
  <main class="main-content" style="max-width: 950px; padding: 24px 16px 80px;">
    
    ${resumeSection}
    
  </main>

  <!-- ── TOAST NOTIFICATION ─────────────────────────────────────── -->
  <div class="toast" id="toast" role="status" aria-live="polite"></div>

  <!-- ── BACK TO TOP ───────────────────────────────────────────── -->
  <button id="back-to-top" class="back-to-top-btn" aria-label="Back to top" title="Go to top">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
  </button>

  <script src="app.js"></script>
</body>
</html>
`;

// 6. Write index.html to public-resume
fs.writeFileSync(path.join(destDir, 'index.html'), standaloneHtml.trim() + '\n', 'utf8');
console.log('✅ Generated public-resume/index.html');

// 6. Copy style.css to public-resume
const cssContent = fs.readFileSync(path.join(srcDir, 'style.css'), 'utf8');
fs.writeFileSync(path.join(destDir, 'style.css'), cssContent, 'utf8');
console.log('✅ Copied style.css to public-resume/');

// 7. Copy app.js to public-resume
const jsContent = fs.readFileSync(path.join(srcDir, 'app.js'), 'utf8');
fs.writeFileSync(path.join(destDir, 'app.js'), jsContent, 'utf8');
console.log('✅ Copied app.js to public-resume/');

// 8. Copy resume.pdf if it exists in root
const pdfPath = path.join(srcDir, 'resume.pdf');
if (fs.existsSync(pdfPath)) {
  fs.copyFileSync(pdfPath, path.join(destDir, 'resume.pdf'));
  console.log('✅ Copied resume.pdf to public-resume/');
} else {
  console.log('⚠️ resume.pdf not found in root. Please place your exported resume.pdf in the root to package it.');
}
