// about.js
// Additional JavaScript for the About Us page

document.addEventListener('DOMContentLoaded', () => {
    // Optional: Smooth scrolling for internal anchors (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  