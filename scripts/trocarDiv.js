/* Trocar DIVs (Próximo e Anterior) - História e Mundos */

var divIndex = 1;
mostrarDiv(divIndex);

function trocarDiv(index) {
    mostrarDiv(divIndex += index);
}

function mostrarDiv(novoIndex) {

    var i;
    var div = document.getElementsByClassName("slidesDiv");

    if (novoIndex > div.length) {
        divIndex = 1;
    } else if (novoIndex < 1) {
        divIndex = div.length;
    }

    for (i = 0; i < div.length; i++) {
        div[i].style.display = "none";
    }

    div[divIndex - 1].style.display = "block";
}