/* =========================================
   MCGS - Project Data Layer
   Shared between main site and admin panel
   ========================================= */

let projectsData = [];

/**
 * Get text from a multilingual field, with FR fallback
 */
function getText(field, lang) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[lang] || field.fr || field.en || '';
}

/**
 * Load projects from JSON file, with localStorage override for admin preview
 */
async function loadProjects() {
  // Check localStorage first (admin preview)
  const stored = localStorage.getItem('mcgs_projects');
  if (stored) {
    try {
      projectsData = JSON.parse(stored);
      return projectsData;
    } catch (e) {
      // fall through to fetch
    }
  }

  try {
    const resp = await fetch('projects-data.json');
    if (resp.ok) {
      projectsData = await resp.json();
    }
  } catch (e) {
    console.warn('Could not load projects-data.json, using empty array');
    projectsData = [];
  }
  return projectsData;
}

/**
 * Get visible projects sorted by order
 */
function getVisibleProjects() {
  return projectsData
    .filter(p => p.visible !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

/**
 * Render project navigation tabs
 */
function renderProjectNav(projects, lang) {
  const nav = document.getElementById('projectNav');
  if (!nav) return;
  nav.innerHTML = '';

  projects.forEach((proj, i) => {
    const btn = document.createElement('button');
    btn.className = 'project-nav-btn' + (i === 0 ? ' active' : '');
    btn.dataset.target = proj.id;
    const span = document.createElement('span');
    span.textContent = getText(proj.navLabel, lang);
    btn.appendChild(span);
    btn.addEventListener('click', () => {
      nav.querySelectorAll('.project-nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.case-study').forEach(c => c.classList.remove('active'));
      const target = document.getElementById(proj.id);
      if (target) target.classList.add('active');
    });
    nav.appendChild(btn);
  });
}

/**
 * Build a single case study HTML element
 */
function buildCaseStudy(proj, lang, isActive) {
  const div = document.createElement('div');
  div.className = 'case-study' + (isActive ? ' active' : '');
  div.id = proj.id;

  // Header
  const header = document.createElement('div');
  header.className = 'case-header';

  const headerLeft = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.textContent = getText(proj.title, lang);
  headerLeft.appendChild(h3);

  if (proj.status) {
    const statusDiv = document.createElement('div');
    statusDiv.className = 'case-status';
    statusDiv.innerHTML = '<span class="status-dot"></span> <span>' + getText(proj.status, lang) + '</span>';
    headerLeft.appendChild(statusDiv);
  }

  header.appendChild(headerLeft);

  if (proj.price) {
    const priceDiv = document.createElement('div');
    priceDiv.className = 'case-value';
    priceDiv.textContent = proj.price;
    header.appendChild(priceDiv);
  }

  div.appendChild(header);

  // Gallery
  if (proj.images && proj.images.length > 0) {
    const gallery = document.createElement('div');
    gallery.className = 'case-gallery';
    proj.images.forEach(img => {
      const imgEl = document.createElement('img');
      imgEl.src = img.src;
      imgEl.alt = img.alt || '';
      imgEl.loading = 'lazy';
      gallery.appendChild(imgEl);
    });
    div.appendChild(gallery);
  }

  // Meta
  if (proj.infoFields && proj.infoFields.length > 0) {
    const meta = document.createElement('div');
    meta.className = 'case-meta';
    proj.infoFields.forEach(field => {
      const item = document.createElement('div');
      item.className = 'meta-item';
      item.innerHTML =
        '<span class="meta-label">' + getText(field.label, lang) + '</span>' +
        '<span class="meta-value">' + getText(field.value, lang) + '</span>';
      meta.appendChild(item);
    });
    div.appendChild(meta);
  }

  // Body
  const body = document.createElement('div');
  body.className = 'case-body';
  let hasBody = false;

  // Scope
  if (proj.scope && getText(proj.scope, lang)) {
    hasBody = true;
    const section = document.createElement('div');
    section.className = 'case-section';
    const scopeLabels = { fr: 'Étendue des Travaux', en: 'Scope of Work', ar: 'نطاق العمل' };
    section.innerHTML =
      '<h4>' + (scopeLabels[lang] || scopeLabels.fr) + '</h4>' +
      '<p>' + getText(proj.scope, lang) + '</p>';
    body.appendChild(section);
  }

  // Deliverables
  if (proj.deliverables && proj.deliverables.length > 0) {
    hasBody = true;
    const section = document.createElement('div');
    section.className = 'case-section';
    const delLabels = { fr: 'Livrables Clés', en: 'Key Deliverables', ar: 'المخرجات الرئيسية' };
    let html = '<h4>' + (delLabels[lang] || delLabels.fr) + '</h4><ul>';
    proj.deliverables.forEach(d => {
      html += '<li>' + getText(d, lang) + '</li>';
    });
    html += '</ul>';
    section.innerHTML = html;
    body.appendChild(section);
  }

  // Result
  if (proj.result && getText(proj.result, lang)) {
    hasBody = true;
    const section = document.createElement('div');
    section.className = 'case-section';
    const resLabels = { fr: 'Résultat', en: 'Result', ar: 'النتيجة' };
    section.innerHTML =
      '<h4>' + (resLabels[lang] || resLabels.fr) + '</h4>' +
      '<p>' + getText(proj.result, lang) + '</p>';
    body.appendChild(section);
  }

  // Custom sections
  if (proj.customSections && proj.customSections.length > 0) {
    proj.customSections.forEach(cs => {
      hasBody = true;
      const section = document.createElement('div');
      section.className = 'case-section';
      section.innerHTML =
        '<h4>' + getText(cs.title, lang) + '</h4>' +
        '<p>' + getText(cs.content, lang) + '</p>';
      body.appendChild(section);
    });
  }

  if (hasBody) {
    div.appendChild(body);
  }

  return div;
}

/**
 * Render all projects into the container
 */
function renderProjects(lang) {
  const container = document.getElementById('projectsContainer');
  if (!container) return;

  lang = lang || currentLang || 'fr';
  const projects = getVisibleProjects();

  // Clear existing
  container.innerHTML = '';

  // Render nav
  renderProjectNav(projects, lang);

  // Render case studies
  projects.forEach((proj, i) => {
    container.appendChild(buildCaseStudy(proj, lang, i === 0));
  });
}
