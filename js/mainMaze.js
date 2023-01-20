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
    expand(x,y);
}

function expand(x, y) {
    let exit = 0;
    let rand = 0;
    let odds = 0;

    console.log(x,y);

    let cheminTemp = [
        [1,0],
        [-1,0],
        [0,1],
        [0,-1]
    ];

    console.log('tab : '+cheminTemp);

    for (let i = (cheminTemp.length - 1); i > -1; i--) {
        let newX = x + cheminTemp[i][0];
        let newY = y + cheminTemp[i][1];
        /*
        console.log(
            'x :'+newX+br+
            'y :'+newY+br+
            'i :'+i+br+
            'tab :'+cheminTemp
        );
        */
        if (tab[newX] === undefined) {
            cheminTemp.splice(i,1);
            console.log('undefined :' + cheminTemp);      
        } else if (tab[newX][newY] === 'o') {
            console.log(tab[newX][newY] + ' : ' + cheminTemp);
            exit++;
        } else if (tab[newX][newY] === 'b') {
            cheminTemp.splice(i,1);
            console.log(tab[newX][newY] + ' : ' + cheminTemp);
        }
    }

    console.log(cheminTemp);


    if (exit === 1) {
        odds = 1;
    } else if (exit === 2) {
        odds = 2/3;
    } else if (exit === 3) {
        odds = 1/4;
    }



    for (let i = (cheminTemp.length - 1); i > -1; i--) {
        let newX = x + cheminTemp[i][0];
        let newY = y + cheminTemp[i][1];

        rand = Math.random();
        console.log('rand : ' + rand+br+'odds : '+odds);

        if (rand < odds) {
            tab[newX][newY] = 1;
            console.log('1 : '+tab[newX][newY])
        } else {
            tab[newX][newY] = 0;
            cheminTemp.splice(i,1);
            console.log('0 : '+tab[newX][newY])
        }
    }

    rand = Math.trunc(Math.random() * cheminTemp.length);
    console.log(rand);
    console.log(chemin);
    let newX = x + cheminTemp[rand][0];
    let newY = y + cheminTemp[rand][1];
    chemin.push([newX,newY]);

    affichage(tab);
    expand(newX,newY);
}

