// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form submission logic here
            const formData = new FormData(form);
            console.log('Form submitted:', Object.fromEntries(formData));
            // You can add AJAX submission or Netlify form handling here
        });
    }
}); 