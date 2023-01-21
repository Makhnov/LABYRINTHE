let compteur = 0;
let divWin = document.getElementById("divWin");
let nbDePasTotal = document.getElementById("nbDePasTotal");
let affichage = document.getElementById('compte');
let tabTest = [0,0];
let result = document.getElementById("resultat");

function déplacement() {
    compteur++;
    afficher();
}

function afficher() {
    affichage.innerText = compteur;
}

function win(){
    let coupMin=tabTest.length-1;
    nbDePasTotal.textContent = "nombre de pas :" + " "+ compteur;
    pasMax.textContent = "le nombre minimal de pas était de : "+ coupMin;
if ((coupMin - compteur) > 0){
    result.innerText = `Vous avez joué ${compteur} coup, vous auriez pu le faire en ${coupMin} coups vous pouvez réessayer et le faire en ${compteur - coupMin}`;
} 
    divWin.classList.add("pasCacher");
}

function reset(){
    location.reload();
}

déplacement();
