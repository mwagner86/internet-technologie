# Semesterbegleitender Test: Validierungs-Formular

## 1. Aufgabenbeschreibung

Erstellung einer Webseite mit einer thematischen Anmeldung/Registrierung, basierend auf einer optischen Vorlage.

* **Primärziel:** Implementierung von 7 clientseitigen Validierungsfunktionen mit HTML5 und JavaScript.
* **Sekundärziel:** Erstellung einer eigenen gestalterischen Variante (z.B. Cyberpunk-Thema), die sich von der "Bookclub"-Vorlage abhebt.
* **Technologie:** Reines CSS oder ein Framework (z.B. Tailwind) ist erlaubt.
* **Erfolgsfall:** Nach erfolgreicher Validierung und Klick auf "Submit" soll eine Weiterleitung auf eine `success.html`-Seite mit einer Dankesnachricht erfolgen.
* **Backend:** Es wird kein echtes Backend (PHP, mailto:) implementiert.

---

## 2. Validierungs-Anforderungen

Folgende 7 Kriterien müssen in Echtzeit oder bei "Submit" validiert werden:

1.  **Name:** Ist ein Name eingegeben?
2.  **E-Mail:** Ist die E-Mail-Adresse formal vollständig?
3.  **Passwort-Match:** Sind die beiden Passworte identisch?
4.  **Alter:** Ist die Person schon 18 Jahre alt?
5.  **Bio-Länge:** Wurden **weniger** als 200 Zeichen in die "Short Bio" getippt?
6.  **Bio-Zeichenzähler:** Werden die Zeichen bei "Short Bio" heruntergezählt?
7.  **Submit:** Wurde nach Klick auf den SUBMIT Button eine Erfolgsnachricht (Weiterleitung) gezeigt?

---

## 3. Bewertungskriterien

* **Optik (10 Punkte):** Zeitgemäßes, thematisch passendes Layout.
* **Validierung (20 Punkte):** Implementierung aller 7 Validierungs-Checks.


# README: Form Validation Script

Dieses Skript (`js/main.js`) validiert das Registrierungsformular (`index.html`) clientseitig. Es nutzt `DOMContentLoaded` und einen `submit`-Event-Listener, um die Standard-Browser-Validierung zu überschreiben (`event.preventDefault()`).

Visuelles Feedback wird durch das Hinzufügen/Entfernen der CSS-Klassen `.error` und `.success` zu den `.input-group`-Containern gegeben.

---

## Implementierte Checks

### 1. Name (`validateName`)
* **Check 1:** Das Feld darf nicht leer sein.
* **Security Check (XSS):** Eingabe wird auf XSS-Zeichen (`<`, `>`) geprüft.
* **Security Check (Policy):** Eingabe wird mit einer Sperrliste (`reservedNames`) abgeglichen (z.B. "admin", "root").

### 2. E-Mail (`validateEmail`)
* **Check 2:** Das Feld darf nicht leer sein.
* **Check 2:** Die Eingabe muss einem formalen E-Mail-Regex entsprechen.
* **Security Check (Policy):** Die Domain wird mit einer Sperrliste (`disposableDomains`) abgeglichen (z.B. "mailinator.com").

### 3. Passwort (`validatePassword` / `validatePasswordConfirm`)
* **Check 3:** Beide Passwortfelder müssen identisch sein.
* **Security Check (Complexity):** Passwort muss eine Mindestlänge von 10 Zeichen haben.
* **Security Check (Complexity):** Passwort muss Vielfaltskriterien erfüllen (Großbuchstabe, Kleinbuchstabe, Zahl).
* **Security Check (Weakness):** Das Passwort darf **kein** gängiges Passwort-Fragment (`commonPasswords`) als Teilstring enthalten (z.B. "password123" schlägt fehl).

### 4. Alter / Geburtstag (`validateBirthday`)
* **Check 4:** Der Benutzer muss mindestens 18 Jahre alt sein (exakte Datumsberechnung).
* **Plausibility Check:** Das Geburtsdatum darf nicht in der Zukunft liegen.
* **Plausibility Check:** Der Benutzer darf nicht älter als 120 Jahre sein.

### 5. Bio (`validateBio`)
* **Check 5:** Die Bio darf maximal 200 Zeichen lang sein.
* **Security Check (XSS):** Eingabe wird auf XSS-Zeichen (`<`, `>`) geprüft.

### 6. Bio-Zeichenzähler (Live-Event)
* **Check 6:** Ein `input`-Event-Listener aktualisiert den Zeichenzähler (`#char-count`) in Echtzeit.
* Der Zähler wechselt in einen Fehlerzustand, wenn der Wert negativ wird.

### 7. Erfolgreiche Weiterleitung
* **Check 7:** Wenn alle oben genannten Validierungsfunktionen `true` zurückgeben, wird der Benutzer per `window.location.href` auf `success.html` weitergeleitet.


---

---

### Assets & Lizenzen

* **Video-Hintergrund:** Das "Campfire"-Video wird von [Pixabay](https://pixabay.com/videos/campfire-flames-fire-wood-fire-2170/) bezogen. Es unterliegt der Pixabay-Lizenz (lizenzfrei für die private und kommerzielle Nutzung ohne Namensnennung).

* **Schriftarten:**
	* `Metal Mania` (Titel): Bezogen von [Google Fonts](https://fonts.google.com/specimen/Metal+Mania).
	* `Cinzel` (Fließtext): Bezogen von [Google Fonts](https://fonts.google.com/specimen/Cinzel).
	* Beide Schriftarten sind unter der **Open Font License** lizenziert und frei verwendbar.

* **Logo/Icon:** Das "Movie Reel" Icon ist von [Flaticon](https://www.flaticon.com/free-icon/movie_14238696).