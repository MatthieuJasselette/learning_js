const readlineSync = require("readline-sync");

//donne un nombre aléatoire
let rand10 = () => {
  return Math.floor(Math.random()*10); // works
}

//demande le nombre de chiffres à générer
const numberAmount = parseInt(readlineSync.question("Enter the amount of random numbers you want."), 10) // works

//génère un nombre déterminé via numberAmount de chiffres aléatoires
function multiRand() {
  let randNumbers = []; // array à produire
  for (i = 0 ; i < parseInt(numberAmount, 10) ; i ++) {
      randNumbers.push(rand10()); // works !
  }
  return randNumbers;
}

//trouve le min d'un array
let min = (arr) => Math.min(...arr) ;
//console.log("Minimum = " + min(multiRand()))


//trouve le max d'un array
let max= (arr) => Math.max(...arr);
//console.log("Maximum =" + max(multiRand()))

//trouve la moyenne d'un array proprement avec .reduce()
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let betterAverage = (arr) => {
  return arr.reduce(reducer)/arr.length;
}
//console.log("Moyenne =" + betterAverage(multiRand()))



let program = () => {
  let programArr = [];
  programArr = multiRand(); //donne un array
  console.log("Array : " + programArr);// Contrôle
  return [min(programArr), max(programArr), betterAverage(programArr)];
  /*console.log(min(programArr));
  console.log(max(programArr));
  console.log(betterAverage(programArr));*/
}
console.log(program()); //Contrôle


/*énoncé :
Create a function named average(arr) that takes an array of numbers as argument and returns the average.

Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.

Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.

Create a program that asks a number to the user then generate that same amount of random numbers but also displays
their average, min and max. To do so, use the three functions you just created as well as the multiRand(n) function
created in Exercise 3.  */

/*
//trouve la moyenne d'un array en version longue et verbeuse
let average = (arr) => {
  let tempSum = 0;
  for (i = 0 ; i < arr.length ; i ++) {
    tempSum += arr[i];
  }
  return tempSum/arr.length
}
console.log("Contrôle " + average(controleArr))//Contrôle
//console.log("Moyenne =" + average(multiRand))
*/
