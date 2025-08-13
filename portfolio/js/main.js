/* **************************************************************/
/*                                                              */
/* __  __    __        __                                       */
/* |  \/  |   \ \      / /_ _  __ _ _ __   ___ _ __             */
/* | |\/| |    \ \ /\ / / _` |/ _` | '_ \ / _ \ '__|            */
/* | |  | |_    \ V  V / (_| | (_| | | | |  __/ |               */
/* |_|  |_(_)    \_/\_/ \__,_|\__, |_| |_|\___|_|               */
/*                                                              */
/* Project: Portfolio Website                                   */
/* File: main.js                                                */
/* Author: Maximilian Wagner                                    */
/* Creation date: 2025-08-13                                    */
/*                                                              */
/* ************************************************************ */

document.addEventListener("DOMContentLoaded", function() {

    /**
     * Initialisiert den Intersection Observer, um für Elemente mit der Klasse
     * '.fade-in' eine Animation auszulösen, wenn sie in den sichtbaren
     * Bereich scrollen.
     */
    const initializeFadeInAnimation = () => {
        const fadeInElements = document.querySelectorAll('.fade-in');
        const fadeInObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Animation nur einmal ausführen
                }
            });
        }, { threshold: 0.1 }); // Startet bei 10% Sichtbarkeit
        fadeInElements.forEach(element => fadeInObserver.observe(element));
    };

    /**
     * Lädt externen HTML-Code in ein Container-Element auf der Seite.
     * Führt nach erfolgreichem Laden eine optionale Callback-Funktion aus.
     */
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
                    if (callback) callback(); // Callback ausführen, falls vorhanden
                })
                .catch(error => console.error(`Fehler beim Laden von ${filePath}:`, error));
        }
    };

    /**
     * Setzt die CSS-Klasse '.active' für den Navigationslink, der zur
     * aktuell angezeigten Seite passt.
     */
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

    /**
     * Fügt dem Hamburger-Icon einen Event-Listener hinzu, um das mobile
     * Navigationsmenü ein- und auszublenden.
     */
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

    // --- Initialisierung der Seite ---
    // Lädt alle wiederverwendbaren HTML-Komponenten und führt anschließend
    // die notwendigen Skripte für diese Komponenten aus.

    loadHTML('header-placeholder', '_includes/_header.html', () => {
        setActiveNavLink();
        initializeMobileMenu();
    });

    loadHTML('footer-placeholder', '_includes/_footer.html');
    loadHTML('about-content-placeholder', '_includes/_about-content.html', initializeFadeInAnimation);
    loadHTML('projects-gallery-placeholder', '_includes/_projects-gallery.html', initializeFadeInAnimation);
    loadHTML('certificates-gallery-placeholder', '_includes/_certificates-gallery.html', initializeFadeInAnimation);
});