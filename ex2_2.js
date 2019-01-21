const readlineSync = require("readline-sync");
let minNumber = readlineSync.question("Enter a min number.");
let maxNumber = readlineSync.question("Enter a max number.");
let currentNumber = readlineSync.question("Enter a number.");

if (minNumber>=maxNumber) {
  console.log(`What were you expecting ? ${minNumber} is greater than ${maxNumber}.`);
} else if (currentNumber>=minNumber && currentNumber<=maxNumber){
  console.log(`${currentNumber} is between ${minNumber} and ${maxNumber}.`);
} else if (currentNumber<minNumber || currentNumber>maxNumber){
  console.log(`${currentNumber} is not between ${minNumber} and ${maxNumber}.`)
}
