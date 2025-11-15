# Aufgabe 09: Wetterdaten einbinden

## Abschlussbedingungen

Binden Sie eine aktuelle Wetterbeschreibung (Beschreibung und Temperatur) für eine Stadt Ihrer Wahl in Ihre Webvisitenkarte ein.

-   Nutzen Sie eine geeignete JavaScript-Technik (z.B. `fetch` oder `AJAX`) und die Schnittstelle von `OpenWeatherMap`.
-   Für die Abfrage wird ein API-Key benötigt.
-   Zeigen Sie die ausgewählten Daten des API-Aufrufs in Ihrer Webvisitenkarte an.
-   Die Daten sollen per HTML/CSS optisch in die Webseite eingebunden werden (z.B. im Footer).

## Changelog

### 1. HTML (`index.html`)

* **Wetter-Widget-Platzhalter:** Im Footer (`#kontakt`) wurde ein `<a>`-Tag (mit ID `#weather-link`) hinzugefügt. Dieses umschließt einen `<div>`-Container (`#weather-widget`), der als Platzhalter für die Wetterdaten dient.

### 2. JavaScript (`js/main.js`)

* **Neue Funktion `fetchWeather()`:** Eine `async`-Funktion wurde hinzugefügt, um die OpenWeatherMap-API mittels `fetch` abzurufen.
* **API-Logik:** Das Skript ruft die Daten für Wolfenbüttel ab, extrahiert Temperatur, Beschreibung, Icon und die City-ID in einem `try...catch`-Block.
* **DOM-Manipulation:** Die Funktion injiziert das formatierte Wetter (Icon, Temp., Beschreibung) in das `#weather-widget`-Element.
* **Interaktiver Link:** Das `href`-Attribut des umschließenden `<a>`-Tags (`#weather-link`) wird dynamisch mit der von der API abgerufenen City-ID aktualisiert, um direkt auf die OWM-Prognoseseite für die Stadt zu verlinken.
* **Funktionsaufruf:** `fetchWeather()` wird beim Laden der Seite (innerhalb des `DOMContentLoaded`-Listeners) aufgerufen.

### 3. CSS (`style.css`)

* **Footer-Layout:** Die Regel `.footer-content` wurde um `justify-content: center` erweitert, um das Logo, den E-Mail-Link und das neue Wetter-Widget horizontal zu zentrieren.
* **Widget-Styling:** Neue CSS-Regeln wurden für `#weather-link` und `#weather-widget` hinzugefügt, um den Link-Unterstrich zu entfernen, das Widget (Icon & Text) zu formatieren und einen Hover-Effekt (`background-color`) für das gesamte klickbare Element bereitzustellen.