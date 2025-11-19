// Aufruf der Funktionen
build_copyright();
change_heading();

/**
 * Erzeugt eine Copyright Notice und bindet sie im Footer ein
 */
function build_copyright(){
    // Footer suchen und in Variable speichern
    // byTagName gibt eine Liste zurück - mit [0] bekommen Sie den ersten Eintrag
    let footer = document.getElementsByTagName("footer")[0];

    // Aktuelles Jahr erhalten
    let current_year = new Date().getFullYear();

    // Text zusammenbauen
    let copyright_txt = "Made with ❤️ by Micha Kodalle \t © " + current_year

    // Neues DOM-Element erzeugen
    let copyright_el = document.createElement('div');

    // Text einsetzen
    copyright_el.innerText = copyright_txt;

    // Zusätzliches CSS einfügen
    copyright_el.classList.add('copyright');

    // In DOM einsetzen
    footer.appendChild(copyright_el);
}

function change_heading(){
    // Get heading
    let skills = document.getElementById('skills');
    let heading = skills.getElementsByTagName('h2')[0];

    // Save original color for toggling
    let original_color = heading.style.color;

    // Add eventlistener for toggle on click
    heading.addEventListener('click', () =>{
        if(heading.style.color === original_color){
            heading.style.color = 'red';
        }else{
            heading.style.color = original_color;
        }
    })
}
