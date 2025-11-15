# Aufgabe 08: Die Webvisitenkarte interaktiv machen (Teil 2)

## Abschlussbedingungen

In diesem Teil gibt es drei Teilaufgaben:

1.  **Einbinden eines selbst aktualisierenden Copyright-Hinweises:**
	-   Passen Sie den Code aus Aufgabe 06 an. Statt eines Alerts, erzeugen Sie ein neues DOM-Element und fügen Sie dort das Datum ein.
	-   Deaktivieren Sie den Alert aus Aufgabe 06.
2.  **Nutzung eines Event-Listeners:**
	-   Beim Klick auf eine beliebige Überschrift soll sich deren Farbe verändern. Nutzen Sie dafür das DOM, Event-Listener sowie die `element.style`-Eigenschaft.
3.  **Einbinden einer JS-Library:**
	-   Binden Sie die Library `fslightbox` in Ihr Projekt ein.
	-   Verändern Sie das HTML so, dass bei einem Klick auf Ihr Porträtfoto die Lightbox aufgeht.

## Changelog
Zusammenfassung der Modifikationen (Aufgabe 06 zu 08).

### 1. JavaScript (`js/main.js`)

* **Aufgabe 06 (Alert):** Die `alert()`-Funktionalität wurde entfernt.
* **Aufgabe 8.1 (Copyright):** Eine Funktion `createCopyrightNotice` wurde hinzugefügt. Diese ermittelt das aktuelle Jahr (`new Date().getFullYear()`), erstellt einen Text-String (mit "🍺"-Emoji) und fügt diesen dynamisch als neues `<p>`-Element (`#copyright-notice`) in den Footer (`#kontakt`) ein.
* **Aufgabe 8.2 (Event-Listener):** Eine Funktion `addHeadlineClickListener` wurde hinzugefügt. Diese selektiert alle `<h1>`- und `<h2>`-Überschriften (`querySelectorAll`) und fügt einen `click`-Event-Listener hinzu, der die Schriftfarbe bei Klick ändert.

### 2. HTML (`index.html`)

* **Aufgabe 8.3 (Lightbox):** Ein `<script>`-Tag zum Laden der `fslightbox.js`-Bibliothek wurde (vor `main.js`) hinzugefügt.
* **Aufgabe 8.3 (Lightbox):** Das Profilbild (`.profile-image`) wurde in einen `<a>`-Tag mit dem Attribut `data-fslightbox` gewrappt, um die Lightbox-Funktionalität zu aktivieren.

### 3. CSS (`style.css`)

* **Aufgabe 8.1 (Copyright):** Die Regel `.footer-content` wurde um `flex-wrap: wrap` erweitert. Eine neue Regel `#copyright-notice` wurde hinzugefügt, um den Text über die volle Breite (`width: 100%`) und zentriert (`text-align: center`) darzustellen.
* **Aufgabe 8.3 (Lightbox):** CSS-Regeln für `.profile-image` (transition) und `a[data-fslightbox] .profile-image:hover` (cursor, opacity) wurden hinzugefügt, um die Interaktivität des Bildes zu visualisieren.