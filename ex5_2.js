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
// Fonctionne ! ! !
//change alétoirement la place d'éléments dans un array, modifie l'array source et n'en fournit pas un nouveau.
let randomizeCast = (tvSerie) => {
    for (let i = tvSerie.length - 1; i > 0; i--) { //boucle régressive
        const j = Math.floor(Math.random() * ( i + 1)); //magie ?
        [tvSerie[i], tvSerie[j]]=[tvSerie[j], tvSerie[i]]; //inversion de l'index avec la valeur aléatoire
    }
} // Fonctionne

/* //Array de test et appel de fonction contrôle
let arrTest = [1, 2, 3, 4, 5]
randomizeCast(arrTest);
console.log(arrTest);
*/

//Demande des infos sur une série et les arrange dans un objet
let askTvSerie = () =>{
//Demander et enregistrer les préférences de l'utilisateur.
  let favName = readlineSync.question("Quel est le nom de votre série préférée ? ");
  let favProdYear = readlineSync.question("En quelle année a-t'elle débuté ? ");
  let favActors = askFavCastNames(); //renvoie un array de noms d'acteurs
//Fonctionne
  randomizeCast(favActors); //déplacer les noms des acteurs
  console.log("Contrôle -1 : " + favActors);//Control
//Fonctionne mais c'est de la triche.
  // Crée un objet avec la fonction serieFactory e tles inputs enregistrés avant
  let favSerie = serieFactory(favName, favProdYear, favActors);
  //console.log(`contrôle 1 : Nom de la série : ${favSerie.name}, Date de production : ${favSerie.prodYear}, Noms des acteurs : ${favSerie.castNames}`); //Control
// Fonctionne
  //console.log(`contrôle 2 : ${JSON.stringify(favSerie)}`); //appelle la varaible qui contient l'output de la fonction.
  //console.log(`contrôle 3 : ${JSON.stringify(serieFactory(favName, favProdYear, favActors))}`)//appelle la fonction avec les paramètres sans passer par une variable
  return JSON.stringify(favSerie);
}
console.log(askTvSerie());//Fonctionne, retourne le texte en format JSON ?

/*Enoncé:
Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous
exercise and return a list of the same cast but in a random order.

Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a
randomized list of the previous cast that will form the new cast of your next serie.*/
