document.addEventListener('DOMContentLoaded', () => {
    // Koordinaten für Berlin (lt. Original)
    const lat = '52.518611';
    const lon = '13.408333';
    const apikey = '09d39cea254b700be42abc9ef4150f95';

    // FIX: HTTPS statt HTTP um Mixed-Content-Blockierung zu verhindern
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=de&appid=${apikey}`;

    // Optimierung: Fetch API statt jQuery (spart ~85kb und behebt den ReferenceError)
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Wetterdaten nicht verfügbar");
            return response.json();
        })
        .then(data => {
            const temperature = Math.round(data.main.temp);
            const description = data.weather[0].description;

            // DOM Manipulation (Vanilla JS)
            const tempEl = document.getElementById('weather-temp');
            const descEl = document.getElementById('weather-desc');

            if (tempEl) tempEl.innerHTML = `<span>${temperature}</span> C°`;
            if (descEl) descEl.innerHTML = `<span>${description}</span>`;
        })
        .catch(error => {
            console.error('Wetter-Fehler:', error);
            const tempEl = document.getElementById('weather-temp');
            if (tempEl) tempEl.innerText = '--';
        });
});