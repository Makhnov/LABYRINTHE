function colonneDepart(a) {
    let yDepart = Math.trunc(Math.random() * (hauteur - 1)) + 1;
    for (let i = 0; i < hauteur; i++) {
        if (yDepart != i) {
            ligneTab.push('b');
        } else {
            if (a === 1) {
                ligneTab.push(1);
            } else {
                ligneTab.push('b');
            }
        }
    }
    tab.push(ligneTab);
    ligneTab = [];
}

function creerColonneVide() {

    ligneTab.push('b');
    for (let i = 0; i < (hauteur - 2); i++) {
        ligneTab.push('o');
    }
    ligneTab.push('b');
    tab.push(ligneTab);
    ligneTab = [];
}

function creerTableauVide() {

    tab = [];
    colonneDepart(1);

    for (let i = 0; i < (largeur - 2); i++) {
        creerColonneVide();
    }

    colonneDepart(2);
    affichage(tab);
}

function creerLabyrinthe() {
    for (let x = 0; x < largeur; x++) {
        for (let y = 0; y < hauteur; y++) {
            if (tab[x][y] === 1) {
                return labyrinthe(x, y);
            }
        }
    }
}

function labyrinthe (x, y) {
    chemin.push([x,y]);
    console.log(chemin);
}

// function expand(x, y) {
//     let odds = Math.round(Math.random());
//     if (tab[x - 1][y - 1] != ) 
//         if (odds > 2/3) {

//         }
// }


