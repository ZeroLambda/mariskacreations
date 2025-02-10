// home.js
// Additional JavaScript for the Home page

document.addEventListener('DOMContentLoaded', () => {
    // Basic Testimonials Slider
    const slider = document.querySelector('.testimonials-slider');
    if (slider) {
      const items = slider.querySelectorAll('.testimonial-item');
      let currentIndex = 0;
      const totalItems = items.length;
  
      // Function to show a specific testimonial
      function showTestimonial(index) {
        items.forEach((item, idx) => {
          item.style.display = idx === index ? 'block' : 'none';
        });
      }
      
      // Show the first testimonial initially
      showTestimonial(currentIndex);
  
      // Auto-rotate testimonials every 5 seconds
      setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        showTestimonial(currentIndex);
      }, 5000);
    }
  
    // Newsletter form handling (optional)
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing!');
        newsletterForm.reset();
      });
    }
  });
  