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

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const menuLinks = document.querySelectorAll('.nav-menu a');

    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });

    // Contact Options Event Listeners
    document.addEventListener('click', function(e) {
        if (e.target.id === 'whatsappButton') {
            e.preventDefault();
            const packageName = document.querySelector('.contact-options-popup .popup-content h4').textContent.replace('Choose Contact Method for ', '');
            const message = `Hi, I'm interested in the ${packageName}. Can you provide more information?`;
            window.open(`https://wa.me/27827711674?text=${encodeURIComponent(message)}`, '_blank');
        }
        
        if (e.target.id === 'emailButton') {
            e.preventDefault();
            const packageName = document.querySelector('.contact-options-popup .popup-content h4').textContent.replace('Choose Contact Method for ', '');
            const subject = encodeURIComponent(`Inquiry about ${packageName}`);
            const body = encodeURIComponent(`Hi,\n\nI'm interested in the ${packageName}. Can you provide more information?\n\nBest regards`);
            window.location.href = `mailto:growthsparkweb@gmail.com?subject=${subject}&body=${body}`;
        }
    });
});