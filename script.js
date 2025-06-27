/* SPA controller */
const sections = document.querySelectorAll('.spa-section');
const navButtons = document.querySelectorAll('[data-section]');

/* fungsi menampilkan 1 section dan sembunyikan lainnya */
function showSection(id, push = true) {
  sections.forEach(sec => sec.classList.toggle('active', sec.id === id));
  navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.section === id));
  if (push) history.pushState(null, '', `#${id}`);
}

/* klik menu/tab */
navButtons.forEach(btn => {
  btn.addEventListener('click', () => showSection(btn.dataset.section));
});

/* deep-link saat load / back-forward */
window.addEventListener('popstate', initSpa);
function initSpa() {
  const hash = location.hash.replace('#', '') || 'home';
  showSection(hash, false);
}
initSpa();
