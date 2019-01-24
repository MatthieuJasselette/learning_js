//console.log("Omae wa mou shindeiru !")
class Circle {
  constructor(xPos, yPos, radius){
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
  }
  get circleSurface () {
    return (Math.PI*Math.pow(this.radius, 2));// PI est une sale crasse qui prend tout en maj.
  }
  move(xOffset, yOffset){
    this.xPos = xOffset;
    this.yPos = yOffset;
  }
}

//Classe enfant qui ne sert à rien à part à frimer ?
class SmallCircle extends Circle {
  constructor(xPos, yPos, radius){
    super(xPos, yPos, radius);
  }
}

let firstCircle = new Circle(0, 0, 2);
let secundCircle = new SmallCircle(1,1,1);

console.log(firstCircle);
console.log("Contrôle 1 : ", firstCircle);
console.log("Surface " + firstCircle.circleSurface);
firstCircle.move(2, 2);
console.log("Contrôle 2 : ", firstCircle);

console.log(secundCircle);
console.log("Contrôle 1 : ", secundCircle);
console.log("Surface " + secundCircle.circleSurface);
secundCircle.move(2, 2);
console.log("Contrôle 2 : ", secundCircle);


 Enoncé:
Create a class named Circle with attributes xPos, yPos and radius.
Add a method named move(xOffset, yOffset) that will adjust the position of the circle.
Add a getter accessor named surface that will return the surface of the circle.

Test its method and accessors by modifying the values and checking if everything is consistent.

Infos :
Math.Pi => nombre Pi
Surface d'un cercle : Math.Pi*Math.pow(radius, 2)
*/
