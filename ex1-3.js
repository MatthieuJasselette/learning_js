const readlineSync = require("readline-sync");
let firstName = readlineSync.question('What is your firstname?');
console.log(`Hello ${firstName}`)
