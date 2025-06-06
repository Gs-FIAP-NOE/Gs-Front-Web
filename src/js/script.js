document.addEventListener('DOMContentLoaded', function () {

    // menu sanduiche
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    mobileMenu.addEventListener('click', function () {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
 });


 // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

// Theme Switcher
    const themeButtons = document.querySelectorAll('.theme-btn');

    themeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const theme = this.getAttribute('data-theme');
            document.documentElement.setAttribute('data-theme', theme);

            // Update active button
            themeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Save theme preference
            localStorage.setItem('theme', theme);
        });
    });

    // Apply saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
document.querySelector(.theme-btn[data-theme="${savedTheme}"]).classList.add('active');

// Carrossel de histórias
    const storiesCarousel = document.querySelector('.stories-carousel');
    if (storiesCarousel) {
        const stories = document.querySelectorAll('.story');
        let currentStory = 0;

        function showStory(index) {
            stories.forEach((story, i) => {
                story.style.display = i === index ? 'block' : 'none';
            });
        }

        function nextStory() {
            currentStory = (currentStory + 1) % stories.length;
            showStory(currentStory);
        }    
        // Mostrar primeira história
        showStory(currentStory);

        // Trocar a cada 8 segundos
        setInterval(nextStory, 5000);
    }
// Carousel fots
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.carousel-dots');

    let currentIndex = 0;
    const slideCount = slides.length;
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
const dots = document.querySelectorAll('.dot');

    function updateCarousel() {
        carousel.style.transform = translateX(-${currentIndex * 100}%);

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateCarousel();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide); 