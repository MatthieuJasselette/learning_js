const readlineSync = require("readline-sync");
let firstName = readlineSync.question('What is your firstname?');
let name = readlineSync.question('What is your name?');
let city = readlineSync.question('Where are you from?');

console.log(`Hello ${firstName} ${name} from ${city}`);
