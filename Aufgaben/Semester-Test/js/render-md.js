document.addEventListener('DOMContentLoaded', function() {

    // Name der Markdown-Datei im selben Ordner
    const markdownFile = 'README.md';
    const container = document.getElementById('markdown-content');

    fetch(markdownFile)
        .then(response => {
            if (!response.ok) {
                throw new Error('Netzwerk-Antwort war nicht ok: ' + response.statusText);
            }
            return response.text();
        })
        .then(markdownText => {
            // Markdown parsen und einfügen
            container.innerHTML = marked.parse(markdownText);
        })
        .catch(error => {
            container.innerHTML = `<p style="color: red;">Fehler beim Laden der Doku: ${error.message}</p>`;
            console.error('Fetch-Fehler:', error);
        });
});