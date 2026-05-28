/* ══════════════════════════════════════════════════════════════
   SANTOSH JAMMI PROFILE — APP LOGIC
   ══════════════════════════════════════════════════════════════ */

/* ── DATA ───────────────────────────────────────────────────── */
const COMPANIES = [
  {
    name: "Microsoft India Development Center",
    hub: "Hyderabad & Bangalore",
    domain: "tech",
    domainLabel: "Cloud Platform",
    desc: "Epicenter for Azure and Fabric engineering. $17.5B investment. Demands architects who understand OneLake design, capacity unit optimization, and Fabric semantic modeling at planetary scale."
  },
  {
    name: "JPMorgan Chase & Co.",
    hub: "Bangalore & Hyderabad",
    domain: "bfsi",
    domainLabel: "BFSI",
    desc: "Heavily invested in Azure data lakes and Databricks for Securities Services Data Platform. Demands deep Unity Catalog governance and strict financial regulatory compliance architecture."
  },
  {
    name: "Novartis India AI & Data Centre",
    hub: "Hyderabad",
    domain: "health",
    domainLabel: "Healthcare",
    desc: "Transitioning to Azure AI Foundry, Snowflake, and Databricks. Focus on commercial performance reporting, MDM integrations, and clinical data lakes requiring rigorous governance."
  },
  {
    name: "Walmart Global Tech",
    hub: "Bangalore",
    domain: "retail",
    domainLabel: "Retail Tech",
    desc: "Drives technology for the world's largest retailer using Azure Cosmos, Databricks, and massive data lakes. Focus on real-time inventory streaming with highly parallelized fault-tolerant pipelines."
  },
  {
    name: "AstraZeneca",
    hub: "Hyderabad",
    domain: "health",
    domainLabel: "Life Sciences",
    desc: "Complex clinical data platforms and AI-driven drug discovery analytics. Demands Azure architectures emphasizing HIPAA compliance, metadata management, and secure multi-region data sharing."
  },
  {
    name: "AT&T Global Capability Center",
    hub: "Hyderabad & Bangalore",
    domain: "tech",
    domainLabel: "Telecom",
    desc: "Utilizing Azure OpenAI and expanding Azure data platform capabilities. Requires deep understanding of hybrid cloud and network-isolated data architectures."
  },
  {
    name: "Cognizant (Enterprise AI CoE)",
    hub: "Hyderabad & Bangalore",
    domain: "consult",
    domainLabel: "Consulting",
    desc: "Developing enterprise-scale Azure AI deployments and data platform modernizations. Requires architectural leadership guiding Fortune 500 clients through legacy Synapse-to-Fabric migrations."
  },
  {
    name: "LTIMindtree",
    hub: "Bangalore & Hyderabad",
    domain: "consult",
    domainLabel: "IT Services",
    desc: "Scaling solutions using Microsoft Fabric Real-Time Intelligence. Demands expertise in large-scale data modernization, stream analytics, and Direct Lake modeling across hybrid environments."
  },
  {
    name: "Tech Mahindra (Data & AI CoE)",
    hub: "Hyderabad & Bangalore",
    domain: "consult",
    domainLabel: "Digital Transformation",
    desc: "Featured Microsoft Fabric launch partner. Developing unified workbenches for accelerated platform adoption. Needs architects who can deploy Scale at Speed methodology globally."
  },
  {
    name: "HCLTech",
    hub: "Noida, Bangalore & Hyderabad",
    domain: "consult",
    domainLabel: "Enterprise Engineering",
    desc: "Award-winning global technology company focusing on Azure application modernization and AI automation. Requires platform engineering and advanced FinOps to optimize client cloud expenditure."
  },
  {
    name: "Tredence Inc.",
    hub: "Bengaluru & Hyderabad",
    domain: "consult",
    domainLabel: "Data & AI",
    desc: "Specialized data consultancy partnering with global GCCs. Focuses on retail and BFSI modernization using Microsoft Fabric and Databricks, requiring domain-led outcome-driven design."
  },
  {
    name: "HSBC Technology India",
    hub: "Hyderabad",
    domain: "bfsi",
    domainLabel: "BFSI",
    desc: "Driving global insurance and investment banking digital transformations. Requires highly secure ring-fenced Azure architectures with strict Row-Level Security and international data sovereignty."
  },
  {
    name: "Sanofi",
    hub: "Hyderabad",
    domain: "health",
    domainLabel: "Pharma",
    desc: "Global pharmacovigilance and clinical operations. Demands robust data lakes on Azure Health Data Services integrating FHIR and HL7 protocols with modern Delta Lake architectures."
  },
  {
    name: "Optum (UnitedHealth Group)",
    hub: "Hyderabad",
    domain: "health",
    domainLabel: "Health-Tech",
    desc: "Designing HIPAA-compliant data lakes natively on Azure. Requires expertise in massive-scale data layer consolidation, population health analytics, and value-based care contract reporting."
  },
  {
    name: "UBS India",
    hub: "Hyderabad",
    domain: "bfsi",
    domainLabel: "BFSI",
    desc: "Investment banking technology and risk management systems. Prioritizes ultra-low latency data pipelines, idempotent processing, and resilient disaster recovery frameworks."
  }
];

const ATS_CATEGORIES = [
  {
    name: "Core Architecture Frameworks",
    signal: "Signals the ability to conceptualize and structure enterprise data systems at macro level",
    keywords: [
      "Medallion Architecture","Data Mesh","Event-Driven Architecture","Kimball Dimensional Modeling",
      "Inmon Methodology","Data Vault 2.0","Zero-Copy Architecture","Lambda Architecture","Kappa Architecture",
      "Data Lakehouse","Enterprise Data Warehouse","Master Data Management"
    ]
  },
  {
    name: "Microsoft Fabric & Azure Platform",
    signal: "Signals premium proficiency in latest Microsoft SaaS data platforms — directly justifies the Fabric Premium",
    keywords: [
      "Microsoft Fabric","OneLake","OneLake Shortcuts","Direct Lake Mode","Capacity Unit (CU) Optimization",
      "F64 Capacity Planning","Azure Synapse Analytics","Azure Data Factory","ADF","SQL Analytics Endpoint",
      "Azure Data Lake Storage Gen2","ADLS Gen2","Azure Purview","Power BI","Fabric Lakehouse",
      "Fabric Warehouse","Real-Time Intelligence","DP-600","DP-203","PL-300"
    ]
  },
  {
    name: "Advanced Data Processing",
    signal: "Proves deep understanding of transactional data lakes, cluster optimization, and fault-tolerant ingestion",
    keywords: [
      "Idempotent Pipeline Design","SCD Type 2","Slowly Changing Dimensions","ACID Compliance",
      "Delta Lake","Liquid Clustering","Z-Ordering","Spark SQL Orchestration","Copy-On-Write","CoW",
      "MERGE INTO","Delta Transaction Log","Time Travel","OPTIMIZE","VACUUM","Parquet","Medallion Bronze Silver Gold",
      "Structured Streaming","Photon Engine"
    ]
  },
  {
    name: "Databricks & Spark Architecture",
    signal: "Positions candidate as high-level orchestrator — governing clusters and designing platform integration",
    keywords: [
      "Databricks","Unity Catalog","PySpark","Apache Spark","Databricks Photon","Auto-scaling",
      "Spot Instances","Databricks Unit (DBU)","Cluster Policies","Driver Node","Worker Node",
      "Spark Structured Streaming","Hilbert Curves","Z-Curves","ABFS Endpoint","Secret Scope",
      "Azure Key Vault","Service Principal","External Locations","Managed Tables"
    ]
  },
  {
    name: "Governance, Security & FinOps",
    signal: "Indicates a leadership profile capable of protecting enterprise from regulatory fines and runaway cloud costs",
    keywords: [
      "Cloud FinOps","Row-Level Security","RLS","GDPR Compliance","Data Sovereignty","Data Lineage",
      "CI/CD Pipeline Automation","Infrastructure-as-Code","IaC","Azure DevOps","YAML Pipelines",
      "Schema Evolution","Data Quality","HIPAA","Data Governance","Column-Level Security",
      "Entra ID","Role-Based Access Control","RBAC","FHIR","HL7"
    ]
  },
  {
    name: "Architecture Seniority Signals",
    signal: "Keywords that algorithmically signal Principal/Lead seniority rather than execution-level roles",
    keywords: [
      "Principal Architect","Lead Technical Consultant","Enterprise Architect","Platform Engineering",
      "Cloud Architecture","FinOps Governance","Capacity Planning","Multi-Region Architecture",
      "Disaster Recovery","High Availability","SLA","99.9% Uptime","Cross-Functional Leadership",
      "Technical Roadmap","Architecture Review Board","Design Patterns"
    ]
  }
];

/* ── TABS ────────────────────────────────────────────────────── */
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  if (!tabs.length) return;
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      // Deactivate all
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      document.querySelectorAll('.tab-panel').forEach(p => { p.classList.remove('active'); p.hidden = true; });
      // Activate selected
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const panel = document.getElementById(`panel-${target}`);
      if (panel) {
        panel.classList.add('active');
        panel.hidden = false;
      }
    });
  });
}

/* ── COMPANY CARDS ───────────────────────────────────────────── */
const DOMAIN_CLASSES = {
  bfsi: 'dom-bfsi', health: 'dom-health', tech: 'dom-tech',
  retail: 'dom-retail', consult: 'dom-consult'
};

function buildCompanyCards(filter = 'all') {
  const grid = document.getElementById('comp-grid');
  if (!grid) return;
  const filtered = filter === 'all' ? COMPANIES : COMPANIES.filter(c => c.domain === filter);
  grid.innerHTML = filtered.map(c => `
    <div class="comp-card" data-domain="${c.domain}">
      <div class="comp-card-top">
        <div>
          <div class="comp-name">${c.name}</div>
          <div class="comp-hub">📍 ${c.hub}</div>
        </div>
        <span class="comp-domain-badge ${DOMAIN_CLASSES[c.domain] || ''}">${c.domainLabel}</span>
      </div>
      <div class="comp-desc">${c.desc}</div>
    </div>
  `).join('');
}

function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      buildCompanyCards(btn.dataset.filter);
    });
  });
}

/* ── ATS CATEGORIES ──────────────────────────────────────────── */
function buildATSCategories() {
  const container = document.getElementById('ats-categories');
  if (!container) return;
  container.innerHTML = ATS_CATEGORIES.map((cat, ci) => `
    <div class="ats-cat-block">
      <div class="ats-cat-header">
        <div class="ats-cat-name">${cat.name}</div>
        <div class="ats-cat-signal">${cat.signal}</div>
        <button class="btn-copy-all" onclick="copyAllKeywords(${ci})">Copy All</button>
      </div>
      <div class="ats-chips" id="ats-cat-${ci}">
        ${cat.keywords.map(kw => `<span class="ats-chip" onclick="copyKeyword(this, '${kw.replace(/'/g, "\\'")}')">${kw}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function copyKeyword(el, kw) {
  navigator.clipboard.writeText(kw).then(() => {
    showToast(`✅ Copied: ${kw}`);
    el.style.background = 'rgba(16,185,129,0.25)';
    el.style.borderColor = 'rgba(16,185,129,0.5)';
    el.style.color = '#34d399';
    setTimeout(() => {
      el.style.background = '';
      el.style.borderColor = '';
      el.style.color = '';
    }, 1500);
  });
}

function copyAllKeywords(catIndex) {
  const kws = ATS_CATEGORIES[catIndex].keywords.join(', ');
  navigator.clipboard.writeText(kws).then(() => {
    showToast(`✅ Copied ${ATS_CATEGORIES[catIndex].keywords.length} keywords`);
  });
}

/* ── ATS CHECKER ─────────────────────────────────────────────── */
function checkATS() {
  const text = document.getElementById('ats-input').value.toLowerCase();
  if (!text.trim()) { showToast('⚠️ Please paste your resume text first'); return; }

  const allKws = ATS_CATEGORIES.flatMap(c => c.keywords);
  const found = allKws.filter(kw => text.includes(kw.toLowerCase()));
  const missing = allKws.filter(kw => !text.includes(kw.toLowerCase()));
  const score = Math.round((found.length / allKws.length) * 100);

  const resultsEl = document.getElementById('ats-results');
  resultsEl.hidden = false;
  resultsEl.innerHTML = `
    <div class="ats-result-summary">
      <div class="result-stat result-score"><span class="result-num">${score}%</span><span class="result-label">ATS Score</span></div>
      <div class="result-stat result-found"><span class="result-num">${found.length}</span><span class="result-label">Found</span></div>
      <div class="result-stat result-missing"><span class="result-num">${missing.length}</span><span class="result-label">Missing</span></div>
    </div>
    <div style="margin-bottom:10px;">
      <div style="font-size:0.82rem;font-weight:700;color:var(--text-secondary);margin-bottom:8px;">✅ Present in your resume:</div>
      <div class="ats-chips">${found.map(kw => `<span class="ats-chip found">${kw}</span>`).join('')}</div>
    </div>
    <div>
      <div style="font-size:0.82rem;font-weight:700;color:var(--text-secondary);margin-bottom:8px;">❌ Missing — add these:</div>
      <div class="ats-chips">${missing.map(kw => `<span class="ats-chip missing">${kw}</span>`).join('')}</div>
    </div>
  `;

  // Also highlight chips in main categories
  ATS_CATEGORIES.forEach((cat, ci) => {
    const chips = document.querySelectorAll(`#ats-cat-${ci} .ats-chip`);
    chips.forEach(chip => {
      const kw = chip.textContent;
      chip.classList.remove('found', 'missing');
      chip.classList.add(text.includes(kw.toLowerCase()) ? 'found' : 'missing');
    });
  });
}

/* ── COPY UTILITIES ──────────────────────────────────────────── */
function copyText(el) {
  const text = el.dataset.copy;
  navigator.clipboard.writeText(text).then(() => showToast('✅ Copied to clipboard!'));
}

function copyBlock(id) {
  const el = document.getElementById(id);
  const text = el.innerText.replace(/Click to copy\n?/gi, '').trim();
  navigator.clipboard.writeText(text).then(() => showToast('✅ Copied to clipboard!'));
}

function copyResume() {
  const el = document.getElementById('resume-content');
  const text = el.innerText;
  navigator.clipboard.writeText(text).then(() => showToast('✅ Resume text copied!'));
}

/* ── PRINT ───────────────────────────────────────────────────── */
function printResume() {
  window.print();
}

/* ── TOAST ───────────────────────────────────────────────────── */
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

/* ── RESUME NAVIGATION & SCROLL SPY ───────────────────────────── */
function initResumeNav() {
  const dots = document.querySelectorAll('.nav-dot');
  const sections = document.querySelectorAll('.resume-section');
  
  if (!dots.length || !sections.length) return;
  
  // Smooth scroll on click
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = dot.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        // Offset for sticky headers/tabs
        const offset = 160; 
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetEl.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Scroll spy to highlight active section
  function updateScrollSpy() {
    let activeSectionId = null;
    const scrollPos = window.scrollY || window.pageYOffset;
    const offset = 180; // offset for tab-nav and top-bar
    
    sections.forEach(section => {
      const top = section.offsetTop - offset;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        activeSectionId = section.getAttribute('id');
      }
    });
    
    // Fallback: if we are at the very bottom of the page, activate the last section
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 10) {
      activeSectionId = sections[sections.length - 1].getAttribute('id');
    }
    
    // Fallback: if we are at the very top, activate the first section
    if (scrollPos < sections[0].offsetTop - offset) {
      activeSectionId = sections[0].getAttribute('id');
    }
    
    if (activeSectionId) {
      dots.forEach(dot => {
        if (dot.getAttribute('data-target') === activeSectionId) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  }
  
  window.addEventListener('scroll', updateScrollSpy);
  updateScrollSpy(); // initial run
}

/* ── INTERACTIVE SKILLS TICKER ───────────────────────────────── */
let tickerData = [];
let currentSpeedMultiplier = 0.5; // slow down by default to fit user request
let isTickerPaused = false;
let isExplicitlyPaused = false;
let isHoveredPaused = false;

function initSkillsTicker() {
  const tickerWrap = document.getElementById('skills-ticker');
  const rows = document.querySelectorAll('.ticker-row');
  const pauseBtn = document.getElementById('ticker-pause');
  const slowerBtn = document.getElementById('ticker-slower');
  const fasterBtn = document.getElementById('ticker-faster');
  
  if (!tickerWrap || !rows.length) return;
  
  // Initialize positions and measurements for each row
  tickerData = Array.from(rows).map((row, index) => {
    // Disable standard CSS animation
    row.style.animation = 'none';
    
    const isReverse = index % 2 === 1; // Row 2 and 4 are reverse
    const halfWidth = row.scrollWidth / 2;
    
    // Initial translation offset (reverse rows start shifted)
    let x = isReverse ? -halfWidth : 0;
    
    // Set initial transform
    row.style.transform = `translateX(${x}px)`;
    
    return {
      element: row,
      isReverse,
      halfWidth,
      x,
      isDragging: false,
      dragStartX: 0,
      dragStartTranslateX: 0
    };
  });
  
  // Animation Loop
  function tick() {
    if (!isTickerPaused) {
      tickerData.forEach(data => {
        if (data.isDragging) return;
        
        // Base row speeds: rows 1 and 2 are slightly faster, rows 3 and 4 are slower
        let baseSpeed = 0.4;
        if (data.element.classList.contains('ticker-row-3')) baseSpeed = 0.3;
        if (data.element.classList.contains('ticker-row-4')) baseSpeed = 0.25;
        
        const delta = baseSpeed * currentSpeedMultiplier;
        
        if (data.isReverse) {
          data.x += delta;
          if (data.x >= 0) {
            data.x -= data.halfWidth;
          }
        } else {
          data.x -= delta;
          if (data.x <= -data.halfWidth) {
            data.x += data.halfWidth;
          }
        }
        
        data.element.style.transform = `translateX(${data.x}px)`;
      });
    }
    requestAnimationFrame(tick);
  }
  
  // Start animation loop
  requestAnimationFrame(tick);
  
  // Resize Handler to update widths
  window.addEventListener('resize', () => {
    tickerData.forEach(data => {
      data.halfWidth = data.element.scrollWidth / 2;
    });
  });
  
  // Drag-to-Scroll Setup
  tickerData.forEach(data => {
    const el = data.element;
    
    const startDrag = (clientX) => {
      data.isDragging = true;
      data.dragStartX = clientX;
      data.dragStartTranslateX = data.x;
      el.style.cursor = 'grabbing';
      el.style.transition = 'none';
      el.classList.add('dragging');
    };
    
    const moveDrag = (clientX) => {
      if (!data.isDragging) return;
      const dx = clientX - data.dragStartX;
      let newX = data.dragStartTranslateX + dx;
      
      // Wrap around while dragging so they never see blank spaces
      while (newX <= -data.halfWidth) {
        newX += data.halfWidth;
      }
      while (newX > 0) {
        newX -= data.halfWidth;
      }
      
      data.x = newX;
      el.style.transform = `translateX(${data.x}px)`;
    };
    
    const endDrag = () => {
      if (!data.isDragging) return;
      data.isDragging = false;
      el.style.cursor = '';
      el.classList.remove('dragging');
    };
    
    // Mouse Events
    el.addEventListener('mousedown', (e) => {
      startDrag(e.clientX);
    });
    
    window.addEventListener('mousemove', (e) => {
      moveDrag(e.clientX);
    });
    
    window.addEventListener('mouseup', () => {
      endDrag();
    });
    
    // Touch Events for mobile support
    el.addEventListener('touchstart', (e) => {
      startDrag(e.touches[0].clientX);
    }, { passive: true });
    
    el.addEventListener('touchmove', (e) => {
      moveDrag(e.touches[0].clientX);
    }, { passive: true });
    
    el.addEventListener('touchend', () => {
      endDrag();
    });
  });
  
  // Play/Pause / Speed Controls
  function updatePauseUI() {
    isTickerPaused = isExplicitlyPaused || isHoveredPaused;
    if (pauseBtn) {
      pauseBtn.textContent = isExplicitlyPaused ? '▶' : '⏸';
      pauseBtn.classList.toggle('active', isExplicitlyPaused);
    }
  }
  
  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      isExplicitlyPaused = !isExplicitlyPaused;
      updatePauseUI();
      showToast(isExplicitlyPaused ? '⏸ Ticker Paused' : '▶ Ticker Playing');
    });
  }
  
  if (slowerBtn) {
    slowerBtn.addEventListener('click', () => {
      currentSpeedMultiplier = Math.max(0.1, currentSpeedMultiplier - 0.15);
      showToast(`🐢 Ticker Speed: ${Math.round(currentSpeedMultiplier * 100)}%`);
    });
  }
  
  if (fasterBtn) {
    fasterBtn.addEventListener('click', () => {
      currentSpeedMultiplier = Math.min(4.0, currentSpeedMultiplier + 0.25);
      showToast(`⚡ Ticker Speed: ${Math.round(currentSpeedMultiplier * 100)}%`);
    });
  }
  
  // Hover to pause
  tickerWrap.addEventListener('mouseenter', () => {
    isHoveredPaused = true;
    updatePauseUI();
  });
  
  tickerWrap.addEventListener('mouseleave', () => {
    isHoveredPaused = false;
    updatePauseUI();
  });
}

function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  const metaColorScheme = document.getElementById('meta-color-scheme');
  
  if (!toggleBtn) return;
  
  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    
    if (metaColorScheme) {
      metaColorScheme.content = nextTheme;
    }
  });
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });
  
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ── INIT ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  buildCompanyCards();
  initFilters();
  buildATSCategories();
  initResumeNav();
  initSkillsTicker();
  initThemeToggle();
  initBackToTop();
});
