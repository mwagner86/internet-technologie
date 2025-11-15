
document.addEventListener('DOMContentLoaded', function() {


    const markdownFile = 'Aufgabe07.md';
    const container = document.getElementById('markdown-content');


    fetch(markdownFile)
        .then(response => {
            if (!response.ok) {
                throw new Error('Netzwerk-Antwort war nicht ok: ' + response.statusText);
            }
            return response.text(); // Den Textinhalt der Datei holen
        })
        .then(markdownText => {
            container.innerHTML = marked.parse(markdownText);
        })
        .catch(error => {
            container.innerHTML = `<p style="color: red;">Fehler beim Laden des Konzepts: ${error.message}</p>`;
            console.error('Fetch-Fehler:', error);
        });
});