const readlineSync = require("readline-sync");
let firstNumber = readlineSync.question("Enter a number with decimals.")
let secondNumber = readlineSync.question("Enter another number with decimals.")

console.log(Math.ceil(firstNumber)*secondNumber)
