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

function checkColor(tab, a, b) {
    if (tab[a][b] === 'o') {
        return 'grey';
    } else if (tab[a][b] === 'b') {
        return 'black'
    } else {
        return 'white';
    }
}