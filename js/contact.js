// contact.js
// Additional JavaScript for the Contact page

document.addEventListener('DOMContentLoaded', () => {
  // Handle Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // For demonstration, show a thank-you message.
      formMessage.textContent = "Thank you for reaching out! We'll get back to you shortly.";
      setTimeout(() => {
        contactForm.reset();
        formMessage.textContent = "";
      }, 3000);
    });
  }
  
  // Footer Newsletter Subscription (if not handled globally)
  const footerNewsletter = document.getElementById('footer-newsletter');
  if (footerNewsletter) {
    footerNewsletter.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Thank you for subscribing to our newsletter!");
      footerNewsletter.reset();
    });
  }
});
