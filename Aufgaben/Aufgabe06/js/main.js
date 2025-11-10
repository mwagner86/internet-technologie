// 1. Das aktuelle Datum abrufen
const heute = new Date();

// 2. Datum lesbar formatieren
const datumFormatiert = heute.toLocaleDateString('de-DE');

// 3. Textvariable erstellen
const nachricht = "Heute ist der " + datumFormatiert;

// 4. Text im Alert anzeigen
alert(nachricht);