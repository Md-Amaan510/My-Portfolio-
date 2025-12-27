
  // Select elements
const sidebarLinks = document.querySelectorAll('.sidebar a');
const check = document.getElementById('check');

// Automatically close sidebar on link click (mobile)
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    check.checked = false; // uncheck to close sidebar
  });
});