const boot=document.getElementById("boot");
const lock=document.getElementById("lock");
const home=document.getElementById("home");
const appView=document.getElementById("appView");
const appTitle=document.getElementById("appTitle");
const appContent=document.getElementById("appContent");
const lockTime=document.getElementById("lockTime");
const statusTime=document.getElementById("statusTime");
const knob=document.getElementById("knob");

/* BOOT */
setTimeout(()=>{
  boot.classList.add("hidden");
  lock.classList.remove("hidden");
},2000);

/* TIME */
setInterval(()=>{
  const t=new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
  lockTime.textContent=t;
  statusTime.textContent=t;
},1000);

/* SLIDE TO UNLOCK */
let startX=0;
knob.addEventListener("touchstart",e=>startX=e.touches[0].clientX);
knob.addEventListener("touchmove",e=>{
  let dx=e.touches[0].clientX-startX;
  if(dx>0 && dx<200) knob.style.left=dx+"px";
});
knob.addEventListener("touchend",()=>{
  if(parseInt(knob.style.left)>150){
    lock.classList.add("hidden");
    home.classList.remove("hidden");
  }
  knob.style.left="0px";
});

/* APPS */
function openApp(id){
  const a=apps[id];
  appTitle.textContent=a.title;
  appContent.innerHTML=a.render();
  home.classList.add("hidden");
  appView.classList.remove("hidden");
  a.onOpen?.();
}
function closeApp(){
  appView.classList.add("hidden");
  home.classList.remove("hidden");
}

/* CAMERA SNAP */
function snap(){
  const v=document.getElementById("cam");
  const c=document.getElementById("shot");
  c.width=v.videoWidth;
  c.height=v.videoHeight;
  c.getContext("2d").drawImage(v,0,0);
  const img=c.toDataURL();
  const arr=JSON.parse(localStorage.getItem("photos")||"[]");
  arr.push(img);
  localStorage.setItem("photos",JSON.stringify(arr));
}

