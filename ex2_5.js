const readlineSync = require("readline-sync");

let favouriteNumber = readlineSync.question("What is your favourite number ?")

while ( /*parseInt(*/favouriteNumber/*, 10)*/ !== "42"){ //le parseInt n'a rien changé.
  console.log("Are you sure ?");
  // let favouriteNumber = readlineSync.question("What is your favourite number ?"); Appeler la var dans la fonction est probablement l'erreur
  favouriteNumber = readlineSync.question("What is your favourite number ?") //il ne fallait pas appeler une nouvelle var, jsute modifier la valeurde la let orignale.
}
//Ne fonctionne que si 42 est la première réponse, sinon ça boucle à l'infini.
