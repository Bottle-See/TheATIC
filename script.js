// THE ATIC — EPK scripts
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// mobile nav
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// allow PNG/uppercase extensions to be used without changing code
// (No special handling needed in static site; note is left in markup.)
