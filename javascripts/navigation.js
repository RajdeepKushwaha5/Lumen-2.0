// Active Navigation Indicator
(function () {
  // Get current page filename
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Get all navigation links
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');

    // Add active class if the href matches current page
    if (href === currentPage ||
      (currentPage === '' && href === 'index.html') ||
      (currentPage === '/' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();
