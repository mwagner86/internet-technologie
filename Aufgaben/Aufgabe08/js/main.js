// Warten, bis das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', function() {

    // Copyright-Hinweis

    function createCopyrightNotice() {
        const currentYear = new Date().getFullYear();

        const copyrightText = `Made with 🍺 © ${currentYear} Maximilian Wagner`;

        const copyrightElement = document.createElement('p');

        copyrightElement.textContent = copyrightText;
        copyrightElement.id = 'copyright-notice';

        const footer = document.getElementById('kontakt');
        if (footer) {
            footer.appendChild(copyrightElement);
        } else {
            console.error('Footer-Element (id="kontakt") nicht gefunden.');
        }
    }

    // Event-Listener für Überschriften

    function addHeadlineClickListener() {
        const headlines = document.querySelectorAll('.main-wrapper h1, .main-wrapper h2');

        if (headlines.length > 0) {
            headlines.forEach(headline => {
                headline.addEventListener('click', function() {
                    this.style.color = '#dc3545';
                });
            });
        } else {
            console.error('Keine Überschriften (h1, h2) im .main-wrapper gefunden.');
        }
    }
    // --- Funktionen aufrufen ---

    createCopyrightNotice();
    addHeadlineClickListener();

});