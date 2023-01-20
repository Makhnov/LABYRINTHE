function colonneDepart(a) {
    let yDepart = Math.trunc(Math.random() * (hauteur - 2)) + 1;
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
    chemin = [];
    chemin.push([x,y]);
    expand();
}

function expand() {
    console.log('EXPAND');
    let x = chemin[(chemin.length - 1)][0];
    let y = chemin[(chemin.length - 1)][1];

    let newX = 0;
    let newY = 0;
    let rand = 0;

    console.log(x,y);

    let cheminTemp = [
        [1,0],
        [-1,0],
        [0,1],
        [0,-1]
    ];

    for (let i = (cheminTemp.length - 1); i > -1; i--) {
        newX = x + cheminTemp[i][0];
        newY = y + cheminTemp[i][1];

        if (
        tab[newX] === undefined || 
        tab[newX][newY] === 'b' || 
        tab[newX][newY] === 1 
        ) {
            cheminTemp.splice(i,1); 
        }
    }

    switch (cheminTemp.length) {

        case 0 :
            console.log('erreur');
            return;
        case 1 : 
            newX = x + cheminTemp[0][0];
            newY = y + cheminTemp[0][1];
            tab[newX][newY] = 1;
            chemin.push([newX,newY]);
            console.log('CAS1');
            affichage(tab);
            break;

        case 2 : case 3 :
            rand = Math.trunc(Math.random() * cheminTemp.length);

            for (i = 0; i < cheminTemp.length; i++) {
                newX = x + cheminTemp[i][0];
                newY = y + cheminTemp[i][1];
                if (rand === i) {

                    tab[newX][newY] = 1;
                    chemin.push([newX,newY]);
                } else if (Math.random() < (1/(cheminTemp.length + 2))) {
                    console.log('LUCK');
                    tab[newX][newY] = 2;
                } else {
                    tab[newX][newY] = 'b';
                    console.log('NO LUCK');
                }
            }
            affichage(tab);
            break;
    }
}


