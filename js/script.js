// Hamburger
document.querySelector('.hamburger')?.addEventListener('click',()=>
  document.querySelector('.nav-list').classList.toggle('active')
);

// Slider – FIXED: Smoother auto-only, no buttons needed
const slides=document.querySelectorAll('.slide');
let i=0;
const show=(n)=>{if(slides.length>0){slides[i].classList.remove('active');i=(n+slides.length)%slides.length;slides[i].classList.add('active')}}
if(slides.length>0) setInterval(()=>show(i+1),5000); // Auto-slide every 5s

// Form
document.getElementById('contactForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  let valid=true;
  const name=document.getElementById('name'),email=document.getElementById('email'),msg=document.getElementById('message');
  document.querySelectorAll('.error').forEach(el=>el.textContent='');
  if(!name.value.trim()){showErr(name,'Name required');valid=false}
  if(!email.value.includes('@')||!email.value.includes('.')){showErr(email,'Valid email required');valid=false}
  if(msg.value.trim().length<10){showErr(msg,'Message too short');valid=false}
  if(valid){document.getElementById('successMsg').textContent='Sent! We will reply soon.';e.target.reset()}
});
function showErr(el,t){el.nextElementSibling.textContent=t}