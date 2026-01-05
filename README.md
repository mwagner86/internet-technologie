# Portfolio-Webseite: Maximilian Wagner

Dieses Projekt ist das persönliche Web-Portfolio von Maximilian Wagner, Student des Studiengangs IT-Sicherheit an der TH Brandenburg und Informationssicherheitsexperte bei der PowerCo SE. Es dient als digitale Visitenkarte und technischer Leistungsnachweis im Bereich Web-Development und Information Security.

---

## 1. Konzept & Vision

Die Webseite kombiniert modernes Design mit den Anforderungen an ein professionelles ISMS-Consulting.

* **Fokus**: Management von Informationssicherheit (ISO 27001 / TISAX).
* **Visuelle Assets**: Zentrales Hintergrundbild und spezifische Zertifikats-Badges für ISO-Qualifikationen wurden mittels Künstlicher Intelligenz (KI) generiert.
* **Design**: Dark-Mode-Konzept mit Fokus auf Lesbarkeit und technischer Ästhetik.

---

## 2. Technologie-Stack & Features

### Kern-Technologien
* **HTML5 & CSS3**: Semantisches Markup und responsives Layout via Flexbox/Grid.
* **Vanilla JavaScript**: Modulares System zum dynamischen Laden von HTML-Komponenten (Client-side Includes).
* **Docker & Nginx**: Containerisierte Bereitstellung für konsistente Deployment-Umgebungen.

### Erweiterte Funktionalitäten
* **Interaktives Terminal**: Eine JS-basierte Shell-Simulation auf der Startseite zur interaktiven Informationsabfrage (Befehle: help, whoami, iso, tisax etc.).
* **Lightbox-Integration**: Nutzung von `fslightbox.js` zur vergrößerten Darstellung des Profilbildes und der Zertifikate ohne Seitenwechsel.
* **Markdown-Reader**: Dynamisches Rendering dieser Dokumentation direkt im Browser mittels `marked.min.js`.

### Security-Implementierung
* **Honeypot & Rate-Limiting**: Schutz des Kontaktformulars vor automatisiertem Spam.
* **XSS-Prevention**: String-Sanitization durch konsequente Nutzung der `textContent`-Property.
* **Privacy**: Lokale Einbindung aller Fonts und Verzicht auf externe Tracking-Skripte.

---

## 3. Projektstruktur

* `_includes/`: Wiederverwendbare HTML-Fragmente (Header, Footer, Content-Module).
* `css/`: Stylesheets und lokale Schriftarten (Poppins, Inter).
* `js/`: Anwendungslogik (`main.js`) und Bibliotheken (`marked.min.js`, `fslightbox.js`).
* `images/`: Bildressourcen, unterteilt in Zertifikate, Projekte und Favicons.

---

## 4. Quellen & Lizenzen

### Drittanbieter-Code
* **marked.min.js**: Markdown-Parsing.
* **fslightbox.js**: Lightbox-Funktionalität.

### KI-Generierung
* Hintergrundbild: `background_placeholder.png`
* ISO-Badges: `ISOOfficer.png`, `ISOAuditor.png`