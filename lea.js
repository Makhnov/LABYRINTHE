let compteur = 0;
function déplacement() {
    compteur++;
    afficher();
}

let affichage = document.getElementById('compte');
function afficher() {
    affichage.innerText = compteur;
}

déplacement();