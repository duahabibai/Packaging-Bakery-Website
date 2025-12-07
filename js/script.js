console.log("Welcome to the Bakery Packaging website!");

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) {
                dot.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Event Listeners for carousel navigation
    if (nextButton && prevButton) { // Check if buttons exist (they only exist on index.html)
        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    // Auto-slide functionality
    if (slides.length > 0) { // Only auto-slide if carousel exists
        setInterval(nextSlide, 3000); // Change slide every 3 seconds
        showSlide(currentIndex); // Initialize first slide
    }

    // Hamburger menu functionality
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-overlay ul li a');

    if (hamburgerMenu && mobileNavOverlay) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            mobileNavOverlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll'); // Re-added: disable scroll when menu is open
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerMenu.classList.remove('active');
                mobileNavOverlay.classList.remove('active');
                document.body.classList.remove('no-scroll'); // Re-added: enable scroll when menu is closed
            });
        });
    }
});