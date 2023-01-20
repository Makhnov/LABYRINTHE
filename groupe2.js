let compteur = 0;
let divWin = document.getElementById("divWin");
let nbDePasTotal = document.getElementById("nbDePasTotal");
let affichage = document.getElementById('compte');
let tabTest = [0,0];

function déplacement() {
    compteur++;
    afficher();
}

function afficher() {
    affichage.innerText = compteur;
}

function win(){
    nbDePasTotal.textContent = "nombre de pas :" + " "+ compteur;
    pasMax.textContent = "le nombre minimal de pas était de : "+ tabTest.length;
    divWin.classList.add("pasCacher");
}

function reset(){
    location.reload();
}

déplacement();
