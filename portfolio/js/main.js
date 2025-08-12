document.addEventListener("DOMContentLoaded", function() {

    const initializeFadeInAnimation = () => {
        const fadeInElements = document.querySelectorAll('.fade-in');
        const fadeInObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        fadeInElements.forEach(element => fadeInObserver.observe(element));
    };

    const loadHTML = (elementId, filePath, callback) => {
        const element = document.getElementById(elementId);
        if (element) {
            fetch(filePath)
                .then(response => {
                    if (!response.ok) throw new Error(`Fehler: ${filePath} nicht gefunden`);
                    return response.text();
                })
                .then(data => {
                    element.innerHTML = data;
                    if (callback) callback();
                })
                .catch(error => console.error(`Fehler beim Laden von ${filePath}:`, error));
        }
    };

    const setActiveNavLink = () => {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage || (currentPage === 'index.html' && linkHref.startsWith('index.html'))) {
                link.classList.add('active');
            }
        });
    };

    // NEU: Funktion für das mobile Menü
    const initializeMobileMenu = () => {
        const menuToggle = document.getElementById('mobile-menu-toggle');
        const navLinks = document.getElementById('main-nav-links');

        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('is-open');
                menuToggle.classList.toggle('is-active');
            });
        }
    };

    // Callbacks beim Laden des Headers anpassen
    loadHTML('header-placeholder', '_includes/_header.html', () => {
        setActiveNavLink();
        initializeMobileMenu(); // Mobile-Menü-Funktion hier aufrufen
    });

    loadHTML('footer-placeholder', '_includes/_footer.html');
    loadHTML('about-content-placeholder', '_includes/_about-content.html', initializeFadeInAnimation);
    loadHTML('projects-gallery-placeholder', '_includes/_projects-gallery.html', initializeFadeInAnimation);
    loadHTML('certificates-gallery-placeholder', '_includes/_certificates-gallery.html', initializeFadeInAnimation);
});