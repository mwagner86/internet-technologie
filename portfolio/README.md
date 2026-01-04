# Portfolio-Webseite: Maximilian Wagner

Dieses Projekt ist das persönliche Web-Portfolio von Maximilian Wagner, Student des Studiengangs IT-Sicherheit an der [Hinweis: Link zur TH Brandenburg entfernt] und Informationssicherheitsberater bei der PowerCo SE. Es demonstriert moderne Web-Entwicklung unter Berücksichtigung von Security-Best-Practices und modularer Architektur.

---

## 1. Konzept & Design

Die Webseite fungiert als digitale Visitenkarte mit Fokus auf technischer Präzision und Informationssicherheit (ISMS).

* **Design-Philosophie**: Ein minimalistischer Dark-Mode zur Reduzierung der kognitiven Belastung.
* **Interaktivität**:
	* **Profilbild-Lightbox**: Einbindung von `fslightbox.js` zur vergrößerten Darstellung des Profilbildes.
	* **Visual Feedback**: Interaktiver Hover-Effekt (Brightness-Filter) auf dem Profilbild zur Signalisierung der Klickbarkeit.
* **Typografie**: Lokale Einbindung der Schriftarten `Poppins` (Headings) und `Inter` (Body) zur Gewährleistung der DSGVO-Konformität.

---

## 2. Technologie-Stack & Sicherheits-Features

### Web-Technologien
* **HTML5 & CSS3**: Nutzung von semantischen Tags sowie CSS Grid und Flexbox für ein vollständig responsives Layout.
* **Vanilla JavaScript (Client-side Includes)**: Realisierung des DRY-Prinzips durch ein modulares System. Komponenten (Header, Footer, Content) werden via `fetch`-API dynamisch geladen.
* **Interaktives Terminal**: JS-basierte Shell-Simulation (`MW-OS`) auf der Startseite mit automatisiertem Sicherheits-Scan beim Initialisieren. Unterstützt Befehle wie `iso`, `tisax` und `status`.
* **Markdown-Integration**: Nutzung von `marked.min.js` zum Rendern dieser Dokumentation.

### Security & Hardening
* **Kontaktformular-Schutz**:
	* **Honeypot-Verfahren**: Abwehr automatisierter Bots.
	* **Rate-Limiting**: Client-seitige Sperre via `localStorage` (60s Cooldown).
	* **XSS-Protection**: Konsequente Nutzung von `textContent` zur Vermeidung von DOM-basiertem Cross-Site-Scripting.
* **Datenschutz**: Verzicht auf externe CDN-Ressourcen; alle Bibliotheken und Assets werden lokal gehostet.

---

## 3. Projektstruktur

* **`_includes/`**: Modulare HTML-Fragmente (`_header.html`, `_about-content.html`, `_terminal.html`, `_legal.html` etc.).
* **`css/`**: Zentrales Stylesheet `style.css` und lokale Schriftarten.
* **`js/`**: Anwendungslogik `main.js` sowie Bibliotheken `marked.min.js` und `fslightbox.js`.
* **`images/`**: Bildressourcen, unterteilt in Zertifikats-Badges, Projektscreenshots und Favicons.

---

## 4. Deployment & Installation

Das Projekt ist für den Betrieb in einer containerisierten Umgebung optimiert.

1.  **Voraussetzungen**: Docker und Docker Compose.
2.  **Starten**:
	```bash
	docker-compose up -d
	```
	Die Auslieferung erfolgt standardmäßig über einen Nginx-Container auf Port 80.

---

## 5. Quellen & Assets

### Fremdcode
* **`marked.min.js`**: Markdown-Parser.
* **`fslightbox.js`**: Lightbox-Komponente.

### KI-generierte Ressourcen
* **Zertifikats-Badges**: Badges für "TÜV ISO 27001 Officer" und "TÜV ISO 27001 Auditor" in der Roadmap-Sektion.
* **Hintergrundbild**: Das globale Hintergrundbild (`background_placeholder.png`) wurde mittels KI generiert.