
const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();

// mobile nav
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
if (navToggle) navToggle.addEventListener('click', () => nav.classList.toggle('open'));

// Member modal
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
  <div class="modal-card">
    <button class="modal-close" aria-label="닫기">×</button>
    <div class="modal-media">
      <img id="mPhoto" src="" alt="">
      <div class="modal-info">
        <h3 id="mName"></h3>
        <p id="mRole"></p>
        <p><a id="mIG" href="#" target="_blank" rel="noopener">Instagram</a></p>
      </div>
    </div>
  </div>`;
document.body.appendChild(modal);
const mPhoto = modal.querySelector('#mPhoto');
const mName  = modal.querySelector('#mName');
const mRole  = modal.querySelector('#mRole');
const mIG    = modal.querySelector('#mIG');
const closeBtn = modal.querySelector('.modal-close');
closeBtn.addEventListener('click', ()=> modal.classList.remove('open'));
modal.addEventListener('click', (e)=>{ if(e.target === modal) modal.classList.remove('open'); });
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') modal.classList.remove('open'); });

document.querySelectorAll('.member-grid .card').forEach(card => {
  card.addEventListener('click', () => {
    const name = card.dataset.name;
    const role = card.dataset.role;
    const ig   = card.dataset.ig;
    const src  = card.dataset.large || card.querySelector('img')?.src;
    mPhoto.src = src;
    mName.textContent = name;
    mRole.textContent = role;
    mIG.href = ig;
    modal.classList.add('open');
  });
});

// Music disc panels — only one open
document.querySelectorAll('.disc').forEach(disc => {
  const btn = disc.querySelector('.disc-btn');
  const pid = disc.dataset.panel;
  const panel = document.getElementById(pid);
  btn.addEventListener('click', () => {
    // close others
    document.querySelectorAll('.panel.open').forEach(p => { if (p !== panel) p.classList.remove('open'); });
    const isOpen = panel.classList.contains('open');
    document.querySelectorAll('.disc-btn[aria-expanded="true"]').forEach(b => b.setAttribute('aria-expanded','false'));
    if (!isOpen) {
      panel.classList.add('open');
      btn.setAttribute('aria-expanded','true');
    } else {
      panel.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    }
  });
});
