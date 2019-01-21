const readlineSync = require("readline-sync");

let n = readlineSync.question("Enter a number"); //Demande un nombre, initialisation
let n2 = 0
for (let i = 0 ; i < n ; i++) {

  //console.log (`Répétition ${i+1}`); code pour vérifier que la boucle tourne
  let n3 = readlineSync.question("Enter a new number") //Demande un nouvel input => Où le sauver ?
  n2 = parseInt(n2, 10) + parseInt(n3, 10);// Utiliser le parseInt pour additionner des numbers et pas des string.
}
console.log(n2); // affiche la somme des inputs => nécessite une nouvelle var ?
