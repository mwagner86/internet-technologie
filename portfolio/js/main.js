/* **************************************************************/
/*                                                              */
/* main.js - Maximilian Wagner                                  */
/*                                                              */
/* Fremdcode-Verzeichnis:                                       */
/* - marked.min.js: Markdown-Parser                             */
/*                                                              */
/* ************************************************************ */

document.addEventListener("DOMContentLoaded", () => {

    // Initialisiert Scroll-Animationen für Elemente mit .fade-in
    const initializeFadeInAnimation = () => {
        const elements = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        elements.forEach(el => observer.observe(el));
    };

    // Lädt HTML-Fragmente in spezifizierte Container
    const loadHTML = (id, path, callback) => {
        const el = document.getElementById(id);
        if (el) {
            fetch(path)
                .then(res => {
                    if (!res.ok) throw new Error(`${path} nicht gefunden`);
                    return res.text();
                })
                .then(data => {
                    el.innerHTML = data;
                    if (callback) callback();
                })
                .catch(err => console.error(err));
        }
    };

    // Markiert den Navigationslink der aktuellen Seite als aktiv
    const setActiveNavLink = () => {
        const page = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.main-nav a').forEach(link => {
            if (link.getAttribute('href') === page) link.classList.add('active');
        });
    };

    // Steuerung des mobilen Navigationsmenüs (Hamburger)
    const initializeMobileMenu = () => {
        const toggle = document.getElementById('mobile-menu-toggle');
        const links = document.getElementById('main-nav-links');
        if (toggle && links) {
            toggle.addEventListener('click', () => {
                links.classList.toggle('is-open');
                toggle.classList.toggle('is-active');
            });
        }
    };

    // Aktualisiert das Copyright-Jahr im Footer dynamisch
    const updateFooterYear = () => {
        const yearEl = document.getElementById('current-year');
        if (yearEl) yearEl.textContent = String(new Date().getFullYear());
    };

    // Verarbeitet das Kontaktformular inklusive Honeypot und Rate-Limiting
    const initializeContactForm = () => {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const errorEl = document.getElementById('form-error');
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // Honeypot-Prüfung zur Bot-Abwehr
            if (data.honeypot) return;

            // Client-seitiges Rate-Limiting (60s Sperre)
            const lastSub = localStorage.getItem('last_submission_ts');
            const now = Date.now();
            if (lastSub && (now - parseInt(lastSub) < 60000)) {
                if (errorEl) {
                    errorEl.textContent = "Rate Limit aktiv. Bitte eine Minute warten.";
                    errorEl.style.display = 'block';
                }
                return;
            }

            // Validierung des E-Mail-Formats via Regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(String(data.email))) {
                if (errorEl) {
                    errorEl.textContent = "Ungültiges E-Mail-Format.";
                    errorEl.style.display = 'block';
                }
                return;
            }

            delete data.honeypot;
            localStorage.setItem('contactFormData', JSON.stringify(data));
            localStorage.setItem('last_submission_ts', String(now));
            window.location.href = 'success.html';
        });
    };

    // Rendert README.md mittels marked.js in den Dokumentations-Container
    const renderMarkdown = () => {
        const container = document.getElementById('markdown-content');
        const parser = window.marked;
        if (container && typeof parser !== 'undefined') {
            fetch('README.md')
                .then(res => res.text())
                .then(md => {
                    container.innerHTML = parser.parse(md);
                    container.classList.add('visible');
                })
                .catch(err => console.error("Markdown-Fehler:", err));
        }
    };

    // Initialisierung der Basis-Komponenten
    loadHTML('header-placeholder', '_includes/_header.html', () => {
        setActiveNavLink();
        initializeMobileMenu();
    });

    loadHTML('footer-placeholder', '_includes/_footer.html', () => {
        updateFooterYear();
    });

    // Laden der Inhalts-Fragmente mit Animationen
    loadHTML('about-content-placeholder', '_includes/_about-content.html', initializeFadeInAnimation);
    loadHTML('projects-gallery-placeholder', '_includes/_projects-gallery.html', initializeFadeInAnimation);
    loadHTML('certificates-gallery-placeholder', '_includes/_certificates-gallery.html', initializeFadeInAnimation);

    // Bedingte Initialisierung seitenabhängiger Funktionen
    if (document.getElementById('contact-form-placeholder')) {
        loadHTML('contact-form-placeholder', '_includes/_contact-form.html', initializeContactForm);
    }

    if (document.getElementById('markdown-content')) {
        renderMarkdown();
    }
});