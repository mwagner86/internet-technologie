# README - Aufgabe 10 (Optimierung & Bugfixing)

## Über das Projekt

* **Original-Autor:** Micha Kodalle
* **Optimierung durch:** Maximilian Wagner
* **Datum:** 21.11.2025
* **Beschreibung:** Debugging, Reparatur und Performance-Optimierung der bestehenden Webvisitenkarte im Rahmen von Aufgabe 10 (Modul Web-Programmierung).

---

## Identifizierte Fehler (Log)

Vor der Bearbeitung wurden folgende Fehler mittels Browser-Konsole (Firefox) und W3C-Validator diagnostiziert:

### Browser Konsole & Netzwerk
* Uncaught TypeError: can't access property "style", heading is undefined (main.js:38:26)
* Laden von gemischten aktiven Inhalten "http://api.openweathermap.org/..." wurde blockiert.
* **XHRGET Error (NS_BINDING_ABORTED):** Der Zugriff auf die Bilddatei im Lightbox-Link schlug fehl (404 Not Found), da die Datei `Mitarbeiterfotos_THB_220628_020.jpg` am angegebenen Pfad nicht gefunden wurde.

### W3C Validator
* Error: Attribute type not allowed on element meta at this point.
* Error: Element meta is missing one or more of the following attributes: http-equiv, itemprop, name, property.
* Info: Trailing slash on void elements has no effect and interacts badly with unquoted attribute values.
* Warning: The type attribute is unnecessary for JavaScript resources.
* Error: style element between head and body.
* Fatal Error: Cannot recover after last error. Any further errors will be ignored.

---

## Durchgeführte Änderungen & Fixes

Ziel der Überarbeitung war es, Fehler in der Konsole zu beheben, den Code W3C-konform zu machen und die Ladezeiten zu optimieren.

### 1. HTML Validierung & Fixes
* **Meta-Tags korrigiert:** Das invalide Attribut type="author" wurde zu name="author" geändert.
* **Struktur bereinigt:** Der style-Block, der fehlerhaft zwischen head und body stand, wurde entfernt und in die main.css integriert.
* **Code-Cleanup:** Veraltete Attribute wie type="application/javascript" und unnötige Trailing Slashes (/>) wurden entfernt.
* **Semantik:** Die Überschriften-Hierarchie wurde korrigiert (h1 im Skills-Bereich zu h2 geändert).
* **Broken Link & Dateistruktur behoben:**
	* Die Bilddatei `Mitarbeiterfotos_THB_220628_020.jpg` wurde in `Foto_Micha_Kodalle.jpg` umbenannt.
	* Die Datei wurde in den korrekten Unterordner `assets/img/` verschoben.
	* Der HTML-Code (`<a href="...">`) wurde aktualisiert, um auf den neuen Dateinamen zu verweisen.

### 2. JavaScript Debugging
* **TypeError behoben:** Der Fehler "heading is undefined" in main.js wurde gelöst. Das Skript suchte nach einem h2-Tag, das im HTML fälschlicherweise als h1 ausgezeichnet war.
* **Mixed Content Fehler behoben:** Der API-Aufruf in weather.js erfolgte über http:// und wurde von Browsern blockiert. Die URL wurde auf https:// aktualisiert.

### 3. Performance & Optimierung
* **jQuery entfernt:** Das weather.js Skript wurde komplett auf Vanilla JS (Fetch API) umgeschrieben. Dadurch konnte die Einbindung der jQuery-Bibliothek (ca. 85 KB) entfernt werden, was die Ladezeit signifikant verbessert.
* **CSS Konsolidierung:**
	* Die Dateien `headlines.css` und `main2.css` (zusätzliche Styles) wurden aufgelöst und in `main.css` integriert, um HTTP-Requests zu sparen.
	* Inline-Styles wurden in die CSS-Datei ausgelagert.
	* Fehlende Größenbeschränkung für das THB-Logo im Footer wurde ergänzt.
	* Die CSS-Datei wurde bereinigt und zusammengefasst.

---

## Quellennachweis

### Code & Bibliotheken
* **Wetterdaten:** OpenWeatherMap API (Abruf via HTTPS)
* **Lightbox:** fslightbox
* **Entfernt:** jQuery (wurde durch nativen Code ersetzt)
* **JavaScript-Bibliothek (Lokal):**
	* `marked.min.js`: Wird verwendet, um diese Dokumentation (`readme.html`) zu rendern.
	* **Lizenz:** MIT License.
	* **Quelle:** [Marked.js auf GitHub](https://github.com/markedjs/marked).

### Bilder
* **Logo THB:** Technische Hochschule Brandenburg
* **Portrait:** Eigenes Material

### Schriften
* Es werden keine externen Webfonts geladen (System Fonts Fallback auf Helvetica/Arial).

---

## Installation & Nutzung

1.  Öffnen Sie die Datei index.html in einem modernen Webbrowser.
2.  **Hinweis:** Für den Abruf der aktuellen Wetterdaten im Footer ist eine aktive Internetverbindung erforderlich.