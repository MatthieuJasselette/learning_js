const readlineSync = require("readline-sync");

//Demander les coordonnées
const firstCoordX = readlineSync.question("Donnez la position sur l'axe X de votre première coordonnée.");
const firstCoordY = readlineSync.question("Donnez la position sur l'axe Y de votre première coordonnée.");
const secundCoordX = readlineSync.question("Donnez la position sur l'axe X de votre seconde coordonnée.");
const secundCoordY = readlineSync.question("Donnez la position sur l'axe Y de votre seconde coordonnée.");

//Stocke les coordonnées
let coordAlpha = [firstCoordX, firstCoordY];
let coordBeta = [secundCoordX, secundCoordY];
console.log(`Contrôle : ${coordAlpha} - ${coordBeta}`); // COntrôle ; fonctionne

let calcDistance = () => { //ça fonctionne ! ! !
  return Math.sqrt(Math.pow((secundCoordX-firstCoordX), 2)+Math.pow((secundCoordY-firstCoordY), 2));
}
console.log(calcDistance());

let calcDistanceNew = (arr1, arr2) => { // Fonctionne aussi et appelle des éléments d'un array plutôt que des var isolées
  return Math.sqrt(Math.pow((arr2[0]-arr1[0]), 2)+Math.pow((arr2[1]-arr1[1]), 2));
}
console.log(calcDistanceNew(coordAlpha, coordBeta)); //les arrays à utiliser sont fournis en input de la function.

/*Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space.
That function must return the distance between those two points.

Create a program to use that function.

Note: You probably need to make some search on Google to learn the mathematical formula to do that.
You will also probably need to search for useful functions in JavaScript to help you making complex mathematical formulas...

 Distance =((x2−x1)^2+(y2−y1)^2)^-2 => square root
 square : Math.pow ( base, exponent )
 square-root : Math.sqrt(x)
 => Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1), 2))*/
