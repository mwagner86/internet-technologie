document.addEventListener("DOMContentLoaded", function() {

    const loadHTML = (elementId, filePath) => {
        const element = document.getElementById(elementId);
        if (element) {
            fetch(filePath)
                .then(response => {
                    if (!response.ok) throw new Error(`Fehler: ${filePath} nicht gefunden`);
                    return response.text();
                })
                .then(data => {
                    element.innerHTML = data;
                    if (elementId === 'header-placeholder') {
                        setActiveNavLink();
                    }
                })
                .catch(error => console.error(`Fehler beim Laden von ${filePath}:`, error));
        }
    };

    // Alle dynamischen HTML-Teile laden
    loadHTML('header-placeholder', '_header.html');
    loadHTML('footer-placeholder', '_footer.html');
    loadHTML('about-content-placeholder', '_about-content.html');
    loadHTML('projects-gallery-placeholder', '_projects-gallery.html');
    loadHTML('certificates-gallery-placeholder', '_certificates-gallery.html');

});

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}