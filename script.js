const menuToggle = document.getElementById('menu-toggle');
const hamburgerIcon = document.getElementById('hamburgerIcon');
const cancelIcon = document.getElementById('cancelIcon');
const navLinkItems = document.querySelectorAll('.nav-links a'); // Adjust to your real selector
const navLinks = document.querySelector('.nav-links'); // Adjust to your real class

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('nav-open');

  // Toggle icons
  const isOpen = navLinks.classList.contains('nav-open');
  hamburgerIcon.classList.toggle('hidden', isOpen);
  cancelIcon.classList.toggle('hidden', !isOpen);
});

// Loop through each and add click event
navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('nav-open');
    hamburgerIcon.classList.remove('hidden');
    cancelIcon.classList.add('hidden');
  });
});