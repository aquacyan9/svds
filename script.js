document.addEventListener('DOMContentLoaded', function() {
    // Generate Temporary Logo
    const logoContainer = document.getElementById('js-logo');
    if (logoContainer) {
        const logoText = 'SVDS';
        const logoElement = document.createElement('span');
        logoElement.textContent = logoText;
        logoElement.style.fontWeight = 'bold';
        logoElement.style.fontSize = '2em';
        logoElement.style.color = '#007bff';
        logoElement.style.cursor = 'pointer';
        logoElement.addEventListener('click', () => {
            window.location.href = '#hero'; // Example: Go to the hero section on click
        });
        logoContainer.appendChild(logoElement);
    }

    // FAQ Section Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', function() {
            item.classList.toggle('active');
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Testimonials Carousel Functionality with Controls
    const carouselContainer = document.querySelector('.testimonials-carousel-container');
    const carousel = document.querySelector('.testimonials-carousel');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const cards = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;

    function updateCarousel() {
        if (cards.length > 0) {
            const cardWidth = cards[0].offsetWidth + parseFloat(window.getComputedStyle(cards[0]).marginLeft) + parseFloat(window.getComputedStyle(cards[0]).marginRight);
            carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    }

    function handlePrevClick() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    function handleNextClick() {
        if (cards.length > 0 && currentIndex < cards.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', handlePrevClick);
        nextButton.addEventListener('click', handleNextClick);
    }

    // Optional: Basic Auto-Scroll (remove if you only want manual control)
    let autoScrollInterval;
    let autoScrollSpeed = 1; // Adjust speed as needed
    let isCarouselHovered = false;

    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            isCarouselHovered = true;
            clearInterval(autoScrollInterval);
        });

        carouselContainer.addEventListener('mouseleave', () => {
            isCarouselHovered = false;
            startAutoScroll();
        });
    }

    function startAutoScroll() {
        clearInterval(autoScrollInterval);
        autoScrollInterval = setInterval(() => {
            if (!isCarouselHovered && cards.length > 0) {
                const cardWidth = cards[0].offsetWidth + parseFloat(window.getComputedStyle(cards[0]).marginLeft) + parseFloat(window.getComputedStyle(cards[0]).marginRight);
                carousel.scrollLeft += autoScrollSpeed;
                // Basic looping (jump back to start)
                if (carousel.scrollLeft > (carousel.scrollWidth - carousel.offsetWidth - 1)) {
                    carousel.scrollLeft = 0;
                }
            }
        }, 50); // Adjust interval for speed
    }

    // Initialize auto-scroll if you want it
    // startAutoScroll();
});