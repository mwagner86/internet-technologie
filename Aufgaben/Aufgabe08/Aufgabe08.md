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

### 1. Dynamischer Copyright-Hinweis (Aufg 8.1)

* **JavaScript (`js/main.js`):**
	* Der `alert()` aus Aufgabe 06 wurde entfernt.
	* Eine neue Funktion `createCopyrightNotice` wurde implementiert. Diese Funktion ermittelt das aktuelle Jahr (`new Date().getFullYear()`), erzeugt ein neues `<p>`-Element und fügt es dynamisch in den Footer (`#kontakt`) ein.
* **CSS (`css/style.css`):**
	* Die neue ID `#copyright-notice` wurde hinzugefügt, um den Hinweis mittels `margin-left: auto` rechtsbündig im Footer zu positionieren.

### 2. Event-Listener für Überschrift (Aufg 8.2)

* **HTML (`index.html`):**
	* Die `<h1>`-Überschrift hat die ID `main-headline` erhalten, um sie per JavaScript selektieren zu können.
* **JavaScript (`js/main.js`):**
	* Eine neue Funktion `addHeadlineClickListener` fügt der ID `main-headline` einen `click`-Event-Listener hinzu.
	* Bei einem Klick wird die `style.color`-Eigenschaft der Überschrift geändert.

### 3. Lightbox-Integration (Aufg 8.3)

* **HTML (`index.html`):**
	* Die Lightbox-Bibliothek (`fslightbox.js`) wird über ein `<script>`-Tag am Ende des `<body>` geladen.
	* Das Profilbild (`.profile-image`) wurde in einen `<a>`-Tag gewrappt, der das Attribut `data-fslightbox` enthält, um die Lightbox-Funktionalität zu aktivieren.
* **CSS (`css/style.css`):**
	* Ein `:hover`-Zustand für `a[data-fslightbox] .profile-image` wurde hinzugefügt, um die Klickbarkeit durch Änderung von `cursor` und `opacity` zu visualisieren.