let divWin = document.getElementById("divWin");
let nbDePasTotal = document.getElementById("nbDePasTotal");

function win(){
    nbDePasTotal.textContent = "nombre de pas :" + " "+ "1";
    divWin.classList.add("pasCacher");
}
