const grid = document.getElementById('container');
const largeur = 40;
const hauteur = 30;
const caseL = 90 / largeur;
const caseH = 90 / hauteur; 

function affichage(tab) {
    grid.style.gridTemplateColumns = '(repeat' + largeur + ',' + space + caseL + 'vw)';
    grid.style.gridTemplateRows = '(repeat' + hauteur + ',' + space + caseH + 'vh)';

    
    for (let i = 0; i < largeur; i++) {
        for (let j = 0; j < hauteur; j++) {
            let div = document.createElement('div');
            div.style.height = caseH + 'vh';
            div.style.width = caseL + 'vw';
            div.style.gridColumn = i + 1;
            div.style.gridRow = j + 1;
            div.style.background = checkColor(tab, i, j);
            grid.appendChild(div);
            div = '';
        }
    }
}


