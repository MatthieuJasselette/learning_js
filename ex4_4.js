const readlineSync = require("readline-sync");

//donne un nombre aléatoire

let rand10 = () => {
  return Math.floor(Math.random()*10); // works
}

//demande le nombre de chiffres à générer
const numberAmount = parseInt(readlineSync.question("Enter the amount of random numbers you want."), 10) // works

//génère un nombre déterminé de chiffres aléatoires
function multiRand() {
    let randNumbers = []; // array à produire
    for (i = 0 ; i < parseInt(numberAmount, 10) ; i ++) {
        randNumbers.push(rand10()); // works !
    }
    return randNumbers;
  }

/*  let average = (multiRand()) => {
 //ne fonctionne pas
  } */

  /*let controleArr = [1, 2, 3, 4];
  console.log(`The minimum is ${Math.min.apply(null, controleArr)} and the maximum is ${Math.max.apply(null,controleArr)}`)*/

  //trouve le min d'un array
  let min = (arr) => Math.min.apply(null, arr) ;
  //console.log(min(controleArr)) //Contrôle

  //trouve le max d'un array
  let max= (arr) => Math.max.apply(null, arr);
  //console.log(max(controleArr)) //Contrôle

let program = () => {
  let programArr = [];
  programArr = multiRand(); //donne un array
  return programArr; //Contrôle /!\ Var =/ fonction
  return min(programArr); //Pas d'output.

}
console.log(program()); //Contrôle

// exemple d'erreur, pas d'accès à programArr car let au sein d'une fonction donc hors scope
//console.log(Math.max(programArr));

/*énoncé :
Create a function named average(arr) that takes an array of numbers as argument and returns the average.

Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.

Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.

Create a program that asks a number to the user then generate that same amount of random numbers but also displays
their average, min and max. To do so, use the three functions you just created as well as the multiRand(n) function
created in Exercise 3.  */
