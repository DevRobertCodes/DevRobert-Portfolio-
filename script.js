const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
// Select all nav-link anchors
const navLinkItems = document.querySelector('.nav-link');
// Event listener for Toggle menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('nav-open')
  // Swap the symbol inside the toggle menu when clicked,
  if (menuToggle.textContent === 'X'){
    menuToggle.textContent = '☰'; // Hamburger Icon
  }else {
    menuToggle.textContent = 'X' // Cancel Icon
  };
});

