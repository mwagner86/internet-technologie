// Warten, bis das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', function() {

    // --- Funktionen aufrufen ---
    createCopyrightNotice();
    addHeadlineClickListener();
    fetchWeather(); // NEUER Aufruf für Aufgabe 09

});


// Copyright-Hinweis
function createCopyrightNotice() {
    // ... (Ihr Code von Aufg 8.1) ...
    const currentYear = new Date().getFullYear();
    const copyrightText = `Made with 🍺 © ${currentYear} Maximilian Wagner`;
    const copyrightElement = document.createElement('p');
    copyrightElement.textContent = copyrightText;
    copyrightElement.id = 'copyright-notice';
    const footer = document.getElementById('kontakt');
    if (footer) {
        footer.appendChild(copyrightElement);
    } else {
        console.error('Footer-Element (id="kontakt") nicht gefunden.');
    }
}

// Event-Listener für Überschriften
function addHeadlineClickListener() {
    const headlines = document.querySelectorAll('.main-wrapper h1, .main-wrapper h2');
    if (headlines.length > 0) {
        headlines.forEach(headline => {
            headline.addEventListener('click', function() {
                this.style.color = '#dc3545';
            });
        });
    } else {
        console.error('Keine Überschriften (h1, h2) im .main-wrapper gefunden.');
    }
}


// Wetterdaten-API

async function fetchWeather() {
    // API-Daten
    const apiKey = '09d39cea254b700be42abc9ef4150f95';
    const city = 'Wolfenbuettel';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=de`;

    // Ziel-Container
    const weatherWidget = document.getElementById('weather-widget');
    const weatherLink = document.getElementById('weather-link'); // NEU: Link-Element holen

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API-Fehler: ${response.status}`);
        }

        const data = await response.json();

        // 1. Daten extrahieren
        const temp = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const cityID = data.id;

        // 2. Beschreibung formatieren
        const descriptionCapitalized = description.charAt(0).toUpperCase() + description.slice(1);
        const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;

        // 3. HTML in den Platzhalter injizieren
        weatherWidget.innerHTML = `
            <img src="${iconUrl}" alt="${descriptionCapitalized}" class="weather-icon">
            <span class="weather-text">
                ${city}: ${temp}°C, ${descriptionCapitalized}
            </span>
        `;

        // Link-Ziel aktualisieren
        weatherLink.href = `https://openweathermap.org/city/${cityID}`;

    } catch (error) {
        console.error('Wetter-Abruf fehlgeschlagen:', error);
        weatherWidget.innerHTML = '<p style="font-size: 0.8em; color: #777;">Wetter nicht verfügbar.</p>';
    }
}