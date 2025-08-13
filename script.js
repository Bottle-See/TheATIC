const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
const t=document.getElementById('navToggle'); const n=document.getElementById('nav');
if(t){ t.addEventListener('click', ()=> n.classList.toggle('open')); }