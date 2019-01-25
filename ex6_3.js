const readlineSync = require("readline-sync");

class Rectangle {
  constructor(topLeftXPos, topLeftYPos, width, length, name){
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = length;
    this._name = name; //ajout d'un élément nom pour appeler les rectangles au sein d'une méthode ou d'une fonction.
  }

  //Ajout d'un getter sur le nom
  get name(){
    return this._name;
  }
  //méthode de collision avec un input inspirée du code touvé dans la doc mdn
  collides(otherRectangle){
    if(this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
   this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
   this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
   this.length + this.topLeftYPos > otherRectangle.topLeftYPos){
      return true;
    }
  }
  //essai pour bypass la méthode toString par défaut ; Fonctionne  ! ! !
  toString (){
      var ret = `${this.name} : [${this.topLeftXPos} - ${this.topLeftYPos}] Longueur : ${this.length}, Largeur : ${this.width}`;
      return ret;
    }
}

let crazyRectangle = () => {
  let rectAmount = readlineSync.question("Combien de rectangles voulez vous générer ?")
  //Générer un nombre donné (rectAmount) de rectangles ; Fonctionne !
  let rectangleBox = [];
  for(i = 0 ; i < rectAmount ; i ++){
    let randomTopXPos = Math.floor(Math.random()*100);
    let randomTopYPos = Math.floor(Math.random()*100);
    let randomWidth = Math.floor(Math.random()*2.5);
    let randomLength = Math.floor(Math.random()*2.5);
    let randomName = "rect"+(i+1); //incrémenter sur l'attribut nom des objets créés
    let rect = new Rectangle(randomTopXPos, randomTopYPos, randomWidth, randomLength, randomName);
    rectangleBox.push(rect); // Important pour stocker les objets générés sinon ils disparaissent à la fin for
  } // Retourne un array avec un nombre rectAmount de rectangles
  //Vérifie les collisions pour chaque rectangle présent dans rectangleBox
  let collisionCount = 0;
  for(i = 0 ; i < rectAmount ; i++){
    for (j = 0 ; j < rectAmount ; j++){
      if (i !== j){
        if(rectangleBox[i].collides(rectangleBox[j]) == true){//on utilise l'index des objets stockés dans rectangleBox
          collisionCount ++;
          //log avec la mise en forme basique JSON pour un objet
        //console.log(`Collision détectée entre ${JSON.stringify(rectangleBox[i])} et ${JSON.stringify(rectangleBox[j])}`);
          //log avec une mise en forme personnalisée et adaptée au contenu
        console.log(`Collision détectée entre ${rectangleBox[i].toString()} et ${rectangleBox[j].toString()}`);
        //ne plus oublier () après la déclaration d'une méthode :(
        }
      }
    }
  }
  console.log(`${collisionCount} collisions détectées.`);
}

crazyRectangle()
//console.log("Contrôle 2 : ",rectangle1);


/*Enoncé:
Create a program that will re-use the Rectangle class you created previously.
It should generate 1000 random instances of Rectangle with random positions and sizes.
  => Boucle for
Then it will display all colliding rectangles amongst those that were generated that way.
  => itérateur (for each) ? Ne fonctionne que sur des arrays, pas sur des objets.

  Le code doit d'abord générer 1000 rectangles et ensuite les comparer chacun à tous les autres.

bypass la méthode toString
  Dog.prototype.toString = function dogToString() {
  var ret = 'Dog ' + this.name + ' is a ' + this.sex + ' ' + this.color + ' ' + this.breed;
  return ret;
}
*/
