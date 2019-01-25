class Rectangle {
  constructor(topLeftXPos, topLeftYPos, width, length){
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = length;
  }
  //méthode de collision avec un input inspirée du code touvé dans la doc mdn
  collides(otherRectangle){
    if(this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
   this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
   this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
   this.length + this.topLeftYPos > otherRectangle.topLeftYPos){
      return true;
    } else {
    }
  }
}

//test de collision avec deux inputs piquée sur stackoverflow
function isCollide(a, b) {
    return !(
        ((a.topLeftYPos + a.length) < (b.topLeftYPos)) ||
        (a.topLeftYPos > (b.topLeftYPos + b.length)) ||
        ((a.topLeftXPos + a.width) < b.topLeftXPos) ||
        (a.topLeftXPos > (b.topLeftXPos + b.width))
    );
} //Fonctionne

let carre1 = new Rectangle (10, 10, 10, 10);
let carre2 = new Rectangle (2, 2, 2, 2);
let rectangle1 = new Rectangle(10, 10, 10, 10);
console.log("Contrôle 2 :", isCollide(carre2, rectangle1)); // retourne false, pas de collision
console.log("Contrôle 3 :", carre1.collides(rectangle1)); // retourne true, collision


/*Enoncé :
Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width
and length. Add a method named collides(otherRectangle) that returns true onltopLeftYPos
if the current rectangle collides with otherRectangle.

Test the collides(otherRectangle) method btopLeftYPos using multiple test cases.

algo de collision :
Avec deux inputs
function isCollide(a, b) {
    return !(
        ((a.topLeftYPos + a.length) < (b.topLeftYPos)) ||
        (a.topLeftYPos > (b.topLeftYPos + b.length)) ||
        ((a.topLeftXPos + a.width) < b.topLeftXPos) ||
        (a.topLeftXPos > (b.topLeftXPos + b.width))
    );
}


*/
