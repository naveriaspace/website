/**
 * Careers pages for the static Naveria site.
 *
 * To add a JD: open careers/jobs.json and append a role object.
 * `id` is the URL slug: careers/role.html?id=your-slug
 * Set `"open": false` to hide a role without deleting it.
 * Optional arrays (do, lookingFor, preferred) can be omitted or left empty.
 */
const JOBS_URL = new URL('jobs.json', window.location.href).href;

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function openRoles(data) {
  return (data.roles || []).filter(role => role.open !== false);
}

async function loadJobs() {
  const res = await fetch(JOBS_URL, { cache: 'no-store' });
  if (!res.ok) throw new Error('Could not load jobs.json');
  return res.json();
}

function pills(role) {
  return `
    <div class="role-card-meta">${escapeHtml(role.type)} · ${escapeHtml(role.location)}</div>`;
}

function listItems(items) {
  if (!items || !items.length) return '';
  return `<ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
}

function section(title, bodyHtml) {
  if (!bodyHtml) return '';
  return `<section class="jd-section"><h2>${escapeHtml(title)}</h2>${bodyHtml}</section>`;
}

function mailtoFor(email, role) {
  const subject = encodeURIComponent(`${role.title} (${role.code})`);
  const body = encodeURIComponent(
    `Hello,\n\nI would like to apply for ${role.title} (${role.code}).\n\nResume attached as PDF.\n`
  );
  return `mailto:${email}?subject=${subject}&body=${body}`;
}

function renderListing(root, data) {
  const intro = data.intro || {};
  const roles = openRoles(data);
  const countLabel = roles.length === 1 ? '1 open role' : `${roles.length} open roles`;
  const cards = roles.length
    ? roles.map(role => `
        <a class="role-card" href="role.html?id=${encodeURIComponent(role.id)}">
          <div>
            ${pills(role)}
            <h2 class="role-card-title">${escapeHtml(role.title)}</h2>
            <p class="role-card-summary">${escapeHtml(role.summary)}</p>
          </div>
          <span class="role-card-action">View role</span>
        </a>`).join('')
    : `<p class="empty-roles">No open roles right now. Send a note to <a href="mailto:${escapeHtml(data.applyEmail)}">${escapeHtml(data.applyEmail)}</a>.</p>`;

  root.innerHTML = `
    <div class="section-label">${escapeHtml(intro.label || 'Careers')}</div>
    <h1 class="page-title">${intro.titleHtml || 'Careers'}</h1>
    <p class="page-intro">${escapeHtml(intro.body || '')}</p>
    ${roles.length ? `<div class="role-count">${countLabel}</div>` : ''}
    <div class="role-list">${cards}</div>`;
}

function renderRole(root, data, id) {
  const role = openRoles(data).find(item => item.id === id);
  if (!role) {
    root.innerHTML = `
      <div class="jd-toolbar">
        <a class="back-link" href="./">← Back to careers</a>
      </div>
      <div class="jd-missing">
        <h1>Role not found</h1>
        <p>This listing may have closed. See current openings instead.</p>
        <a class="apply-btn" href="./">Open roles</a>
      </div>`;
    document.title = 'Role not found · Naveria Space';
    return;
  }

  document.title = `${role.title} · Naveria Space`;

  const facts = [
    ['Location', role.location],
    ['Function', role.function],
    ['Type', role.type],
  ].map(([label, value]) => `
    <div>
      <div class="jd-fact-label">${escapeHtml(label)}</div>
      <div class="jd-fact-value">${escapeHtml(value)}</div>
    </div>`).join('');

  const applyHref = mailtoFor(data.applyEmail, role);

  root.innerHTML = `
    <div class="jd-toolbar">
      <a class="back-link" href="./">← Back to careers</a>
      <a class="back-link apply-jump" href="#apply">Apply now ↓</a>
    </div>
    <div class="jd-layout">
      <article class="jd-main">
        <div class="jd-pills">${escapeHtml(role.type)} · ${escapeHtml(role.location)}</div>
        <h1 class="jd-title">${escapeHtml(role.title)}</h1>
        <p class="jd-summary">${escapeHtml(role.summary)}</p>
        <div class="jd-facts">${facts}</div>
        ${section('What you will do', listItems(role.do))}
        ${section('What we are looking for', listItems(role.lookingFor))}
        ${section('Preferred background', listItems(role.preferred))}
        ${section('Why join', role.why ? `<p>${escapeHtml(role.why)}</p>` : '')}
      </article>
      <aside class="jd-apply" id="apply">
        <div class="apply-kicker">Apply</div>
        <h2 class="apply-title">Apply for this role</h2>
        <p class="apply-copy">Open your mail app, attach a PDF resume, and send a short note. Nothing is stored on this site.</p>
        <a class="apply-btn" href="${escapeHtml(applyHref)}">Open email to apply →</a>
        <div class="apply-email-row">
          <a class="apply-email" href="${escapeHtml(applyHref)}">${escapeHtml(data.applyEmail)}</a>
          <button type="button" class="apply-copy-btn" data-email="${escapeHtml(data.applyEmail)}" aria-label="Copy email address">Copy</button>
        </div>
        <p class="apply-hint">Attach the PDF in your mail app before you send.</p>
      </aside>
    </div>`;

  const copyBtn = root.querySelector('.apply-copy-btn');
  copyBtn.addEventListener('click', async () => {
    const email = copyBtn.getAttribute('data-email') || '';
    const restore = () => { copyBtn.textContent = 'Copy'; };
    const copied = await copyText(email);
    copyBtn.textContent = copied ? 'Copied' : 'Copy failed';
    window.setTimeout(restore, 1600);
  });
}

async function copyText(value) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    const field = document.createElement('textarea');
    field.value = value;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.left = '-9999px';
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand('copy');
    field.remove();
    return ok;
  }
}

window.NaveriaCareers = { loadJobs, renderListing, renderRole };

(function bindNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!navToggle || !navLinks) return;
  const setMenu = (open) => {
    navLinks.classList.toggle('is-open', open);
    navToggle.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', open);
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  navToggle.addEventListener('click', () => setMenu(!navLinks.classList.contains('is-open')));
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
})();
