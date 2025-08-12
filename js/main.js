document.addEventListener("DOMContentLoaded", function() {

    /**
     * Initialisiert den Intersection Observer, um Animationen zu starten,
     * wenn Elemente in den sichtbaren Bereich scrollen.
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
        }, { threshold: 0.1 }); // 10% des Elements muss sichtbar sein

        fadeInElements.forEach(element => {
            fadeInObserver.observe(element);
        });
    };

    /**
     * Lädt HTML-Inhalte aus einer Datei in ein bestimmtes Element.
     * Führt optional eine Callback-Funktion nach dem Laden aus.
     * @param {string} elementId - Die ID des Elements, in das der Inhalt geladen wird.
     * @param {string} filePath - Der Pfad zur HTML-Datei.
     * @param {function} callback - Eine Funktion, die nach dem erfolgreichen Laden ausgeführt wird.
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
                    // Führe den Callback aus, wenn er existiert (z.B. für Animationen)
                    if (callback) {
                        callback();
                    }
                })
                .catch(error => console.error(`Fehler beim Laden von ${filePath}:`, error));
        }
    };

    // Funktion, um die aktive Navigation zu setzen
    const setActiveNavLink = () => {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            if (linkPage === currentPage || (currentPage === 'index.html' && link.getAttribute('href').includes('index.html'))) {
                link.classList.add('active');
            }
        });
    };

    // Alle dynamischen HTML-Teile laden und Callbacks übergeben
    loadHTML('header-placeholder', '_includes/_header.html', setActiveNavLink);
    loadHTML('footer-placeholder', '_includes/_footer.html');
    loadHTML('about-content-placeholder', '_includes/_about-content.html', initializeFadeInAnimation);
    loadHTML('projects-gallery-placeholder', '_includes/_projects-gallery.html', initializeFadeInAnimation);
    loadHTML('certificates-gallery-placeholder', '_includes/_certificates-gallery.html', initializeFadeInAnimation);

});