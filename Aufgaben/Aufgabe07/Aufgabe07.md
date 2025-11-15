# Konzept: Digitales Portfolio (Maximilian Wagner)

Hallo Frau Prof. Schnitzer, Hallo Herr Kodalle.
Ich hatte ja schon die Gelegenheit, Frau Schnitzer vorab am Ende einer unserer Sprechstunde, ein Preview des Abschlussprojekt vorzuzeigen.
Den aktuellen Stand, sowie Ordner- und Codestruktur, können Sie auf [Github Portfolio Page](https://github.com/mwagner86/internet-technologie/tree/main/portfolio)
einsehen.

Hier nochmal formell die Übersicht über das Projekt und den Techstack.

---

## 1. Titel des Projekts

Portfolio-Webseite: Maximilian Wagner

---

## 2. Zielsetzung

Die Webseite soll als Upgrade für die digitale Visitenkarte dienen. Mein persönliches Portfolio. Sie soll als Konzeptentwurf einer "Single Source of Truth" für meine berufliche Online-Präsenz fungieren.

Primäre Ziele:
* Demonstration von technischen Fähigkeiten (insb. Web-Technologien, Programmiersprachen und der neue Fokus auf Security).
* Präsentation von abgeschlossenen und laufenden Projekten.
* Bereitstellung einer Übersicht über erworbene Zertifikate.
* Schaffung einer professionellen Kontaktmöglichkeit.

---

## 3. Outcome und Umfang

Das "Outcome" ist eine live-gehostete Multi-Page-Application (MPA), die eine klare Trennung der Inhalte gewährleistet.

Der "Umfang" (Seitenstruktur) ist wie folgt definiert:

* **`index.html` (Startseite):** Dient als zentraler Hub. Sie enthält eine "Über Mich"-Sektion und fungiert als Wegweiser zu den spezialisierten Unterseiten.
* **`projects.html`**: Präsentiert eine vollständige Galerie aller wichtigen Projekte.
* **`certificates.html`**: Listet alle erworbenen und angestrebten IT-Zertifikate auf.
* **`contact.html`**: Enthält das Kontaktformular. (Muss noch überarbeitet werden).
* **`_includes/`**: Dieser Ordner enthält alle wiederverwendbaren HTML-Komponenten (`_header.html`, `_footer.html`, `_about-content.html` etc.), die modular geladen werden.

---

## 4. Technologieeinsatz mit Begründung

### 4.1. Kerntechnologien
Der Fokus liegt auf handgeschriebenem, sauberem Code, um die fundamentalen Fähigkeiten zu demonstrieren, ohne auf große Frontend-Frameworks (wie React oder Vue) zurückzugreifen.

* **HTML5 & CSS3:** Semantische HTML-Tags und modernes CSS (Flexbox, Grid) bilden die Grundlage für ein responsives und zugängliches Layout.
* **Vanilla JavaScript (Client-seitige Inklusion):** Um Code-Redundanz zu vermeiden (DRY-Prinzip), wird ein modulares System verwendet. Wiederkehrende HTML-Blöcke (Header, Footer, etc.) sind in separate Dateien im `_includes`-Ordner ausgelagert. Ein zentrales JavaScript (`js/main.js`) lädt diese Blöcke dynamisch zur Laufzeit mit der `fetch`-API in die Haupt-HTML-Seiten.
	* **Begründung:** Diese Methode simuliert die Arbeitsweise eines statischen Seitengenerators (SSG) wie Jekyll oder Hugo mit reinen Bordmitteln und demonstriert Verständnis für asynchrone Operationen (`fetch`) und DOM-Manipulation.

### 4.2. Designkonzept
* **Farbpalette:** Ein professioneller Dark-Mode mit `#1a1a1a` (Hintergrund), `#f0f0f0` (Text) und `#00ddb3` (Akzentfarbe).
* **Typografie:** `Poppins` für Überschriften und `Inter` für Fließtext sorgen für ein modernes und gut lesbares Schriftbild.

### 4.3. Deployment & Infrastruktur
* **Deployment:** Die Webseite wird von mir während der Entwicklung über einen **Nginx-Container** , der via **Docker Compose** auf meinem privaten Homeserver verwaltet wird, selbst gehostet.
* **Favicon & App-Manifest:** Eine umfassende Sammlung von Favicons sowie eine `manifest.json` und `browserconfig.xml` stellen eine professionelle Darstellung auf allen Geräten und Plattformen sicher.

---

## 5. Recherche: Best-Practice Sample / Vorbild

Als mein primäres Vorbild für ein klares, inhaltsfokussiertes Auftreten diente mir die Webseite von Josh W. Comeau.

* **URL:** [Josh W. Comeau](https://www.joshwcomeau.com/)
* **Begründung:**
	1.  **Klarheit & Fokus:** Die Seite konzentriert sich auf die Bereitstellung von qualitativ hochwertigem Inhalt (Blog-Posts, Tutorials). Ein ähnliches Ziel wird mit der Trennung in Projekt- und Zertifikatsseiten verfolgt.
	2.  **Technisches Understatement:** Die Seite nutzt moderne Technologien (React, MDX), tut dies aber, um das Nutzererlebnis zu verbessern, nicht als reines Gimmick. Da mein Fokus nicht auf Webdesign liegt, sondern eher ein Touchup meiner Basic-Skills sein sollte, habe ich mich für einen schlankeren Technologie-Stack entschieden.
	3.  **Design:** Das Design ist einzigartig und persönlich, bricht aber nicht mit fundamentalen UX-Prinzipien. Eine technische Seite muss nicht langweilig aussehen. :-)

---

## 6. Geplante Verbesserungen bis zur Abgabe

Um das Portfolio weiter zu professionalisieren, habe ich noch folgende Schritte geplant:

* **Optimierung der Assets:** Implementierung von responsiven Bildern (z.B. `<picture>`-Element oder `srcset`), um angepasste Grafiken für verschiedene Auflösungen bereitzustellen, insbesondere für das Profilfoto.
* **Kontaktformular:** Vollständige Ausarbeitung und Implementierung des Kontaktformulars auf der `contact.html`-Seite, inklusive Validierung.
* **Projekt-Präsentation:** Die Seite `projects.html` soll überarbeitet werden, um die Programmierprojekte detaillierter und visuell ansprechender in Szene zu setzen (z.B. durch Detailseiten, bessere Beschreibungen oder den Einsatz von "Tags").
* **Refactor der Codestruktur**: Cleanup und Optimierungen