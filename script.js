const boot = document.getElementById("boot");
const lock = document.getElementById("lock");
const home = document.getElementById("home");
const appView = document.getElementById("appView");
const timeEl = document.getElementById("time");
const appTitle = document.getElementById("appTitle");
const appContent = document.getElementById("appContent");

/* Boot */
setTimeout(() => {
  boot.classList.add("hidden");
  lock.classList.remove("hidden");
}, 2000);

/* Time */
setInterval(() => {
  const now = new Date();
  timeEl.textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}, 1000);

/* Unlock gesture */
let startY = 0;
lock.addEventListener("touchstart", e => startY = e.touches[0].clientY);
lock.addEventListener("touchend", e => {
  if (startY - e.changedTouches[0].clientY > 100) {
    lock.classList.add("hidden");
    home.classList.remove("hidden");
  }
});

/* App system */
function openApp(id) {
  const app = apps[id];
  if (!app) return;

  home.classList.add("hidden");
  appView.classList.remove("hidden");
  appTitle.textContent = app.title;
  appContent.innerHTML = app.render();
  app.onOpen?.();
}

function closeApp() {
  appView.classList.add("hidden");
  home.classList.remove("hidden");
}

