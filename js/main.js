// Theme toggle
(function () {
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Load saved preference
  const saved = localStorage.getItem('theme');
  if (saved) {
    root.setAttribute('data-theme', saved);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.setAttribute('data-theme', 'dark');
  }

  updateIcon();

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next === 'light' ? '' : 'dark');
      localStorage.setItem('theme', next === 'light' ? '' : 'dark');
      updateIcon();
    });
  }

  function updateIcon() {
    if (!toggle) return;
    const isDark = root.getAttribute('data-theme') === 'dark';
    toggle.textContent = isDark ? '☀️' : '🌙';
    toggle.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  }
})();

// Highlight active nav link
(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach((a) => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();
