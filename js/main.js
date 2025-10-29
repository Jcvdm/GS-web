// Icon Grid Interactions
document.addEventListener('DOMContentLoaded', function() {
    const iconItems = document.querySelectorAll('.icon-item');
    
    iconItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.icon-wrapper i');
            icon.style.animation = 'bounce 0.5s ease';
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.icon-wrapper i');
            icon.style.animation = '';
        });
    });
});

// Typing Animation
const typingText = document.querySelector('.typing-text');
const phrases = [
    "AI Web Design. Fast Results.",
    "Local Business. Digital Growth.",
    "SEO Strategy. Proven Results."
];
let currentPhrase = 0;
let currentLetter = 0;
let isDeleting = false;

function type() {
    const fullText = phrases[currentPhrase];
    
    if (isDeleting) {
        typingText.textContent = fullText.substring(0, currentLetter - 1);
        currentLetter--;
    } else {
        typingText.textContent = fullText.substring(0, currentLetter + 1);
        currentLetter++;
    }

    if (!isDeleting && currentLetter === fullText.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Increased pause at end of phrase
    } else if (isDeleting && currentLetter === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(type, 750); // Slightly longer pause between phrases
    } else {
        setTimeout(type, isDeleting ? 40 : 80); // Adjusted typing speeds
    }
}

document.addEventListener('DOMContentLoaded', type);

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

    // Mobile menu toggle with animation
    menuBtn.addEventListener('click', function() {
        const isOpen = navMenu.classList.toggle('active');
        menuBtn.classList.toggle('open');
        
        // Toggle body scroll lock
        document.body.style.overflow = isOpen ? 'hidden' : '';
        
        // Add/remove backdrop
        if (isOpen) {
            const backdrop = document.createElement('div');
            backdrop.className = 'mobile-backdrop';
            document.body.appendChild(backdrop);
            
            backdrop.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuBtn.classList.remove('open');
                document.body.style.overflow = '';
                backdrop.remove();
            });
        } else {
            const backdrop = document.querySelector('.mobile-backdrop');
            if (backdrop) backdrop.remove();
        }
    });

    // Close menu when clicking on links
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuBtn.classList.remove('open');
            document.body.style.overflow = '';
            const backdrop = document.querySelector('.mobile-backdrop');
            if (backdrop) backdrop.remove();
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
        const phoneNumber = "27639071383";
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
        window.location.href = 'tel:+27639071383';
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
            window.location.href = `mailto:admin@gsweb.co.za?subject=${subject}&body=${body}`;
        }
    });

    // FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });

            // Toggle current item
            faqItem.classList.toggle('active');
        });
    });
});
