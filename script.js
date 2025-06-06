const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
// Select all nav-link anchors
const navLinkItems = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('nav-open');

// Swap the symbol inside the toggle
if (menuToggle.textContent === '✖') {
menuToggle.textContent = '☰'; // Hamburger icon for opening
} else {
menuToggle.textContent = '✖'; // Close icon when menu is open
};
});

// Loop through each and add click event
navLinkItems.forEach(link => {
link.addEventListener('click', () => {
// Close the nav menu
navLinks.classList.remove('nav-open');
// Change the toggle icon back to ☰
menuToggle.textContent = '☰';
});
});

// Intersection Observer for sections.
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2 // Trigger when 20% of the section is visible
  });

  // Observe all elements with the 'hidden' class
  document.querySelectorAll('.hidden').forEach(el => {
    observer.observe(el);
  });