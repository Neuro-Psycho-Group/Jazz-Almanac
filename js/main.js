/* ============================================
   JAZZ SITE — MAIN JS
   ============================================ */

// --- Navigation Active State ---
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav .nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    a.classList.toggle('active', href === path);
  });
}

// --- Mobile Nav Toggle ---
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });
  // Close on link click
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    })
  );
}

// --- Scroll Reveal ---
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// --- Floating Notes (for pages that have .notes-container) ---
function initFloatingNotes() {
  const container = document.querySelector('.notes-container');
  if (!container) return;

  const symbols = ['♩','♪','♫','♬','𝄞','𝄢'];
  const count = 18;

  for (let i = 0; i < count; i++) {
    const note = document.createElement('span');
    note.classList.add('note-float');
    note.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    const x = Math.random() * 100;
    const dur = 7 + Math.random() * 8;
    const delay = Math.random() * 10;
    const size = 1 + Math.random() * 1.5;
    note.style.cssText = `left:${x}%;bottom:0;--dur:${dur}s;--delay:${delay}s;font-size:${size}rem;`;
    container.appendChild(note);
  }
}

// --- Animated Waveform ---
function buildWaveform(container, bars = 20) {
  if (!container) return;
  const speeds = [0.8, 0.9, 1.0, 1.1, 1.2, 0.95, 0.85, 1.15, 1.05, 0.75];
  for (let i = 0; i < bars; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    const spd = speeds[i % speeds.length];
    bar.style.cssText = `--spd:${spd}s;--d:${(i * 0.08).toFixed(2)}s;`;
    container.appendChild(bar);
  }
}

// --- Vinyl Record Toggle ---
function initVinyl() {
  document.querySelectorAll('.vinyl-record').forEach(vinyl => {
    vinyl.addEventListener('click', () => {
      vinyl.querySelector('.vinyl-spin')?.classList.toggle('paused');
    });
  });
}

// --- Smooth Tabs ---
function initTabs() {
  document.querySelectorAll('[data-tabs]').forEach(tabGroup => {
    const buttons = tabGroup.querySelectorAll('[data-tab-btn]');
    const panels  = tabGroup.querySelectorAll('[data-tab-panel]');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tabBtn;
        buttons.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        tabGroup.querySelector(`[data-tab-panel="${target}"]`)?.classList.add('active');
      });
    });

    // Activate first
    if (buttons[0]) buttons[0].click();
  });
}

// --- Piano Keyboard Interaction ---
function initPianoKeyboard() {
  const piano = document.getElementById('piano-demo');
  if (!piano) return;

  const keys = piano.querySelectorAll('.piano-key');
  keys.forEach(key => {
    key.addEventListener('mousedown', () => key.classList.add('pressed'));
    key.addEventListener('mouseup', () => key.classList.remove('pressed'));
    key.addEventListener('mouseleave', () => key.classList.remove('pressed'));
    key.addEventListener('touchstart', e => { e.preventDefault(); key.classList.add('pressed'); });
    key.addEventListener('touchend', () => key.classList.remove('pressed'));
  });
}

// --- Timeline Animation ---
function initTimelineAnim() {
  const items = document.querySelectorAll('.timeline-item');
  if (!items.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  items.forEach((item, i) => {
    item.style.cssText = `opacity:0;transform:translateX(-20px);transition:opacity 0.6s ${i*0.1}s ease,transform 0.6s ${i*0.1}s ease;`;
    obs.observe(item);
  });
}

// --- Init All ---
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initMobileNav();
  initScrollReveal();
  initFloatingNotes();
  buildWaveform(document.querySelector('.waveform'));
  initVinyl();
  initTabs();
  initPianoKeyboard();
  initTimelineAnim();
});
