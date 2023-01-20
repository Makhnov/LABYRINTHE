const space = "";
const br = "\n";

const largeur = 40; // X
const hauteur = 30; // Y
const caseL = 90 / largeur;
const caseH = 90 / hauteur; 

const grid = document.getElementById('container');

let tab = [];
let tabTemp = [];
let ligneTab = [];
let case1Tab = [];

let exit = false;
let chemin = [];
