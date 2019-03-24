var divIndex = 1;
mostrarDiv(divIndex);

function trocarDiv(n) {
    mostrarDiv(divIndex += n);
}

function mostrarDiv(n) {
    var i;
    var x = document.getElementsByClassName("slidesDiv");
    if (n > x.length) {
        divIndex = 1
    }
    if (n < 1) {
        divIndex = x.length
    };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[divIndex - 1].style.display = "block";
}