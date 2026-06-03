/* =========================================
   MCGS Admin Panel - JavaScript
   ========================================= */

const STORAGE_KEY = 'mcgs_projects';
const HASH_KEY = 'mcgs_admin_hash';

let projects = [];
let editingId = null;
let deleteTargetId = null;
let activeLangTab = 'fr';

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  initAuth();
  initTopbar();
  initLangTabs();
  initEditorButtons();
  initModal();
});

// ==============================
// AUTH
// ==============================

async function hashPassword(pw) {
  const encoder = new TextEncoder();
  const data = encoder.encode(pw);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function initAuth() {
  const storedHash = localStorage.getItem(HASH_KEY);
  const loginScreen = document.getElementById('loginScreen');
  const loginBtn = document.getElementById('loginBtn');
  const loginPassword = document.getElementById('loginPassword');
  const loginError = document.getElementById('loginError');
  const loginSetup = document.getElementById('loginSetup');
  const loginDesc = document.getElementById('loginDesc');

  if (!storedHash) {
    loginSetup.style.display = 'block';
    loginDesc.textContent = 'Set up your admin password';
    loginBtn.textContent = 'Set Password';
  }

  loginBtn.addEventListener('click', async () => {
    const pw = loginPassword.value.trim();
    if (!pw) return;

    const hash = await hashPassword(pw);

    if (!storedHash) {
      // First time setup
      localStorage.setItem(HASH_KEY, hash);
      showAdmin();
    } else if (hash === storedHash) {
      showAdmin();
    } else {
      loginError.style.display = 'block';
      loginPassword.value = '';
      setTimeout(() => { loginError.style.display = 'none'; }, 3000);
    }
  });

  loginPassword.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') loginBtn.click();
  });
}

function showAdmin() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('adminLayout').classList.add('active');
  loadProjectData();
}

// ==============================
// DATA
// ==============================

async function loadProjectData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      projects = JSON.parse(stored);
      renderSidebar();
      return;
    } catch (e) { /* fall through */ }
  }

  try {
    const resp = await fetch('projects-data.json');
    if (resp.ok) {
      projects = await resp.json();
      saveToStorage();
    }
  } catch (e) {
    projects = [];
  }
  renderSidebar();
}

function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

function getNextId() {
  const ids = projects.map(p => {
    const m = p.id.match(/\d+/);
    return m ? parseInt(m[0]) : 0;
  });
  const max = ids.length > 0 ? Math.max(...ids) : 0;
  return 'project' + (max + 1);
}

function getNextOrder() {
  if (projects.length === 0) return 1;
  return Math.max(...projects.map(p => p.order || 0)) + 1;
}

// ==============================
// SIDEBAR
// ==============================

function renderSidebar() {
  const list = document.getElementById('projectList');
  list.innerHTML = '';

  const sorted = [...projects].sort((a, b) => (a.order || 0) - (b.order || 0));

  sorted.forEach(proj => {
    const li = document.createElement('li');
    li.className = 'project-list-item' + (proj.id === editingId ? ' active' : '') + (proj.visible === false ? ' hidden-project' : '');
    li.dataset.id = proj.id;
    li.draggable = true;

    const title = proj.title ? (proj.title.fr || proj.title.en || 'Untitled') : 'Untitled';
    const visIcon = proj.visible === false ? 'fa-eye-slash' : 'fa-eye';

    li.innerHTML =
      '<span class="drag-handle"><i class="fas fa-grip-vertical"></i></span>' +
      '<span class="project-name">' + escapeHtml(title) + '</span>' +
      '<div class="item-actions">' +
        '<button class="btn-toggle-vis" title="Toggle visibility"><i class="fas ' + visIcon + '"></i></button>' +
        '<button class="btn-delete" title="Delete"><i class="fas fa-trash"></i></button>' +
      '</div>';

    // Click to edit
    li.addEventListener('click', (e) => {
      if (e.target.closest('.item-actions')) return;
      openEditor(proj.id);
    });

    // Toggle visibility
    li.querySelector('.btn-toggle-vis').addEventListener('click', (e) => {
      e.stopPropagation();
      proj.visible = proj.visible === false ? true : false;
      saveToStorage();
      renderSidebar();
      toast('Visibility toggled', 'success');
    });

    // Delete
    li.querySelector('.btn-delete').addEventListener('click', (e) => {
      e.stopPropagation();
      showDeleteModal(proj.id);
    });

    // Drag events
    li.addEventListener('dragstart', handleDragStart);
    li.addEventListener('dragover', handleDragOver);
    li.addEventListener('drop', handleDrop);
    li.addEventListener('dragend', handleDragEnd);

    list.appendChild(li);
  });
}

// Drag & Drop
let dragSrcId = null;

function handleDragStart(e) {
  dragSrcId = this.dataset.id;
  this.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function handleDrop(e) {
  e.preventDefault();
  const dropId = this.dataset.id;
  if (dragSrcId === dropId) return;

  const srcIdx = projects.findIndex(p => p.id === dragSrcId);
  const dropIdx = projects.findIndex(p => p.id === dropId);
  if (srcIdx === -1 || dropIdx === -1) return;

  // Reorder
  const [moved] = projects.splice(srcIdx, 1);
  projects.splice(dropIdx, 0, moved);

  // Reassign order values
  projects.forEach((p, i) => { p.order = i + 1; });

  saveToStorage();
  renderSidebar();
  toast('Order updated', 'success');
}

function handleDragEnd() {
  this.classList.remove('dragging');
}

// ==============================
// EDITOR
// ==============================

function openEditor(id) {
  editingId = id;
  const proj = projects.find(p => p.id === id);
  if (!proj) return;

  document.getElementById('editorEmpty').style.display = 'none';
  document.getElementById('editorCard').style.display = 'block';
  document.getElementById('editorTitle').textContent = 'Edit: ' + (proj.title ? (proj.title.fr || proj.title.en || 'Untitled') : 'Untitled');

  // Basic fields
  document.getElementById('projId').value = proj.id;
  document.getElementById('projPrice').value = proj.price || '';
  document.getElementById('projVisible').checked = proj.visible !== false;

  // Multilingual fields
  ['fr', 'en', 'ar'].forEach(lang => {
    setVal('projTitle_' + lang, getField(proj.title, lang));
    setVal('projNavLabel_' + lang, getField(proj.navLabel, lang));
    setVal('projStatus_' + lang, getField(proj.status, lang));
    setVal('projScope_' + lang, getField(proj.scope, lang));
    setVal('projResult_' + lang, getField(proj.result, lang));
  });

  // Info fields
  renderInfoFields(proj.infoFields || []);

  // Deliverables
  renderDeliverables(proj.deliverables || []);

  // Images
  renderImages(proj.images || []);

  // Update sidebar active state
  renderSidebar();

  // Reset lang tab to FR
  switchLangTab('fr');
}

function closeEditor() {
  editingId = null;
  document.getElementById('editorCard').style.display = 'none';
  document.getElementById('editorEmpty').style.display = 'flex';
  renderSidebar();
}

function saveEditor() {
  const proj = projects.find(p => p.id === editingId);
  if (!proj) return;

  proj.price = document.getElementById('projPrice').value.trim();
  proj.visible = document.getElementById('projVisible').checked;

  // Multilingual
  ['fr', 'en', 'ar'].forEach(lang => {
    if (!proj.title) proj.title = {};
    if (!proj.navLabel) proj.navLabel = {};
    if (!proj.status) proj.status = {};
    if (!proj.scope) proj.scope = {};
    if (!proj.result) proj.result = {};

    proj.title[lang] = getVal('projTitle_' + lang);
    proj.navLabel[lang] = getVal('projNavLabel_' + lang);
    proj.status[lang] = getVal('projStatus_' + lang);
    proj.scope[lang] = getVal('projScope_' + lang);
    proj.result[lang] = getVal('projResult_' + lang);
  });

  // Info fields
  proj.infoFields = collectInfoFields();

  // Deliverables
  proj.deliverables = collectDeliverables();

  // Images
  proj.images = collectImages();

  saveToStorage();
  renderSidebar();
  document.getElementById('editorTitle').textContent = 'Edit: ' + (proj.title.fr || proj.title.en || 'Untitled');
  toast('Project saved', 'success');
}

// ==============================
// REPEATABLE: INFO FIELDS
// ==============================

function renderInfoFields(fields) {
  const container = document.getElementById('infoFieldsList');
  container.innerHTML = '';
  fields.forEach((field, i) => {
    container.appendChild(createInfoFieldItem(field, i));
  });
}

function createInfoFieldItem(field, index) {
  const item = document.createElement('div');
  item.className = 'repeatable-item';
  item.dataset.index = index;

  const fieldsDiv = document.createElement('div');
  fieldsDiv.className = 'repeatable-fields';

  // Label row
  const labelRow = document.createElement('div');
  labelRow.style.cssText = 'display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;';
  ['fr', 'en', 'ar'].forEach(lang => {
    const inp = document.createElement('input');
    inp.type = 'text';
    inp.placeholder = 'Label (' + lang.toUpperCase() + ')';
    inp.value = getField(field.label, lang);
    inp.className = 'info-label-' + lang;
    if (lang === 'ar') inp.dir = 'rtl';
    labelRow.appendChild(inp);
  });
  fieldsDiv.appendChild(labelRow);

  // Value row
  const valueRow = document.createElement('div');
  valueRow.style.cssText = 'display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;';
  ['fr', 'en', 'ar'].forEach(lang => {
    const inp = document.createElement('input');
    inp.type = 'text';
    inp.placeholder = 'Value (' + lang.toUpperCase() + ')';
    inp.value = getField(field.value, lang);
    inp.className = 'info-value-' + lang;
    if (lang === 'ar') inp.dir = 'rtl';
    valueRow.appendChild(inp);
  });
  fieldsDiv.appendChild(valueRow);

  item.appendChild(fieldsDiv);

  const removeBtn = document.createElement('button');
  removeBtn.className = 'btn-remove-item';
  removeBtn.innerHTML = '<i class="fas fa-times"></i>';
  removeBtn.addEventListener('click', () => item.remove());
  item.appendChild(removeBtn);

  return item;
}

function collectInfoFields() {
  const items = document.querySelectorAll('#infoFieldsList .repeatable-item');
  const fields = [];
  items.forEach(item => {
    const field = { label: {}, value: {} };
    ['fr', 'en', 'ar'].forEach(lang => {
      const labelEl = item.querySelector('.info-label-' + lang);
      const valueEl = item.querySelector('.info-value-' + lang);
      field.label[lang] = labelEl ? labelEl.value.trim() : '';
      field.value[lang] = valueEl ? valueEl.value.trim() : '';
    });
    // Only add if at least one label is filled
    if (field.label.fr || field.label.en || field.label.ar) {
      fields.push(field);
    }
  });
  return fields;
}

// ==============================
// REPEATABLE: DELIVERABLES
// ==============================

function renderDeliverables(deliverables) {
  const container = document.getElementById('deliverablesList');
  container.innerHTML = '';
  deliverables.forEach((del, i) => {
    container.appendChild(createDeliverableItem(del, i));
  });
}

function createDeliverableItem(del, index) {
  const item = document.createElement('div');
  item.className = 'repeatable-item';

  const fieldsDiv = document.createElement('div');
  fieldsDiv.className = 'repeatable-fields';

  const row = document.createElement('div');
  row.style.cssText = 'display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;';
  ['fr', 'en', 'ar'].forEach(lang => {
    const inp = document.createElement('input');
    inp.type = 'text';
    inp.placeholder = lang.toUpperCase();
    inp.value = getField(del, lang);
    inp.className = 'del-' + lang;
    if (lang === 'ar') inp.dir = 'rtl';
    row.appendChild(inp);
  });
  fieldsDiv.appendChild(row);
  item.appendChild(fieldsDiv);

  const removeBtn = document.createElement('button');
  removeBtn.className = 'btn-remove-item';
  removeBtn.innerHTML = '<i class="fas fa-times"></i>';
  removeBtn.addEventListener('click', () => item.remove());
  item.appendChild(removeBtn);

  return item;
}

function collectDeliverables() {
  const items = document.querySelectorAll('#deliverablesList .repeatable-item');
  const deliverables = [];
  items.forEach(item => {
    const del = {};
    ['fr', 'en', 'ar'].forEach(lang => {
      const el = item.querySelector('.del-' + lang);
      del[lang] = el ? el.value.trim() : '';
    });
    if (del.fr || del.en || del.ar) {
      deliverables.push(del);
    }
  });
  return deliverables;
}

// ==============================
// REPEATABLE: IMAGES
// ==============================

function renderImages(images) {
  const container = document.getElementById('imagesList');
  container.innerHTML = '';
  images.forEach((img, i) => {
    container.appendChild(createImageItem(img, i));
  });
}

function createImageItem(img, index) {
  const item = document.createElement('div');
  item.className = 'repeatable-item image-item';

  const preview = document.createElement('img');
  preview.src = img.src || '';
  preview.alt = img.alt || '';
  preview.onerror = function() { this.style.display = 'none'; };
  item.appendChild(preview);

  const fieldsDiv = document.createElement('div');
  fieldsDiv.className = 'image-fields';

  const srcInput = document.createElement('input');
  srcInput.type = 'text';
  srcInput.placeholder = 'Image path (e.g. images/photo.jpg)';
  srcInput.value = img.src || '';
  srcInput.className = 'img-src';
  srcInput.addEventListener('input', () => {
    preview.src = srcInput.value;
    preview.style.display = '';
  });

  const altInput = document.createElement('input');
  altInput.type = 'text';
  altInput.placeholder = 'Alt text';
  altInput.value = img.alt || '';
  altInput.className = 'img-alt';

  fieldsDiv.appendChild(srcInput);
  fieldsDiv.appendChild(altInput);
  item.appendChild(fieldsDiv);

  const removeBtn = document.createElement('button');
  removeBtn.className = 'btn-remove-item';
  removeBtn.innerHTML = '<i class="fas fa-times"></i>';
  removeBtn.addEventListener('click', () => item.remove());
  item.appendChild(removeBtn);

  return item;
}

function collectImages() {
  const items = document.querySelectorAll('#imagesList .repeatable-item');
  const images = [];
  items.forEach(item => {
    const srcEl = item.querySelector('.img-src');
    const altEl = item.querySelector('.img-alt');
    const src = srcEl ? srcEl.value.trim() : '';
    if (src) {
      images.push({ src, alt: altEl ? altEl.value.trim() : '' });
    }
  });
  return images;
}

// ==============================
// LANG TABS
// ==============================

function initLangTabs() {
  document.querySelectorAll('.lang-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      switchLangTab(tab.dataset.lang);
    });
  });
}

function switchLangTab(lang) {
  activeLangTab = lang;
  document.querySelectorAll('.lang-tab').forEach(t => t.classList.toggle('active', t.dataset.lang === lang));
  document.querySelectorAll('.lang-panel').forEach(p => {
    p.style.display = p.dataset.lang === lang ? 'block' : 'none';
  });
}

// ==============================
// TOPBAR & BUTTONS
// ==============================

function initTopbar() {
  document.getElementById('btnExport').addEventListener('click', exportJSON);
  document.getElementById('btnPreview').addEventListener('click', () => {
    window.open('index.html', '_blank');
  });
  document.getElementById('btnLogout').addEventListener('click', () => {
    document.getElementById('adminLayout').classList.remove('active');
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('loginPassword').value = '';
  });
}

function initEditorButtons() {
  document.getElementById('btnSave').addEventListener('click', saveEditor);
  document.getElementById('btnCancel').addEventListener('click', closeEditor);

  document.getElementById('btnAddProject').addEventListener('click', () => {
    const newId = getNextId();
    const newProject = {
      id: newId,
      order: getNextOrder(),
      visible: true,
      title: { fr: 'Nouveau Projet', en: 'New Project', ar: 'مشروع جديد' },
      price: '',
      status: { fr: 'En cours', en: 'In Progress', ar: 'قيد التنفيذ' },
      navLabel: { fr: 'Nouveau', en: 'New', ar: 'جديد' },
      infoFields: [],
      scope: { fr: '', en: '', ar: '' },
      deliverables: [],
      result: { fr: '', en: '', ar: '' },
      images: []
    };
    projects.push(newProject);
    saveToStorage();
    renderSidebar();
    openEditor(newId);
    toast('New project created', 'success');
  });

  document.getElementById('btnAddInfoField').addEventListener('click', () => {
    const container = document.getElementById('infoFieldsList');
    container.appendChild(createInfoFieldItem({ label: {}, value: {} }, container.children.length));
  });

  document.getElementById('btnAddDeliverable').addEventListener('click', () => {
    const container = document.getElementById('deliverablesList');
    container.appendChild(createDeliverableItem({}, container.children.length));
  });

  document.getElementById('btnAddImage').addEventListener('click', () => {
    const container = document.getElementById('imagesList');
    container.appendChild(createImageItem({}, container.children.length));
  });
}

// ==============================
// DELETE MODAL
// ==============================

function initModal() {
  document.getElementById('btnDeleteCancel').addEventListener('click', hideDeleteModal);
  document.getElementById('btnDeleteConfirm').addEventListener('click', () => {
    if (deleteTargetId) {
      projects = projects.filter(p => p.id !== deleteTargetId);
      // Reassign order
      projects.forEach((p, i) => { p.order = i + 1; });
      saveToStorage();
      if (editingId === deleteTargetId) closeEditor();
      renderSidebar();
      toast('Project deleted', 'success');
    }
    hideDeleteModal();
  });
}

function showDeleteModal(id) {
  deleteTargetId = id;
  document.getElementById('deleteModal').classList.add('active');
}

function hideDeleteModal() {
  deleteTargetId = null;
  document.getElementById('deleteModal').classList.remove('active');
}

// ==============================
// EXPORT
// ==============================

function exportJSON() {
  const dataStr = JSON.stringify(projects, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'projects-data.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast('JSON exported - replace projects-data.json and commit to deploy', 'success');
}

// ==============================
// UTILITIES
// ==============================

function getField(obj, lang) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[lang] || '';
}

function getVal(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : '';
}

function setVal(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val || '';
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function toast(message, type) {
  const el = document.getElementById('toast');
  el.textContent = message;
  el.className = 'toast ' + (type || '');
  // Trigger reflow for animation
  void el.offsetWidth;
  el.classList.add('visible');
  setTimeout(() => { el.classList.remove('visible'); }, 3000);
}
