// portfolio.js
// Additional JavaScript for the Portfolio page

document.addEventListener('DOMContentLoaded', () => {
    // Example: Add a click handler for portfolio items
    // (Replace with your own interactive code if needed, e.g., opening a lightbox)
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
      item.addEventListener('click', () => {
        // For demonstration, log the title of the project
        const title = item.querySelector('h3').textContent;
        console.log('Project clicked:', title);
        // You can extend this code to open a modal/lightbox with more details
      });
    });
    
    // Optional: Newsletter form handling in the footer (if not handled in common.js)
    const footerNewsletter = document.getElementById('footer-newsletter');
    if (footerNewsletter) {
      footerNewsletter.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing!');
        footerNewsletter.reset();
      });
    }
  });
  