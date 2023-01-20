function colonneMur() {
    for (let i = 0; i < hauteur; i++) {
        ligneTab.push(0);
    }
    tab.push(ligneTab);
    ligneTab = [];
}

function creerColonne() {
    ligneTab.push(0);

    for (let j = 0; j < (hauteur - 2); j++) {

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

    colonneMur();

    for (i = 0; i < (largeur - 2); i++) {
        creerColonne();
    }

    colonneMur();
    affichage(tab);
}

