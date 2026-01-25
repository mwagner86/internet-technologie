# Portfolio-Webseite: Maximilian Wagner

Dieses Projekt ist das persönliche Web-Portfolio von Maximilian Wagner, Student des Studiengangs IT-Sicherheit an der Technischen Hochschule Brandenburg und Informationssicherheitsspezialist bei der PowerCo SE. Es demonstriert moderne Web-Entwicklung unter Berücksichtigung von Security-Best-Practices und modularer Architektur.

---

## 1. Konzept & Design

Die Webseite fungiert als digitale Visitenkarte mit Fokus auf technischer Präzision und Informationssicherheit (ISMS).

* **Design-Philosophie**: Minimalistischer Dark-Mode zur Reduzierung der kognitiven Belastung.
* **Interaktivität**:
	* **Profilbild-Lightbox**: Einbindung von `fslightbox.js` zur vergrößerten Darstellung des Profilbildes.
	* **Interaktives Terminal**: JS-basierte Shell-Simulation (`MW-OS`) auf der Startseite mit automatisiertem Sicherheits-Scan. Unterstützt Befehle wie `iso`, `tisax` und `status`.
	* **Technische Detailseiten**: Tiefenanalyse von Projekten (z. B. Cub3D) inklusive mathematischer Formeldarstellung mittels **MathJax** zur Visualisierung technischer Konzepte.

---

## 2. Performance & Bildoptimierung

Zur Optimierung der Ladezeiten und Einhaltung von Web-Performance-Standards werden moderne Bildformate und responsive Techniken eingesetzt.

* **Format**: Alle Bildressourcen wurden in das **WebP-Format** konvertiert, um eine hohe Kompression bei minimalem Qualitätsverlust zu erzielen.
* **Batch-Processing**: Konvertierung von PNG-Ressourcen mittels FFmpeg:
  `ffmpeg -i input.png -q:v 80 output.webp`
* **Responsive Images**: Einsatz des `srcset`-Attributs zur Bereitstellung verschiedener Auflösungen für unterschiedliche Endgeräte.
* **Browser-Steuerung**: Nutzung von `loading="lazy"` zur Reduzierung des initialen Payloads durch verzögertes Laden von Bildern außerhalb des Sichtfelds.

---

## 3. Security & De-indexing

Ein wesentlicher Fokus liegt auf der Kontrolle über die Sichtbarkeit und dem Schutz der Ressourcen.

* **Search Engine De-indexing**: Die Webseite ist explizit von der Indizierung in Suchmaschinen ausgeschlossen.
	* **robots.txt**: Konfiguration `Disallow: /` unterbindet das Crawling durch automatisierte Bots.
	* **Meta-Tags**: Einsatz von `<meta name="robots" content="noindex, nofollow">` in allen HTML-Dateien.
* **Kontaktformular-Schutz**:
	* **Rate-Limiting**: Client-seitige Sperre via `localStorage` (60s Cooldown) zur Vermeidung von automatisiertem Massenversand.
* **XSS-Protection**: Konsequente Nutzung der `textContent`-Property bei dynamischen Inhalten zur Vermeidung von DOM-basiertem Cross-Site-Scripting.

---

## 4. Projektstruktur & Modularität

Die Architektur unterstützt eine saubere Trennung von Inhalten und Logik.

* **`_includes/`**: Modulare HTML-Fragmente (Header, Footer, Terminal, Kontaktformular etc.).
* **`projects/`**: Unterverzeichnis für detaillierte Projektdokumentationen.
* **Path-Management**: Einsatz von `window.APP_CONFIG.basePath` in der `main.js`. Diese Logik ermöglicht das korrekte Laden von Fragmenten über verschiedene Verzeichnistiefen hinweg und passt interne Links in den geladenen Modulen automatisch mittels Regular Expressions an.
* **`css/`**: Zentrales Stylesheet `style.css` inklusive Responsive Design und lokaler Fonts zur Einhaltung der DSGVO.
* **`js/`**: Anwendungslogik `main.js` sowie Bibliotheken `marked.min.js`, `fslightbox.js` und **MathJax**.

---

## 5. Deployment & Tools

* **Image Processing**: Generierung der Bildvarianten mittels ImageMagick und FFmpeg.
* **Mathematical Rendering**: Clientseitiges Rendering komplexer Formeln auf der Cub3D-Detailseite mittels LaTeX-Syntax.
* **Markdown Rendering**: Dynamische Anzeige der Dokumentation über `readme.html` mittels `marked.min.js`.

## KI-Unterstützung & Attribution

Die funktionale Logik des interaktiven Terminals (`MW-OS`) wurde unter Verwendung von **Google Gemini 1.5 Pro** entwickelt.

* **Umfang**: Befehls-Parser, asynchrone Simulation des Sicherheits-Scans und dynamische DOM-Updates.
* **Review**: Der Code wurde manuell refactored, um die Integration in die modulare Struktur sicherzustellen und die Einhaltung technischer Standards zu gewährleisten.
* **Allgemein**: KI-Unterstützung wurde punktuell zur Optimierung von CSS-Styles und zur Fehleranalyse in der Heading-Hierarchie genutzt. Layout und Seitenarchitektur sind Eigenkreationen.