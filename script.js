const b=document.querySelector('.burger'),l=document.querySelector('.links');
b.addEventListener('click',()=>{const o=l.classList.toggle('open');b.setAttribute('aria-expanded',o)});
l.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>l.classList.remove('open')));
document.getElementById('yr').textContent=new Date().getFullYear();
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll('.card,.steps li').forEach(el=>{el.classList.add('reveal');io.observe(el)});
const f=document.getElementById('form'),m=document.getElementById('formMsg');
f.addEventListener('submit',e=>{e.preventDefault();let ok=true;
 f.querySelectorAll('[required]').forEach(i=>{const v=i.checkValidity();i.classList.toggle('invalid',!v);ok=ok&&v});
 if(!ok){m.textContent='Please fill in all required fields correctly.';return}
 m.textContent='Thank you! Your enquiry has been received (demo – not sent).';f.reset()});
