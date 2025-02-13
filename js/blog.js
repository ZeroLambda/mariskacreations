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
  
  // Featured Articles Slider with Manual Controls
  const slider = document.querySelector('.featured-slider');
  if (slider) {
    const slides = slider.querySelectorAll('.featured-slide');
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    function scrollToSlide(index) {
      slider.scrollTo({
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
