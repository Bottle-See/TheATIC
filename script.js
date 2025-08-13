
const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
const navToggle = document.getElementById('navToggle'); const nav = document.getElementById('nav');
if (navToggle) navToggle.addEventListener('click', () => nav.classList.toggle('open'));

const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `<div class="modal-card">
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
modal.querySelector('.modal-close').addEventListener('click', ()=> modal.classList.remove('open'));
modal.addEventListener('click', (e)=>{ if(e.target === modal) modal.classList.remove('open'); });
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') modal.classList.remove('open'); });

document.querySelectorAll('.member-grid .card').forEach(card => {
  card.addEventListener('click', () => {
    mName.textContent = card.dataset.name;
    mRole.textContent = card.dataset.role;
    mIG.href = card.dataset.ig;
    mPhoto.src = card.dataset.large;
    modal.classList.add('open');
  });
});

document.querySelectorAll('.disc').forEach(disc => {
  const btn = disc.querySelector('.disc-btn');
  const panel = document.getElementById(disc.dataset.panel);
  btn.addEventListener('click', () => {
    document.querySelectorAll('.panel.open').forEach(p => { if (p !== panel) p.classList.remove('open'); });
    panel.classList.toggle('open');
  });
});
