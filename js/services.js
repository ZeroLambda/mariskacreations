// services.js
// Additional JavaScript for the Services (legacy) page

document.addEventListener('DOMContentLoaded', () => {
    // Optional: You might add interactivity to the process steps or benefits section.
    // For example, you could implement a simple scroll animation, or lazy load images.
    
    // As an example, here’s a simple function to log a message when a process step is clicked:
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach(step => {
      step.addEventListener('click', () => {
        console.log('Process step clicked:', step.querySelector('h3').textContent);
      });
    });
    
    // (Further interactive functionality can be added as needed)
  });
  