# Portfolio-Webseite: Maximilian Wagner

Dieses Projekt ist das persönliche Web-Portfolio von Maximilian Wagner, Student des Studiengangs IT-Sicherheit an der TH Brandenburg und Softwareentwickler. Es wurde im Rahmen des Moduls "Internet-Technologie" erstellt und wird auf einem privaten Homeserver gehostet.

---

## 1. Konzept & Vision

Die Webseite dient als professionelle digitale Visitenkarte. Sie präsentiert nicht nur meine Fähigkeiten und Projekte, sondern demonstriert auch meine Spezialisierung im Bereich der IT-Sicherheit und meine Kompetenz in der modernen Webentwicklung.

* **Leitidee: "Präzision & Vertrauen"**
  Das Design ist bewusst klar, strukturiert und technisch auf den Punkt gebracht. Es spiegelt die analytische und präzise Arbeitsweise wider, die in der IT-Sicherheit entscheidend ist. Ein Dark-Mode-First-Ansatz schont die Augen und rückt Inhalte wie Code-Beispiele und Zertifikate in den Fokus.

* **Farb- und Schriftkonzept**
	* **Farbpalette:** Ein professioneller Dark-Mode mit `#1a1a1a` (Hintergrund), `#f0f0f0` (Text) und `#00ddb3` (Akzentfarbe).
	* **Typografie:** `Poppins` für Überschriften und `Inter` für Fließtext sorgen für ein modernes und gut lesbares Schriftbild.

---

## 2. Technologie-Stack & Architektur

Der Fokus liegt auf handgeschriebenem, sauberem Code, um die fundamentalen Fähigkeiten zu demonstrieren, ohne auf große Frontend-Frameworks zurückzugreifen.

* **HTML5 & CSS3:** Semantische HTML-Tags und modernes CSS (Flexbox, Grid) bilden die Grundlage für ein responsives und zugängliches Layout.
* **Vanilla JavaScript (Client-seitige Inklusion):** Um Code-Redundanz zu vermeiden (DRY-Prinzip), wird ein modulares System verwendet. Wiederkehrende HTML-Blöcke (Header, Footer, etc.) sind in separate Dateien im `_includes`-Ordner ausgelagert. Ein zentrales JavaScript (`js/main.js`) lädt diese Blöcke dynamisch zur Laufzeit mit der `fetch`-API in die Haupt-HTML-Seiten. Dies simuliert die Arbeitsweise eines statischen Seitengenerators mit reinen Bordmitteln.
* **Deployment:** Die Webseite wird über einen **Nginx-Container** ausgeliefert, der via **Docker Compose** auf einem privaten Homeserver verwaltet wird.
* **Favicon & App-Manifest:** Eine umfassende Sammlung von Favicons sowie eine `manifest.json` und `browserconfig.xml` stellen eine professionelle Darstellung auf allen Geräten und Plattformen sicher (Browser-Tabs, Smartphone-Homescreens, Windows-Kacheln).

---

## 3. Projekt- & Seitenstruktur

Die Seite ist als klassische **Multi-Page-Application (MPA)** aufgebaut, um eine klare Trennung der Inhalte zu gewährleisten.

* **`_includes/`**: Dieser Ordner enthält alle wiederverwendbaren HTML-Komponenten (`_header.html`, `_footer.html`, `_about-content.html` etc.).
* **`index.html` (Startseite):** Dient als zentraler Hub. Sie enthält eine kurze "Über Mich"-Sektion und fungiert als Wegweiser zu den spezialisierten Unterseiten.
* **`projects.html`**: Präsentiert eine vollständige Galerie aller wichtigen Projekte.
* **`certificates.html`**: Listet alle erworbenen und angestrebten IT-Zertifikate auf.
* **`contact.html`**: Enthält das Kontaktformular (realisiert über den externen Dienst **Formspree**) und das Impressum.

---

## 4. Checkliste der Bewertungskriterien

-   [x] **Responsiveness:** Durch Mobile-First-Ansatz und Flexbox/Grid sichergestellt.
-   [x] **Struktur & Optik:** Modernes, klares Konzept mit einheitlichem Design.
-   [x] **Echte Inhalte:** Eigene Projekte, Zertifikate und Texte werden verwendet.
-   [x] **Angemessene Technologie:** Die Wahl von Vanilla JS für einen modularen Aufbau ist für eine statische Seite ideal und zeigt Verständnis für das DRY-Prinzip.
-   [x] **Readme:** Diese Datei dient als ausführliche Dokumentation.
-   [x] **Hosting:** Die Seite läuft auf einem eigenen Webserver via Docker.
-   [x] **Handgeschriebener Code:** Der Anteil liegt bei weit über 50%.
-   [x] **Code-Struktur:** Logische Ordner- und Dateistruktur.
-   [x] **Performance:** Optimierte Assets und schlanker Code garantieren schnelle Ladezeiten.
-   [x] **Favicon:** Umfassend implementiert für alle gängigen Plattformen.
-   [x] **3 Sections & Detailseite:** Anforderungen durch die Multi-Page-Struktur mehr als erfüllt.