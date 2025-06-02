const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');

       // Swap the symbol inside the toggle
  if (menuToggle.textContent === '✖') {
    menuToggle.textContent = '☰'; // Hamburger icon for opening
  } else {
    menuToggle.textContent = '✖'; // Close icon when menu is open
  };
  });

