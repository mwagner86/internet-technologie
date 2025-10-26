# Aufgabe 05: Navigationselemente einbinden

## Abschlussbedingungen

Binden Sie in Ihre bestehende Selbstdarstellung oben rechts eine responsive Navigationsleiste mit folgenden vier Menüpunkten ein:
-   Service
-   Projekte
-   Kontakt
-   Suchen-Feld

### Anforderungen
-   Binden Sie die Navigation über eine Library ein (Empfehlung: Bootstrap).
-   Die Links müssen bei `:hover` ihren Zustand ändern.
-   Bei Verkleinerung der Seite soll die Navigationsleiste als Burger-Menü erscheinen.
-   Sie sind frei in der Ausgestaltung (Farbe, Schrift, Hintergrund etc.).


Zusammenfassung der Modifikationen für Aufgabe 05 (Bootstrap Navbar).

### HTML (`index.html`)

1.  **Bootstrap Integration:** Links für das Bootstrap 5.3 CSS (im `<head>`) und das Bootstrap JS Bundle (am Ende des `<body>`) wurden hinzugefügt. Das JS-Bundle ist für die Funktionalität des responsiven Burger-Menüs erforderlich.
2.  **Navbar-Struktur:** Ein responsives `<nav>`-Element (Bootstrap `navbar`) wurde direkt unter dem `<body>`-Tag eingefügt.
3.  **Namenskonflikt gelöst:** Die primäre Layout-Klasse `.container` wurde in `.main-wrapper` umbenannt, um Konflikte mit der gleichnamigen Bootstrap-Klasse zu vermeiden.
4.  **Anker-Definition:** Die Sektionen "Skills" und "Footer" erhielten die `id`-Attribute `service` bzw. `kontakt`, um als Sprungziele zu dienen.
5.  **Link-Aktualisierung:** Die `href`-Attribute der Navigationslinks wurden aktualisiert:
	* "Service" -> `#service`
	* "Projekte" -> `../index.html`
	* "Kontakt" -> `#kontakt`

### CSS (`style.css`)

1.  **Layout-Anpassung:** Die CSS-Regel für `.container` wurde in `.main-wrapper` umbenannt.
2.  **Globale Stile:** Das `padding` wurde vom `body` entfernt (damit die Navbar korrekt am Rand anliegt) und auf den `.main-wrapper` verschoben.
3.  **Bootstrap-Override:** Es wurden explizite `border`-Regeln für `th` und `td` beibehalten, da Bootstrap die Standard-Tabellenränder entfernt.
4.  **Hover-Effekt:** Ein neuer CSS-Block wurde hinzugefügt, um einen deutlichen `:hover`-Effekt für die `.nav-link`-Elemente zu implementieren.

### Anmerkung zur Suchen-Funktion

Das "Suchen"-Feld ist ein reines HTML-Formular-Element ohne aktive Funktionalität. Die Implementierung einer client- oder serverseitigen Suche erfordert JavaScript, welches Inhalt einer späteren Aufgabe ist.