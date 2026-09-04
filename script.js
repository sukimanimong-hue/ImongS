const menuButton = document.getElementById("menuButton");
const menuOverlay = document.getElementById("menuOverlay");

menuButton.addEventListener("click", () => {
  menuOverlay.classList.toggle("show");
});

document.querySelectorAll(".menu-box a").forEach(link => {
  link.addEventListener("click", () => {
    menuOverlay.classList.remove("show");
  });
});

document.addEventListener("click", (event) => {
  if (!menuOverlay.contains(event.target) && !menuButton.contains(event.target)) {
    menuOverlay.classList.remove("show");
  }
});
