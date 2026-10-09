
//javaScript für das akkordeon
//das js sucht nach allen accordions auf der seite und achtet darauf, ob es geclickt wird
//Dem Knopf die Klasse "active" geben oder wegnehmen.
//in css wird das accordion nun sichtbar oder unsichtbar

document.querySelectorAll(".accordion").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        btn.nextElementSibling.classList.toggle("open");
    });
});