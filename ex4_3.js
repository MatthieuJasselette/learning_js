const readlineSync = require("readline-sync");

let rand10 = () => {
  return Math.floor(Math.random()*10); // fonctionne
}

//console.log(`Your random number is ${rand10()}.`); // Contrôle

const numberAmount = parseInt(readlineSync.question("Enter the amount of random numbers you want."), 10) // fonctionne

//console.log(`The amount of number you want is ${parseInt(numberAmount, 10)}.`); // Contrôle


function multiRand() {
    let randNumbers = []; // array à produire
    //return "Hello World"; //Contrôle
    for (i = 0 ; i < parseInt(numberAmount, 10) ; i ++) { // Ne répète qu'un fois
        // return "Hello World"; //Contrôle => pas de répétition ; stocker dans un array
        //randNumbers.push(rand10); // donne un array contenant Fonction(rand10)*numberAmount
                                    // car il manque () après le nom de la fonction.
        randNumbers.push(rand10()); // works !

    }
    return randNumbers;
  }

console.log(multiRand())

/*énoncé :   By reusing the function rand10() created in Exercise 2, write a function named
 multiRand(n) that returns an array of n numbers between 1 and 10. You should not modify
 anything in rand10() to achieve this.

Use that function to create a program that will ask the number of random numbers to
generate then display that same number of random numbers.*/
