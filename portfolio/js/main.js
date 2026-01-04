/* main.js - Maximilian Wagner */

document.addEventListener("DOMContentLoaded", () => {

    // Intersection Observer für Fade-In Animationen
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

    // Lädt HTML-Fragmente in Container
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

    // Markiert aktiven Navigationslink basierend auf URL
    const setActiveNavLink = () => {
        const page = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.main-nav a').forEach(link => {
            if (link.getAttribute('href') === page) link.classList.add('active');
        });
    };

    // Hamburger-Menü Logik
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

    // Kontaktformular mit Honeypot, Rate-Limit und XSS-Schutz
    const initializeContactForm = () => {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const errorEl = document.getElementById('form-error');
            if (errorEl) errorEl.style.display = 'none';

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // Honeypot-Check
            if (data.honeypot) return;

            // Rate-Limiting (60s Cooldown)
            const lastSub = localStorage.getItem('last_submission_ts');
            const now = Date.now();
            if (lastSub && (now - parseInt(lastSub) < 60000)) {
                if (errorEl) {
                    errorEl.textContent = "Rate limit überschritten. Bitte kurz warten.";
                    errorEl.style.display = 'block';
                }
                return;
            }

            // Validierung E-Mail-Format
            const emailValue = String(data.email).trim();
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(emailValue)) {
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

    // XSS-sichere Darstellung der Formulardaten (Success Page)
    const displaySuccessData = () => {
        const container = document.getElementById('success-data-display');
        const raw = localStorage.getItem('contactFormData');
        if (container && raw) {
            try {
                const data = JSON.parse(raw);
                const pre = document.createElement('pre');
                pre.style.cssText = "background: #333; padding: 1rem; border-radius: 5px; overflow-x: auto;";
                // textContent verhindert Script-Injektion (DOM-XSS)
                pre.textContent = JSON.stringify(data, null, 4);
                container.appendChild(pre);
            } catch (e) {
                console.error("Datenfehler im localStorage.");
            }
        }
    };

    // Basis-Komponenten laden
    loadHTML('header-placeholder', '_includes/_header.html', () => {
        setActiveNavLink();
        initializeMobileMenu();
    });
    loadHTML('footer-placeholder', '_includes/_footer.html');

    // Inhalts-Komponenten laden
    loadHTML('about-content-placeholder', '_includes/_about-content.html', initializeFadeInAnimation);
    loadHTML('projects-gallery-placeholder', '_includes/_projects-gallery.html', initializeFadeInAnimation);
    loadHTML('certificates-gallery-placeholder', '_includes/_certificates-gallery.html', initializeFadeInAnimation);

    // Formular-Handling bei Bedarf
    if (document.getElementById('contact-form-placeholder')) {
        loadHTML('contact-form-placeholder', '_includes/_contact-form.html', () => {
            initializeContactForm();
            const form = document.getElementById('contact-form');
            if (form) form.classList.add('visible');
        });
    }

    if (document.getElementById('success-data-display')) {
        displaySuccessData();
    }
});