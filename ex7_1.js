const readlineSync = require("readline-sync");

let guessNumber = () =>{
  let hiddenNumber = Math.floor(Math.random()*100);
  //console.log(hiddenNumber); //Control
  checkGuess(hiddenNumber);
}

let checkGuess = (toGuess) => {
  let guess = parseInt(readlineSync.question("Guess the number "));
    if (guess === toGuess){
        console.log("Well guessed !");
    } else if (guess < toGuess){
        console.log("Too low");
        checkGuess(toGuess) // appeler la fonction pour être récursif
    } else if (guess > toGuess) {
        console.log("Too high");
        checkGuess(toGuess) // appeler la fonction pour être récursif
    }
}

guessNumber()
/*Enoncé:
Make a program that generates an integer between 1 and 100 (don't display it to the user).

Then the program should display "Guess the number" and ask the user to guess. If the user enters a
 number which is too low it should display "Too low" and re-ask the question.
If the user enters a number which is too high it should display "Too high" and re-ask the question.
If the user guess correctly it should display "Well guessed!" and exit.

nb ça ne va pas aller si je n'utilise pas une fonction récursive

ex qui boucle à l'infini car non récursif :
let guessNumber = () => {
  let hiddenNumber = Math.floor(Math.random()*100);
  console.log(hiddenNumber); //Control
//  console.log(typeOf hiddenNumber); //Control
  let guess = parseInt(readlineSync.question("Guess the number "))
//  console.log(typeOf guess); //Control
  while (guess !== hiddenNumber) { //nécessite un élément d'arrêt même s'il est impossible
    if (guess < hiddenNumber){
      console.log("Too low");
    } else if (guess > hiddenNumber){
      console.log("Too high");
    }
  }
  return console.log("Well guessed !")
}
*/
