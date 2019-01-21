const readlineSync = require("readline-sync");
/*let userName = readlineSync.question('Can you give me your name please?');
console.log("Hello " + userName);
console.log("It works !!!");*/

/*let name = "Jean";
let nameSister = "Emma";
console.log("My name is " + name);*/

/*let userName = readlineSync.question("What's your name?");
console.log("He's called " + userName);*/

let htmlBadges = readlineSync.question('How many HTML badges do you have?');

let cssBadges = readlineSync.question('How many CSS badges do you have?');

let totalBadges = parseInt(htmlBadges) + parseInt(cssBadges);

console.log('Woaw, you have ' + totalBadges + " badges !");
