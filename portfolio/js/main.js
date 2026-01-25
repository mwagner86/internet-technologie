/* main.js - Maximilian Wagner */

document.addEventListener("DOMContentLoaded", () => {

    // Extraktion des Basispfads für Unterseiten (aus window.APP_CONFIG)
    const projectBase = window.APP_CONFIG?.basePath || '';

    // Observer für Scroll-Animationen (.fade-in)
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

    // Zentrale Ladefunktion für HTML-Fragmente inklusive Pfad-Korrektur
    const loadHTML = (id, path, callback) => {
        const el = document.getElementById(id);
        if (el) {
            fetch(path)
                .then(res => {
                    if (!res.ok) throw new Error(`${path} nicht gefunden`);
                    return res.text();
                })
                .then(data => {
                    if (projectBase) {
                        data = data.replace(/href="(?!http|#)([^"]+)"/g, `href="${projectBase}$1"`);
                        data = data.replace(/src="(?!http|#)([^"]+)"/g, `src="${projectBase}$1"`);
                    }
                    el.innerHTML = data;
                    if (callback) callback();
                })
                .catch(() => console.error(`Fehler beim Laden von ${path}`));
        }
    };

    // Navigation: Aktiven Link markieren
    const setActiveNavLink = () => {
        const page = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.main-nav a').forEach(link => {
            const href = link.getAttribute('href').split('/').pop();
            if (href === page) link.classList.add('active');
        });
    };

    // Mobiles Menü (Hamburger)
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

    // Dynamisches Copyright-Jahr
    const updateFooterYear = () => {
        const yearEl = document.getElementById('current-year');
        if (yearEl) yearEl.textContent = String(new Date().getFullYear());
    };

    // Kontaktformular: Validierung und LocalStorage
    const initializeContactForm = () => {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const errorEl = document.getElementById('form-error');
            if (errorEl) errorEl.style.display = 'none';

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            const lastSub = localStorage.getItem('last_submission_ts');
            const now = Date.now();
            if (lastSub && (now - parseInt(lastSub) < 60000)) {
                if (errorEl) {
                    errorEl.textContent = "Rate Limit aktiv. Bitte eine Minute warten.";
                    errorEl.style.display = 'block';
                }
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(String(data.email))) {
                if (errorEl) {
                    errorEl.textContent = "Ungültiges E-Mail-Format.";
                    errorEl.style.display = 'block';
                }
                return;
            }

            localStorage.setItem('contactFormData', JSON.stringify(data));
            localStorage.setItem('last_submission_ts', String(now));
            window.location.href = projectBase + 'success.html';
        });
    };

    // JSON-Anzeige auf der Erfolgsseite
    const displaySuccessData = () => {
        const container = document.getElementById('success-data-display');
        const raw = localStorage.getItem('contactFormData');
        if (container && raw) {
            try {
                const data = JSON.parse(raw);
                const pre = document.createElement('pre');
                pre.style.cssText = "background: #2a2a2a; padding: 1.5rem; border-radius: 8px; text-align: left; color: #00ddb3; overflow-x: auto;";
                pre.textContent = JSON.stringify(data, null, 4);
                container.innerHTML = '';
                container.appendChild(pre);
            } catch {
                console.error("JSON Parse Error");
            }
        }
    };

    // Markdown-Rendering für README.md
    const renderMarkdown = () => {
        const container = document.getElementById('markdown-content');
        if (container && typeof window.marked !== 'undefined') {
            fetch(projectBase + 'README.md')
                .then(res => res.text())
                .then(md => {
                    container.innerHTML = window.marked.parse(md);
                    container.classList.add('visible');
                })
                .catch(() => console.error("Markdown Fetch Error"));
        }
    };

    // Interaktives Terminal mit Start-Scan
    const initializeTerminal = () => {
        const input = document.getElementById('terminal-input');
        const output = document.getElementById('terminal-output');
        const terminalWindow = document.querySelector('.terminal-window');
        if (!input || !output) return;

        terminalWindow.addEventListener('click', () => input.focus());

        const commands = {
            'help': 'Available: help, whoami, ls, status, iso, tisax, clear, exit',
            'whoami': 'Maximilian Wagner - IT-Security Professional @ PowerCo SE. Focus: ISMS (ISO 27001 / TISAX).',
            'ls': 'about.html  projects.html  certificates.html  contact.html  README.md',
            'status': 'System: Optimal. Firewall: Active. ISO 27001 Compliance: Auditing in progress.',
            'iso': 'ISO/IEC 27001: Standard for Information Security Management Systems (ISMS).',
            'tisax': 'TISAX: Automotive security assessment exchange based on VDA ISA.',
            'exit': 'Navigation active. Use the menu above.',
            'clear': 'CLEAR'
        };

        const printLine = (text, className = 'terminal-line', delay = 0) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    const line = document.createElement('div');
                    line.className = className;
                    line.textContent = text;
                    output.appendChild(line);
                    output.scrollTop = output.scrollHeight;
                    resolve();
                }, delay);
            });
        };

        const runStartupScan = async () => {
            input.disabled = true;
            output.innerHTML = '';
            await printLine('Initializing MW-OS v1.0.2...', 'terminal-line', 400);
            await printLine('Loading ISO 27001 security policies...', 'terminal-line', 600);
            await printLine('Verifying TISAX maturity levels...', 'terminal-line', 400);
            await printLine('Scanning network infrastructure...', 'terminal-line', 800);
            await printLine('SOC Connectivity: ESTABLISHED', 'terminal-line', 300);
            await printLine('Integrity Check: PASSED', 'terminal-line', 300);
            await printLine('---------------------------------------', 'terminal-line', 100);
            await printLine('Welcome, Maximilian. System is ready.', 'terminal-line', 400);
            input.disabled = false;
            input.focus();
        };

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const val = input.value.toLowerCase().trim();
                if (val === 'clear') {
                    output.innerHTML = '';
                } else if (val !== '') {
                    const echo = document.createElement('div');
                    echo.className = 'terminal-line';
                    echo.innerHTML = `<span style="color: #fff;">$ ${val}</span>`;
                    output.appendChild(echo);

                    const response = document.createElement('div');
                    response.className = 'terminal-response';
                    response.textContent = commands[val] || `Unknown command: ${val}`;
                    output.appendChild(response);
                }
                input.value = '';
                output.scrollTop = output.scrollHeight;
            }
        });

        runStartupScan().catch(() => console.error("Terminal Scan failed"));
    };

    loadHTML('header-placeholder', projectBase + '_includes/_header.html', () => {
        setActiveNavLink();
        initializeMobileMenu();
    });

    if (document.getElementById('about-content-placeholder')) {
        loadHTML('about-content-placeholder', projectBase + '_includes/_about-content.html', initializeFadeInAnimation);
    }

    if (document.getElementById('projects-gallery-placeholder')) {
        loadHTML('projects-gallery-placeholder', projectBase + '_includes/_projects-gallery.html', initializeFadeInAnimation);
    }

    if (document.getElementById('certificates-gallery-placeholder')) {
        loadHTML('certificates-gallery-placeholder', projectBase + '_includes/_certificates-gallery.html', initializeFadeInAnimation);
    }

    if (document.getElementById('terminal-placeholder')) {
        loadHTML('terminal-placeholder', projectBase + '_includes/_terminal.html', () => {
            initializeTerminal();
            initializeFadeInAnimation();
        });
    }

    if (document.getElementById('contact-form-placeholder')) {
        loadHTML('contact-form-placeholder', projectBase + '_includes/_contact-form.html', () => {
            initializeContactForm();
            initializeFadeInAnimation();
        });
    }

    loadHTML('footer-placeholder', projectBase + '_includes/_footer.html', updateFooterYear);

    if (document.getElementById('success-data-display')) displaySuccessData();
    if (document.getElementById('markdown-content')) renderMarkdown();
});