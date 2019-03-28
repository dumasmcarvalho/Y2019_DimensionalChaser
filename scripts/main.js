/* Trocar DIVs (Próximo e Anterior) */

var divIndex = 1;
mostrarDiv(divIndex);

function trocarDiv(n) {
    mostrarDiv(divIndex += n);
}

function mostrarDiv(n) {

    var i;
    var div = document.getElementsByClassName("slidesDiv");

    if (n > div.length) {
        divIndex = 1
    }
    if (n < 1) {
        divIndex = div.length
    };
    for (i = 0; i < div.length; i++) {
        div[i].style.display = "none";
    }

    div[divIndex - 1].style.display = "block";
}