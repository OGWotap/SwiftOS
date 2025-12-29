const boot = document.getElementById("boot");
const lock = document.getElementById("lock");
const home = document.getElementById("home");
const appView = document.getElementById("appView");
const lockTime = document.getElementById("lockTime");
const statusTime = document.getElementById("statusTime");
const appTitle = document.getElementById("appTitle");
const appContent = document.getElementById("appContent");

/* BOOT */
setTimeout(() => {
  boot.classList.add("hidden");
  lock.classList.remove("hidden");
}, 2000);

/* TIME */
setInterval(() => {
  const t = new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
  lockTime.textContent = t;
  statusTime.textContent = t;
}, 1000);

/* UNLOCK */
let startX = 0;
lock.addEventListener("touchstart", e => startX = e.touches[0].clientX);
lock.addEventListener("touchend", e => {
  if (e.changedTouches[0].clientX - startX > 100) {
    lock.classList.add("hidden");
    home.classList.remove("hidden");
  }
});

/* APPS */
function openApp(id) {
  const app = apps[id];
  appTitle.textContent = app.title;
  appContent.innerHTML = app.render();
  home.classList.add("hidden");
  appView.classList.remove("hidden");
}

function closeApp() {
  appView.classList.add("hidden");
  home.classList.remove("hidden");
}
