const readlineSync = require("readline-sync");

let fibonacciNumbers = () => {
    let n = readlineSync.question("Entrez la quantité de nombres de Fibonacci que vous souhaitez calculer. ")
    let fibonacciSuite = [];
    for (let i = 0 ; i < n ; i ++) {
         if ( i < 2){
            fibonacciSuite.push(1)
            console.log("Contrôle 1 : ", fibonacciSuite); //Fonctionne
        } else {
            let currentNumber = fibonacciSuite[i-1] + fibonacciSuite[i-2];

            fibonacciSuite.push(currentNumber);
        }
    }
    return fibonacciSuite;
}
console.log(fibonacciNumbers());

/*Enoncé:
Make a program that asks for an integer n and generates the n first Fibonacci numbers.

Yes, you'll have to search what the hell are Fibonacci numbers.*/
