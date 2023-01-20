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
    expand(x,y);
}

function expand(x, y) {
    let exit = 0;
    let rand = 0;
    let odds = 0;

    console.log(x,y);

    let cheminTemp = [
        [1,0],[-1,0],[0,1],[0,-1]
    ];

    for (let i = 0; i < cheminTemp.length; i++) {
        let newX = x + cheminTemp[i][0];
        let newY = y + cheminTemp[i][1];

        if (tab[newX] === undefined || tab[newY] === undefined)  {        
        } else if (tab[newX][newY] === 'o') {
            exit += 1;
        }
    }

    console.log(exit);

    if (exit === 1) {
        odds = 1;
    } else if (exit === 2) {
        odds = 2/3;
    } else if (exit === 3) {
        odds = 1/4;
    }

    console.log(odds);

    // if (tab[x][y - 1] === 'o') {
    //     rand = Math.round(Math.random());
    //     if (rand < odds) {
    //         tab[x][y - 1] = 1;
    //         cheminTemp.push([0,-1]);
    //         console.log(cheminTemp);
    //     }
    // }
    // if (tab[x][y + 1] === 'o') {
    //     rand = Math.round(Math.random());
    //     if (rand < odds) {
    //         [x][y + 1] = 1;
    //         cheminTemp.push([0,1]);
    //         console.log(cheminTemp);

    //     }
    // } 
    // if (tab[x - 1][y] === 'o') {
    //     rand = Math.round(Math.random());
    //     if (rand < odds) {
    //         [x - 1][y] = 1;
    //         cheminTemp.push([-1,0]);
    //         console.log(cheminTemp);

    //     }
    // }
    // if (tab[x + 1][y] === 'o') {
    //     rand = Math.round(Math.random());
    //     if (rand < odds) {
    //         [x + 1][y] = 1;
    //         cheminTemp.push([1,0]);
    //         console.log(cheminTemp);

    //     }
    // }
}


// if (odds > 2/3) {

// }