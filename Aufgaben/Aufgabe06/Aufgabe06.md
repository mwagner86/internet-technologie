# Aufgabe 06: Die Webvisitenkarte interaktiv machen (Teil 1)

## Abschlussbedingungen

Die Webvisitenkarte soll interaktive Features mittels JavaScript bekommen.

-   Binden Sie eine externe JavaScript-Datei ein.
-   Innerhalb des JavaScripts:
	1.  Rufen Sie das aktuelle Datum auf und speichern Sie es in einer Variable.
	2.  Erstellen Sie eine Variable mit einem Text wie "Heute ist der " und dem Datumsergebnis.
	3.  Zeigen Sie den vollständigen Text mittels eines `alert()` an.

Laden Sie die aktualisierte Seite auf den Webserver hoch.

### HTML (`index.html`)

1.  **JavaScript-Integration:** Ein `<script>`-Tag wurde am Ende der Datei (vor dem `</body>`-Tag) hinzugefügt, um die externe Datei `js/main.js` einzubinden.

### JavaScript (`js/main.js`)

1.  **Neue Datei erstellt:** Die Datei `main.js` wurde im neuen Verzeichnis `js/` angelegt.
2.  **Datum-Alert:** Das Skript implementiert die folgenden Schritte:
	* Es ruft das aktuelle Datum (`new Date()`) ab.
	* Es formatiert das Datum in einen lokalisierten String (z.B. `de-DE`).
	* Es erstellt eine Textvariable (im Format "Heute ist der TT.MM.JJJJ").
	* Es zeigt diese Variable beim Laden der Seite in einem `alert()`-Fenster an.
