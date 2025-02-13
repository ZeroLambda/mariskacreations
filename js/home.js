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

  // Featured Articles Slider with Manual Controls
  const sliderBlog = document.querySelector('.featured-slider');
  if (sliderBlog) {
    const slides = sliderBlog.querySelectorAll('.featured-slide');
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    function scrollToSlide(index) {
      sliderBlog.scrollTo({
        left: slides[index].offsetLeft,
        behavior: 'smooth'
      });
    }
    
    // Initially, show the first slide
    scrollToSlide(currentIndex);
    
    // Set up auto-scroll (optional)
    let autoScrollInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      scrollToSlide(currentIndex);
    }, 5000);
    
    // Pause auto-scroll when manual controls are used
    function pauseAutoScroll() {
      clearInterval(autoScrollInterval);
    }
    
    // Manual control: previous button
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        pauseAutoScroll();
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        scrollToSlide(currentIndex);
      });
      nextBtn.addEventListener('click', () => {
        pauseAutoScroll();
        currentIndex = (currentIndex + 1) % totalSlides;
        scrollToSlide(currentIndex);
      });
    }
  }    
});
  