document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for internal links (if needed)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Newsletter subscription form handling
  const blogNewsletterForm = document.getElementById('blog-newsletter-form');
  if (blogNewsletterForm) {
    blogNewsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for subscribing to our blog!');
      blogNewsletterForm.reset();
    });
  }
  
  // Featured Articles Auto-Scroll Slider
  const slider = document.querySelector('.featured-slider');
  if (slider) {
    let scrollAmount = 0;
    const gap = 16; // Adjust based on your CSS gap (if using rems, convert accordingly)
    // Calculate width of a slide (assuming all slides have same width)
    const slideWidth = slider.querySelector('.featured-slide').offsetWidth + gap;
    
    setInterval(() => {
      scrollAmount += slideWidth;
      // If we have scrolled past the end, reset to 0
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      }
      slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }, 5000); // Change slide every 5 seconds
  }
});
