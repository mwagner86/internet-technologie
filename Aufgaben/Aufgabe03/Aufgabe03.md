# Aufgabe 03: Webvisitenkarte mit CSS gestalten

## Abschlussbedingungen

Entwickeln Sie die Webvisitenkarte aus Aufgabe 02 weiter und erstellen Sie einen ersten optisch ansprechenden Web-Auftritt.

-   Verwenden Sie CSS, um das Aussehen der Web-Visitenkarte zu definieren. Nur handcoded, keine Komponenten oder JavaScript erlaubt.
-   Versuchen Sie, Ihre Persönlichkeit durch die Wahl der gestalterischen Mittel zu visualisieren.
-   **Inhalte:**
	-   Ihr Name als Überschrift (`h1`).
	-   Ihr Foto.
	-   Ein paar Absätze über sich selbst.
	-   Ihre fachlichen Skills als nicht-nummerierte Aufzählung.
	-   Eine Tabelle mit Lieblingsfächern und Schwerpunkten.
	-   Logo und Link zur FH Brandenburg.

**Upload-Format:** `Webserver /Aufgabe03/index.html`. Bitte laden Sie den vollständigen Projektordner hoch.

## Zusammenfassung der Modifikationen für Aufgabe 04 (Responsive Design).

Die `index.html`-Datei (Basis: Aufgabe 03) erforderte keine Änderungen, da der `viewport`-Metatag bereits korrekt gesetzt war.

Alle Anpassungen erfolgten in der `style.css`-Datei:

1.  **Anpassung der Bild-Skalierung:**
	Die CSS-Regel `.profile-image` wurde von `max-width: 350px` auf `width: 100%` geändert (bei Beibehaltung von `max-width: 350px`). Dies stellt sicher, dass das Bild korrekt herunterskaliert, wenn der Viewport schmaler als 350px ist.

2.  **Hinzufügen von Media Queries:**
	Am Ende der Datei wurde ein Breakpoint bei `768px` (`@media (max-width: 768px)`) definiert.

3.  **Anpassung des Layouts (Breakpoint):**
	Bei Unterschreitung des Breakpoints wird die `flex-direction` für die Klassen `.content-wrapper` (Inhaltsspalten) und `.footer-content` (Footer) auf `column` gesetzt. Dies bewirkt das Stapeln der Elemente auf schmalen Bildschirmen und verhindert horizontales Scrollen.