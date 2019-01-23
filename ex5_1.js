const readlineSync = require("readline-sync");

//Construit un objet avec un nom, une date et un acteur
let serieFactory = (name, prodYear, castNames) => {
  return {
    "name" :name,
    "prodYear" : prodYear,
    "castNames" : castNames //Peut prendre un array en input
  }
}
//console.log(serieFactory("becode", 2018, "Antoine")); //Fonctionne
/*
let randomSerie = serieFactory("New testament", 0, ["Jesus", "Judas"]);
console.log(randomSerie); //Fonctionne
*/

//Demande plusieurs noms et les stocke
let askFavCastNames = () => {
  let favCastNames = [];
  let i;
  do {
    i =  readlineSync.question("Qui joue dedans ? (enter X to stop) ")
    favCastNames.push(i);
  }
  while (i !== "X") //interruption goes here
  favCastNames.pop();
  return favCastNames //output pour la fonction d'appel
}// Fonctionne ! ! !
//askFavCastNames(); //appel de contrôle

let askTvSerie = () =>{
//Demander et enregistrer les préférences de l'utilisateur.
  let favName = readlineSync.question("Quel est le nom de votre série préférée ? ");
  let favProdYear = readlineSync.question("En quelle année a-t'elle débuté ? ");
  let favActor = askFavCastNames(); //renvoie un array de noms d'acteurs
  //console.log(`contrôle 0 : ${favName}, ${favProdYear}, ${favActor}`); //Control
//Fonctionne
// Crée un objet avec la fonction serieFactory e tles inputs enregistrés avant
  let favSerie = serieFactory(favName, favProdYear, favActor);
  console.log(`contrôle 1 : Nom de la série : ${favSerie.name}, Date de production : ${favSerie.prodYear}, Noms des acteurs : ${favSerie.castNames}`); //Control
// Fonctionne
  console.log(`contrôle 2 : ${JSON.stringify(favSerie)}`); //appelle la varaible qui contient l'output de la fonction.
  console.log(`contrôle 3 : ${JSON.stringify(serieFactory(favName, favProdYear, favActor))}`)//appelle la fonction avec les paramètres sans passer par une variable
}
askTvSerie(); //nécessaire pour appeler askTvSerie

/*Enoncé:
Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

Name
Production year
Names of the cast members (there can be as much as the user want)
That function must gather all the data in a single object and return it. The data structure must be elegant.

Create a program that use that function to generate a TV serie object and display it to the user in JSON format.*/
