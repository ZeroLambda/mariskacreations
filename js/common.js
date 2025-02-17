// common.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('mobile-menu');
    const overlay = document.querySelector('.mobile-overlay');
    const closeBtn = document.querySelector('.close-overlay');
  
    hamburgerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      overlay.classList.toggle('active');
      // Reset scroll to top when overlay is shown
      if (overlay.classList.contains('active')) {
        overlay.scrollTop = 0;
      }
      document.body.classList.toggle('no-scroll'); // Optionally disable background scrolling
    });
  
    // Close overlay when clicking outside of menu items
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
  
    // Close overlay on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.keyCode === 27) {
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });

  // Close overlay when clicking outside menu items
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  });

  // Close overlay when clicking the close button
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  }

  // Close overlay when Escape key is pressed
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.keyCode === 27) {
      overlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  });    
    
  });
  