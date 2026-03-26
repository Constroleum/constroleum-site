// ================================================
// STATIC PAGE UI — no translation engine
// Used by hu/, es/, en/ pages
// ================================================

// ── Mobile menu ──────────────────────────────────
function toggleMenu() {
  document.getElementById('navbar').classList.toggle('open');
}

// ── Scroll: nav shadow ───────────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ── Scroll reveal ────────────────────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'),
        Number(e.target.dataset.delay) || 0);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.service-card, .pillar').forEach(el => {
  revealObs.observe(el);
});
