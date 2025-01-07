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

    // WhatsApp Popup Functionality
    const whatsappPopup = document.querySelector('.whatsapp-popup');
    const whatsappButton = document.querySelector('.whatsapp-button');
    const closePopupBtn = document.getElementById('closeWhatsappPopup');

    // Toggle popup visibility
    function togglePopup() {
        whatsappPopup.classList.toggle('show');
    }

    // Show popup when clicking WhatsApp button
    whatsappButton.addEventListener('click', function(e) {
        e.preventDefault();
        togglePopup();
    });

    // Close popup when clicking close button
    closePopupBtn.addEventListener('click', togglePopup);

    // WhatsApp Chat option
    document.getElementById('whatsappChat').addEventListener('click', function() {
        const message = "Welcome to GS Web! How can we help you today?";
        const phoneNumber = "27827711674";
        const encodedMessage = encodeURIComponent(message);
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
        if (isMobile) {
            window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
        } else {
            window.open(
                `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
                'WhatsApp',
                'width=600,height=730'
            );
        }
        togglePopup();
    });

    // WhatsApp Call option
    document.getElementById('whatsappCall').addEventListener('click', function() {
        window.location.href = 'tel:+27827711674';
        togglePopup();
    });

    // Close popup when clicking outside
    document.addEventListener('click', function(e) {
        if (!whatsappPopup.contains(e.target) && 
            !whatsappButton.contains(e.target) && 
            whatsappPopup.classList.contains('show')) {
            togglePopup();
        }
    });

    // Contact Options Event Listeners
    document.addEventListener('click', function(e) {
        if (e.target.id === 'whatsappButton') {
            handleWhatsAppClick(e);
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
