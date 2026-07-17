function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// Close menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("menu").classList.remove("active");
  });
});
