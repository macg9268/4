document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const menuToggle = document.getElementById('mobile-menu-toggle');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menuToggle.checked) {
        menuToggle.checked = false;
      }
    });
  });
});
