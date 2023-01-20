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

const imge = document.getElementById("1");
x = 0;
y = 0;
window.addEventListener('keydown', function (e) {
    if (e.key == "ArrowLeft") {
        x -= caseL;
        imge.style.transform = "translateX(" + x + "vw) translateY(" + y + "vh)";
    }

    if (e.key == "ArrowRight") {
        x += caseL;
        imge.style.transform = "translateX(" + x + "vw) translateY(" + y + "vh)";
    }

    if (e.key == "ArrowDown") {
        y += caseH;
        imge.style.transform = "translateY(" + y + "vh) translateX(" + x + "vw)";
    }

    if (e.key == "ArrowUp") {
        y -= caseH;
        imge.style.transform = "translateY(" + y + "vh) translateX(" + x + "vw)";
    }
});

function checkColor(tab, a, b) {
    if (tab[a][b] === 'o') {
        return 'grey';
    } else if (tab[a][b] === 'b') {
        return 'black'
    } else if (tab[a][b] === 1 ) {
        return 'white';
    } else {
        return 'lightgrey';
    }
}
