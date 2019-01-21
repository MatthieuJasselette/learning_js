const readlineSync = require("readline-sync");
let breakFast =readlineSync.question("What did you have for breakfast today ? (only one word)");
let shampooBrand = readlineSync.question("What's the brand of your shampoo ?");
let carBrand = readlineSync.question ("What's the brand of your car ?")
let dinnerChoice = readlineSync.question("What would you like to eat for dinner ?")

console.log(`Today you ate ${breakFast}, then washed your hair with ${carBrand}, rode your ${shampooBrand} to becode and tonight you would like to eat ${dinnerChoice}.`);
