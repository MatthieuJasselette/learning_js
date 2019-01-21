const readlineSync = require("readline-sync");

let calcSurface = (length, width) => {
  return length*width;
}

let rectangleLength = readlineSync.question("What is the length of the rectangle ?");
let rectangleWidth = readlineSync.question("What is the width of the rectangle ?");
calcSurface(parseInt(rectangleLength, 10), parseInt(rectangleWidth, 10));
console.log(`Your rectangle area is ${calcSurface(parseInt(rectangleLength, 10), parseInt(rectangleWidth, 10))}`);
