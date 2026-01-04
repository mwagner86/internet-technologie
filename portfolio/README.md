# Portfolio-Webseite: Maximilian Wagner

Dieses Projekt ist das persönliche Web-Portfolio von Maximilian Wagner, Student des Studiengangs IT-Sicherheit an der [Hinweis: Link zur TH Brandenburg entfernt] und Softwareentwickler. Es demonstriert moderne Web-Entwicklung unter Berücksichtigung von Security-Best-Practices und modularer Architektur ohne den Einsatz von schweren Frameworks.

---

## 1. Konzept & Design

Die Webseite fungiert als digitale Visitenkarte mit Fokus auf technischer Präzision und Informationssicherheit.

* **Design-Philosophie**: Ein minimalistischer Dark-Mode sorgt für eine professionelle Ästhetik und reduziert die kognitive Belastung.
* **Farbpalette**:
	* Hintergrund: `#1a1a1a`
	* Text: `#f0f0f0`
	* Akzent: `#00ddb3` (Primary Green)
* **Typografie**: Lokale Einbindung der Schriftarten `Poppins` (Headings) und `Inter` (Body) zur Gewährleistung der DSGVO-Konformität und Performance.

---

## 2. Technologie-Stack & Sicherheits-Features

Der Fokus liegt auf handgeschriebenem Code und der Nutzung nativer Browser-APIs (Vanilla Web-Stack).

### Web-Technologien
* **HTML5 & CSS3**: Nutzung von semantischen Tags sowie CSS Grid und Flexbox für ein vollständig responsives Layout.
* **Vanilla JavaScript (Client-side Includes)**: Realisierung des DRY-Prinzips (Don't Repeat Yourself) durch ein modulares System. Wiederkehrende Komponenten wie Header und Footer werden via `fetch`-API dynamisch in die Seiten geladen.
* **Markdown-Integration**: Einbindung von `marked.min.js`, um die technische Dokumentation (`README.md`) direkt im Browser innerhalb der `readme.html` zu rendern.

### Security & Hardening
* **Kontaktformular-Schutz**:
	* **Honeypot-Verfahren**: Abwehr automatisierter Bots durch versteckte Eingabefelder.
	* **Rate-Limiting**: Client-seitige Sperre via `localStorage`, um Formular-Spam zu verhindern.
	* **XSS-Protection**: Konsequente Nutzung von `textContent` beim Rendern von Benutzereingaben zur Vermeidung von DOM-basiertem Cross-Site-Scripting.
* **Asset-Optimierung**: Reduzierung der Favicon-Struktur auf ein essenzielles Set (`.ico`, `32x32`, `180x180`) und Verzicht auf veraltete `manifest.json` oder `browserconfig.xml` zur Verringerung der Angriffsfläche und Komplexität.
* **Security-Kommunikation**: Integration eines öffentlichen PGP-Keys im Footer zur verschlüsselten Kontaktaufnahme.

---

## 3. Projektstruktur

* **`_includes/`**: Modulare HTML-Fragmente (`_header.html`, `_footer.html`, etc.).
* **`css/`**: Enthält die `style.css` und lokale Schriftarten im Unterordner `fonts/`.
* **`js/`**: Zentrale Logik (`main.js`) und externe Bibliotheken (`marked.min.js`).
* **`images/`**: Bildressourcen, unterteilt in Projektscreenshots, Zertifikats-Badges und Favicons.
* **`index.html`**: Zentrale Einstiegsseite.
* **`readme.html`**: Dynamischer Viewer für diese Dokumentation.

---

## 4. Deployment & Installation

Das Projekt ist für den Betrieb in einer containerisierten Umgebung optimiert.

1.  **Voraussetzungen**: Docker und Docker Compose müssen installiert sein.
2.  **Starten**:
	```bash
	docker-compose up -d
	```
	Der integrierte Nginx-Container liefert die Applikation standardmäßig auf Port 80 aus.

---

## 5. Fremdcode-Verzeichnis

Zur Wahrung der Transparenz werden folgende externe Ressourcen genutzt:
* **`marked.min.js`**: Markdown-Parser für die Web-Darstellung der Dokumentation.