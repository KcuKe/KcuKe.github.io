// js/menu.js
function toggleMenu() {
  const menu = document.getElementById("menu");
  const hamburger = document.getElementById("hamburger");
  
  // Create overlay if not exists
  let overlay = document.querySelector(".menu-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "menu-overlay";
    overlay.onclick = toggleMenu;
    document.body.appendChild(overlay);
  }
  
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
  overlay.classList.toggle("active");
  
  // Prevent body scroll when menu open
  document.body.style.overflow = menu.classList.contains("active") ? "hidden" : "";
}

// Close menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById("menu");
    const hamburger = document.getElementById("hamburger");
    const overlay = document.querySelector(".menu-overlay");
    
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      hamburger.classList.remove("active");
      if (overlay) overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});
