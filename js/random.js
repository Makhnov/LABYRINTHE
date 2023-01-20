const colonne = 40; // X
const ligne = 30; // Y

let tab = [];
let tabTemp = [];
let ligneTab = [];
let case1Tab = [];

function bordure() {
    for (let i = 0; i < ligne; i++) {
        ligneTab.push(0);
    }
    tab.push(ligneTab);
    ligneTab = [];
}

function creerLigne() {
    ligneTab.push(0);

    for (let j = 0; j < (ligne - 2); j++) {

        let case0 = Math.round(Math.random());

        if (case0 === 1) {

            for (let k = 0; k < 4; k++) {
                let case1 = Math.round(Math.random());
                case1Tab.push(case1);
            }

            ligneTab.push(case1Tab);
            case1Tab = [];

        } else {
            ligneTab.push(0);
        }
    }

    ligneTab.push(0);
    tab.push(ligneTab);
    ligneTab = [];
}

function creerTableau() {

    tab = [];

    bordure();

    for (i = 0; i < (colonne - 2); i++) {
        creerLigne();
    }

    bordure();
    affichage(tab);
}

function checkColor(tab, a, b) {
    if (tab[a][b] === 0) {
        return 'black';
    } else { 
        return 'white';
    }
}