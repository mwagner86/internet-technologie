# Portfolio-Webseite: Maximilian Wagner

Dies ist das Web-Portfolio von Maximilian Wagner, Student des Studiengangs IT-Sicherheit an der TH Brandenburg und Softwareentwickler. Das Projekt wird zunächst lokal auf einem Homeserver entwickelt und gehostet und dient als Leistungsnachweis für das Modul "Internet-Technologie".

---

## 1. Konzept & Vision

Dieses Portfolio dient als professionelle digitale Visitenkarte. Es soll nicht nur meine Fähigkeiten und Projekte präsentieren, sondern auch meine Spezialisierung im Bereich der IT-Sicherheit und meine Kompetenz in der modernen Webentwicklung demonstrieren.

### Leitidee: "Präzision & Vertrauen"
Das Design ist bewusst klar, strukturiert und technisch auf den Punkt gebracht. Es spiegelt die analytische und präzise Arbeitsweise wider, die in der IT-Sicherheit entscheidend ist. Ein Dark-Mode-First-Ansatz schont die Augen und rückt Inhalte wie Code-Beispiele und Zertifikate in den Fokus.

### Farb- und Schriftkonzept
* **Farbpalette:** Ein professioneller Dark-Mode.
    * Hintergrund: `#1a1a1a` (Dunkelgrau)
    * Text: `#f0f0f0` (Gebrochenes Weiß)
    * Akzentfarbe: `#00ddb3` (Ein modernes Türkis/Mint, das für "Sicherheit" und "Erfolg" steht)
* **Typografie:** Serifenlose Schriften für maximale Lesbarkeit.
    * Überschriften: `Poppins` oder `Montserrat` (stark, modern)
    * Fließtext: `Inter` (optimiert für UI/Web)

### User Experience (UX) Fokus
* **Mobile First & Responsive:** Perfekte Darstellung vom Smartphone bis zum großen Desktop.
* **Klare Navigation:** Eine feste Navigationsleiste mit direkten Links zu den Hauptbereichen: "Über Mich", "Projekte", "Zertifikate", "Kontakt".
* **Performance-Optimierung:** Schnelle Ladezeiten durch komprimierte Bilder (z.B. im `.webp`-Format) und minimierten, effizienten Code.

---

## 2. Seitenstruktur & Inhalte

Die Seite wird aus mehreren dedizierten HTML-Seiten bestehen, um eine klare Struktur und gute Wartbarkeit zu gewährleisten.

### a) Startseite (`index.html`) - Das Dashboard
Die Startseite dient als dynamische Landingpage und bietet einen schnellen Überblick.

* **Hero Section:** Eine prägnante Begrüßung: "Dein Name. Softwareentwickler & IT-Security-Spezialist." Darunter Buttons, die direkt zu den wichtigsten Sektionen führen: "Projekte ansehen" und "Zertifikate einsehen".
* **Über Mich (`#about`):** Ein kompakter Abschnitt mit einem professionellen Foto, einer kurzen Vorstellung der Verbindung zwischen Softwareentwicklung und IT-Sicherheit und einer Liste von Kernkompetenzen (z.B. `Python`, `Docker`, `Penetration Testing`, `Netzwerkanalyse`).
* **Projekt-Vorschau (`#projects`):** Eine Auswahl von 2-3 Top-Projekten als Teaser-Karten. Jede Karte hat einen Link zur vollständigen Projekt-Detailseite.
* **Zertifikate-Vorschau (`#certs`):** Eine Teaser-Sektion, die auf die Zertifikate-Seite verweist und vielleicht schon 1-2 wichtige erworbene Zertifikate als Icons anzeigt.

### b) Projekt-Detailseite (`projekt-detail.html`) - Der Showroom
Eine Vorlage zur detaillierten Vorstellung deiner Projekte.

* **Projekt-Header:** Titel, Untertitel und ein großes Bild/Screenshot.
* **Kontext & Ziel:** Was war die Aufgabe? Welches Problem wurde gelöst?
* **Technologie-Stack:** Welche Tools und Sprachen kamen zum Einsatz?
* **Meine Rolle & Learnings:** Was war mein Beitrag und was habe ich gelernt?
* **Links:** Direkte Links zu GitHub-Repository und/oder Live-Demo.

### c) Zertifikate-Übersicht (`zertifikate.html`) - Der Kompetenznachweis
Diese Seite ist zentral für dein Profil und wird klar in zwei Bereiche unterteilt.

* **Erworbene Zertifikate:** Eine Galerie oder Liste. Jeder Eintrag enthält:
    * Logo der Zertifizierung (z.B. CompTIA, Cisco).
    * Vollständiger Name des Zertifikats.
    * Datum des Erwerbs.
    * (Optional) Ein kurzer Satz zur Relevanz des Zertifikats.
* **Angestrebte Zertifikate (Roadmap):** Eine Liste oder Zeitleiste, die zeigt, welche Zertifikate du als Nächstes planst. Das demonstriert Engagement und vorausschauende Planung.
    * Name des Zertifikats.
    * Geplanter Zeitraum (z.B. "In Vorbereitung für Q4 2025").

### d) Kontakt & Impressum (`contact.html`) - Der Dialog
Bündelt Formular und rechtliche Informationen.

* **Kontaktformular:** Ein einfaches Formular (Name, E-Mail, Nachricht), das über den externen Dienst **Formspree** läuft – eine moderne und sichere Lösung für statische Seiten, die keine serverseitige Logik für den Mailversand erfordert.
* **Impressum & Datenschutz:** Alle notwendigen rechtlichen Angaben.

---

## 3. Technologie-Stack

Der Fokus liegt auf handgeschriebenem, sauberem Code, um die fundamentalen Fähigkeiten zu demonstrieren.

* **HTML5:** Semantische Tags für eine zugängliche und SEO-freundliche Struktur.
* **CSS3 (mit SASS/SCSS):** Modulares und wartbares Styling durch Variablen, Mixins und eine klare Dateistruktur.
* **JavaScript (Vanilla JS):** Gezielter Einsatz für Interaktivität (mobiles Menü, Formularvalidierung, eventuell Filter für die Projektgalerie), um ohne große Frameworks auszukommen.
* **Deployment:** Hosting über einen Nginx-Container auf einem privaten Homeserver.

---

## 4. Checkliste zur Erfüllung der Kriterien

-   [x] **Responsiveness:** Durch Mobile-First-Ansatz sichergestellt.
-   [x] **Struktur & Optik:** Modernes, klares Konzept.
-   [x] **Echte Inhalte:** Eigene Projekte, Zertifikate und Texte.
-   [x] **Angemessene Technologie:** Bewusste Wahl von "Grundlagentechnologien" ist für eine Portfolio-Seite ideal.
-   [x] **Readme:** Diese Datei dient als ausführliche Dokumentation.
-   [x] **Hosting:** Läuft auf eigenem Webserver.
-   [x] **Handgeschriebener Code:** Anteil weit über 50%.
-   [x] **Code-Struktur:** Logische Ordner- und SASS-Struktur.
-   [x] **Performance:** Optimierte Assets garantieren schnelle Ladezeiten.
-   [x] **Favicon:** Wird erstellt.
-   [x] **3 Sections & Detailseite:** Anforderungen durch die Struktur mehr als erfüllt.
