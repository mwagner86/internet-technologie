# Semesterbegleitender Test Validierungs-Formular für Pen & Paper OneShot

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


---

## 4. Implementierte Checks

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

## 5. Thema & Design-Konzept: P&P OneShot

Das Ziel war es, ein standardisiertes HTML-Formular in eine thematisch passende Anmeldeseite für eine "Pen & Paper OneShot"-Runde zu verwandeln. Der visuelle Stil ist an klassische ARPGs (Action Role-Playing Games) wie Diablo 2 angelehnt.

### Visuelle Kernelemente

* **Hintergrund:** Ein dynamischer, vollflächiger Video-Hintergrund (`.webm`) eines Lagerfeuers, das in einer Schleife läuft. Ein dunkler Filter (`filter: brightness(0.4)`) sorgt für bessere Lesbarkeit des Vordergrunds.
* **Typografie:**
	* **Titel (`Metal Mania`):** Google Font, die an Fantasy-Logos erinnern soll.
	* **Fließtext (`Cinzel`):** Eine Google Font im Serif-Stil, die wie "gemeißelt" aussieht und den epischen Charakter unterstützen soll.
* **Formular-Container:** Dient als "UI-Element" im Spiel-Stil. Es ist dunkel, leicht transparent (`rgba(10, 10, 10, 0.85)`) und hat einen geprägten Rand (`border-image`), um sich vom Video abzuheben.
* **Logo:** Ein Wappen-Logo (Drache) schwebt über dem Formular
* **Farbpalette:** Ein dunkles Schema (`#0a0a0a`) mit hellen Texten (`#f0f0f0`). Als Akzentfarbe dient ein Gold/Gelb-Ton (`#F8B700`) für den Button und die Überschrift.
* **Validierung:** Die Feedback-Farben (`.error`/`.success`) wurden an das Theme angepasst (helles Rot `#FF6347` und Mintgrün `#3EB489`), um auf dem dunklen Hintergrund gut sichtbar zu sein.
* **Thematische Texte:** Alle Labels und Titel wurden angepasst (z.B. "Charaktername" statt "Name", "Gruppe beitreten" statt "Register").


---

## 6. Assets & Lizenzen

* **Video-Hintergrund:** Das "Campfire"-Video wird von [Pixabay](https://pixabay.com/videos/campfire-flames-fire-wood-fire-2170/) bezogen. Es unterliegt der Pixabay-Lizenz (lizenzfrei für die private und kommerzielle Nutzung ohne Namensnennung).

* **Schriftarten (Lokal gehostet):**
	* `Metal Mania` (Titel) und `Cinzel` (Fließtext).
	* **Quelle:** Heruntergeladen via [google-webfonts-helper](https://gwfh.mranftl.com/fonts).
	* **Einbindung:** Die Dateien (`.woff2`) liegen lokal im Ordner `assets/fonts/`.
	* **Lizenz:** Beide Schriftarten unterliegen der **Open Font License (OFL)** und sind frei verwendbar.

* **Logo/Icon:** "Fantasy Reel" Icon von [Flaticon](https://www.flaticon.com/free-icon/movie_14238696). Autor: Freepik.