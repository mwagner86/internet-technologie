// Aufruf der Funktionen erst wenn DOM geladen (Sicherheit & Performance)
document.addEventListener('DOMContentLoaded', () => {
    build_copyright();
    change_heading();
});

/**
 * Erzeugt eine Copyright Notice und bindet sie im Footer ein
 */
function build_copyright() {
    // Footer suchen (querySelector ist performanter als getElementsByTagName[0])
    const footer = document.querySelector("footer");
    const current_year = new Date().getFullYear();

    // Optimierung: Template Literal statt String-Verkettung
    const copyright_txt = `Made with ❤️ by Micha Kodalle \t © ${current_year}`;

    const copyright_el = document.createElement('div');
    copyright_el.innerText = copyright_txt;
    copyright_el.classList.add('copyright');

    footer.appendChild(copyright_el);
}

/**
 * Ändert die Farbe der Skills-Überschrift bei Klick
 */
function change_heading() {
    const skills = document.getElementById('skills');
    const heading = skills.getElementsByTagName('h2')[0];

    if (!heading) {
        console.error("Heading im Skills-Bereich nicht gefunden!");
        return;
    }

    heading.addEventListener('click', () => {
        // Minimal-invasiver Toggle: Prüft auf Inline-Style
        if (heading.style.color === 'red') {
            heading.style.color = ''; // Zurücksetzen auf CSS-Standard
        } else {
            heading.style.color = 'red';
        }
    });
}