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
}

let crazyRectangle = (rectAmount) => {
  //Générer un nombre donné (rectAmount) de rectangles ; Fonctionne !
  for(i = 0 ; i < rectAmount ; i ++){
    let randomTopXPos = Math.floor(Math.random()*100);
    let randomTopYPos = Math.floor(Math.random()*100);
    let randomWidth = Math.floor(Math.random()*25);
    let randomLength = Math.floor(Math.random()*25);
    let randomName = "rect"+(i+1); //incrémenter sur l'attribut nom des objets créés
    let rect = new Rectangle(randomTopXPos, randomTopYPos, randomWidth, randomLength, randomName);
    //console.log(randomName); //Fonctionne
    //console.log(this.name); //Undefined, normal, le "this" est passé via le get name
    console.log(rect.name); //Fonctionne, appelle la méthode get name qui inclut un this
    console.log(rect.topLeftXPos, rect.topLeftYPos, rect.width, rect.length); //Fonctionne
  }
  //console.log(rect42.topLeftXPos) Ne fonctionne pas ; rect42 est la valeur de this._name pour une instance de Rectangle

  //Intégrer une boucle qui va utiliser collides() ; utliser 2 boucles.
  for(i = 0 ; i < rectAmount ; i++){
    for (j = 0 ; j < rectAmount ; j++){
      recti.collides(rectj); /*recti et rectj non définis
      => Comment aller récupérer les rectangles générés ?*/
    }
  }
}

crazyRectangle(3)
//console.log("Contrôle 2 : ",rectangle1);


/*Enoncé:
Create a program that will re-use the Rectangle class you created previously.
It should generate 1000 random instances of Rectangle with random positions and sizes.
  => Boucle for
Then it will display all colliding rectangles amongst those that were generated that way.
  => itérateur (for each) ? Ne fonctionne que sur des arrays, pas sur des objets.

  Le code doit d'abord générer 1000 rectangles et ensuite les comparer chacun à tous les autres.
*/
