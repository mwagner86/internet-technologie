# Portfolio-Webseite: Maximilian Wagner

Dieses Projekt ist das persönliche Web-Portfolio von Maximilian Wagner, Student des Studiengangs IT-Sicherheit an der [Hinweis: Link zur TH Brandenburg entfernt] und Informationssicherheitsberater bei der PowerCo SE. Es demonstriert moderne Web-Entwicklung unter Berücksichtigung von Security-Best-Practices und modularer Architektur.

---

## 1. Konzept & Design

Die Webseite fungiert als digitale Visitenkarte mit Fokus auf technischer Präzision und Informationssicherheit (ISMS).

* **Design-Philosophie**: Minimalistischer Dark-Mode zur Reduzierung der kognitiven Belastung.
* **Interaktivität**:
	* **Profilbild-Lightbox**: Einbindung von `fslightbox.js` zur vergrößerten Darstellung des Profilbildes.
	* **Interaktives Terminal**: JS-basierte Shell-Simulation (`MW-OS`) auf der Startseite mit automatisiertem Sicherheits-Scan. Unterstützt Befehle wie `iso`, `tisax` und `status`.

---

## 2. Performance & Bildoptimierung

Zur Optimierung der Ladezeiten und Einhaltung von Web-Performance-Standards werden moderne Bildformate und responsive Techniken eingesetzt.

* **Format**: Alle Bildressourcen wurden in das **WebP-Format** konvertiert, um eine hohe Kompression bei minimalem Qualitätsverlust zu erzielen.
* **Responsive Images**: Einsatz des `srcset`-Attributs zur Bereitstellung verschiedener Auflösungen:
	* Desktop/Lightbox: `profilbild-800.webp` (800px)
	* Mobile: `profilbild-400.webp` (400px)
* **Browser-Steuerung**: Nutzung von `sizes` und `loading="lazy"` zur Steuerung des Browser-Verhaltens und zur Reduzierung des initialen Payloads.

---

## 3. Security & De-indexing

Ein wesentlicher Fokus liegt auf der Kontrolle über die Sichtbarkeit und den Schutz technischer Ressourcen.

* **Search Engine De-indexing**: Die Webseite ist explizit von der Indizierung in Suchmaschinen ausgeschlossen.
	* **robots.txt**: Konfiguration `Disallow: /` unterbindet das Crawling durch automatisierte Bots.
	* **Meta-Tags**: Einsatz von `<meta name="robots" content="noindex, nofollow">` in allen HTML-Dateien als sekundäre Schutzmaßnahme.
* **Kontaktformular-Schutz**:
	* **Honeypot-Verfahren**: Abwehr automatisierter Spam-Bots.
	* **Rate-Limiting**: Client-seitige Sperre via `localStorage` (60s Cooldown).
* **XSS-Protection**: Konsequente Nutzung der `textContent`-Property zur Vermeidung von DOM-basiertem Cross-Site-Scripting.

---

## 4. Projektstruktur

* **`_includes/`**: Modulare HTML-Fragmente (Header, Footer, Terminal, Legal etc.).
* **`css/`**: Zentrales Stylesheet `style.css` inklusive Responsive Design und lokaler Fonts.
* **`js/`**: Anwendungslogik `main.js` sowie Bibliotheken `marked.min.js` und `fslightbox.js`.
* **`images/`**: Optimierte WebP-Ressourcen für Zertifikate, Projekte und Profil.

---

## 5. Deployment & Tools

Das Projekt ist für den Betrieb in containerisierten Umgebungen (Docker/Nginx) optimiert.

* **Image Processing**: Generierung der Bildvarianten mittels ImageMagick:
  `magick convert input -resize 400 -quality 85 output.webp`
* **Markdown Rendering**: Dynamische Anzeige der Dokumentation über `readme.html` mittels `marked.min.js`.

## KI-Unterstützung & Attribution

Die funktionale Logik des interaktiven Terminals wurde unter Verwendung von **Google Gemini 1.5 Pro** entwickelt.

* **Umfang**: Befehls-Parser, asynchrone Simulation des Sicherheits-Scans und dynamisches DOM-Update.
* **Review**: Der generierte Code wurde manuell refactored, um die Integration in die modulare Struktur des Portfolios sicherzustellen und die Einhaltung von Sicherheitsstandards (z. B. Vermeidung von `innerHTML`) zu gewährleisten.
* **Generell**: Es wurde KI Unterstützung zum Erstellen des CSS Styles genutzt. Layout und Seitenstruktur sind Eigenkreation.