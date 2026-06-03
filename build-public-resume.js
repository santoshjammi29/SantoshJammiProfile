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

// 2. Extract Head & Header dynamically
let headerEndIndex = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('</header>')) {
    headerEndIndex = i;
    break;
  }
}
if (headerEndIndex === -1) {
  console.error("❌ Error: Could not find </header> tag in index.html");
  process.exit(1);
}
const headHeader = lines.slice(0, headerEndIndex + 1).join('\n');

// 3. Extract Resume Section dynamically
let resumeStartIndex = -1;
let resumeEndIndex = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('id="panel-resume"')) {
    resumeStartIndex = i;
  }
  if (lines[i].includes('id="panel-linkedin"')) {
    for (let j = i - 1; j >= 0; j--) {
      if (lines[j].trim() === '</section>') {
        resumeEndIndex = j;
        break;
      }
    }
    break;
  }
}
if (resumeStartIndex === -1 || resumeEndIndex === -1) {
  console.error(`❌ Error: Could not locate resume section boundaries in index.html (start: ${resumeStartIndex}, end: ${resumeEndIndex})`);
  process.exit(1);
}
const resumeSection = lines.slice(resumeStartIndex, resumeEndIndex + 1).join('\n');

// 4. Construct standalone HTML
const standaloneHtml = `
${headHeader}

  <!-- ── MAIN CONTENT ───────────────────────────────────────────── -->
  <main class="main-content" style="max-width: 950px; padding: 24px 16px 80px;">
    
    ${resumeSection}
    
  </main>

  <!-- ── FOOTER ─────────────────────────────────────────────────── -->
  <footer class="site-footer">
    <div class="footer-inner">
      <p class="footer-row footer-built-by">
        Built by <strong>Santosh Jammi</strong> — Senior Data Engineer &rarr; Principal Data Architect
      </p>
      <p class="footer-row">
        TCS EU BFSI <span class="separator">•</span> LTIMindtree <span class="separator">•</span> Infosys <span class="separator">•</span> Microsoft Fabric DP-600 <span class="separator">•</span> Azure DP-203 <span class="separator">•</span> PL-300
      </p>
      <p class="footer-row">
        Medallion Architecture <span class="separator">•</span> Delta Lake <span class="separator">•</span> GDPR <span class="separator">•</span> FinOps <span class="separator">•</span> Databricks <span class="separator">•</span> Azure Synapse <span class="separator">•</span> Microsoft Fabric
      </p>
    </div>
  </footer>

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

// 9. Copy Word CV (.docx) if it exists in root
const docxPath = path.join(srcDir, 'Santosh_Jammi_CV.docx');
if (fs.existsSync(docxPath)) {
  fs.copyFileSync(docxPath, path.join(destDir, 'Santosh_Jammi_CV.docx'));
  console.log('✅ Copied Santosh_Jammi_CV.docx to public-resume/');
} else {
  console.log('⚠️ Santosh_Jammi_CV.docx not found in root. Run generate_cv.py first.');
}
