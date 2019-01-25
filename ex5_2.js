const readlineSync = require("readline-sync");
//Construit un objet avec un nom, une date et un acteur
let serieFactory = (name, prodYear, castNames) => {
  return {
    "name" :name,
    "prodYear" : prodYear,
    "castNames" : castNames //Peut prendre un array en input
  }
}

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
}

//change alétoirement la place d'éléments dans un array, modifie l'array source et n'en fournit pas un nouveau.
let randomizeCast = (tvSerie) => {
    for (let i = tvSerie.length - 1; i > 0; i--) { //boucle régressive
        const j = Math.floor(Math.random() * ( i + 1)); //magie ?
        [tvSerie[i], tvSerie[j]]=[tvSerie[j], tvSerie[i]]; //inversion de l'index avec la valeur aléatoire
    }
}

//Demande des infos sur une série et les arrange dans un objet
let askTvSerie = () =>{
//Demander et enregistrer les préférences de l'utilisateur.
  let favName = readlineSync.question("Quel est le nom de votre série préférée ? ");
  let favProdYear = readlineSync.question("En quelle année a-t'elle débuté ? ");
  let favActors = askFavCastNames(); //renvoie un array de noms d'acteurs
// Crée un objet avec la fonction serieFactory e tles inputs enregistrés avant
  let favSerie = serieFactory(favName, favProdYear, favActors);
//insérer le randomizeCast AVANT le stringify fonctionne mais c'est un peu de la triche
  randomizeCast(favSerie.castNames);
  favSerie = JSON.stringify(favSerie); // maintenant favSerie est un string JSON
  return favSerie;
  /* Tentative pour utiliser le JSON.parse mais il nesemble pas prendre favSerie en input.
  console.log("contrôle 3.2" + favSerie)
  const favserieRandomize = JSON.parse(favSerie)
  randomizeCast(favserieRandomize.castNames)
  return favserieRandomize;
  */
}
console.log(askTvSerie());//Fonctionne, retourne le texte en format JSON

/*Enoncé:
Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous
exercise and return a list of the same cast but in a random order.

Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a
randomized list of the previous cast that will form the new cast of your next serie.*/
