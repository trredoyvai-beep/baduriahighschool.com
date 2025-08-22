//================= Accept Overlay =================
function acceptSite(){
  document.getElementById('acceptOverlay').style.display='none';
}

//================= Scroll to Section =================
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

//================= Dark Mode Toggle =================
function toggleDarkMode(){
  document.body.classList.toggle('dark-mode');
}

//================= Digital Clock =================
function updateClock(){
  const clock = document.getElementById('clock');
  const now = new Date();
  let h = now.getHours().toString().padStart(2,'0');
  let m = now.getMinutes().toString().padStart(2,'0');
  let s = now.getSeconds().toString().padStart(2,'0');
  clock.innerText = `${h}:${m}:${s}`;
}
setInterval(updateClock,1000);

//================= Copy Protection =================
document.addEventListener('contextmenu',e=>e.preventDefault());
document.addEventListener('keydown',e=>{
  if(e.ctrlKey&&(e.key==='c'||e.key==='u'||e.key==='s')) e.preventDefault();
});
