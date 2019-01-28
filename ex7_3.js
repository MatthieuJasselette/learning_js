const readlineSync = require("readline-sync");

let findDivisor = () => {
    let number = readlineSync.question("Pick a number ")
    let divisors = [];
    for (let i = 0 ; i < number ; i++) {
        if (number%i === 0){
          divisors.push(i);
        }
    }
    return divisors;
}

console.log(findDivisor());

/*Enoncé:
Make a program that asks for a positive integer.
The display all the divisors of that integer.

Examples:

7 => nothing (it's a prime number)
10 => 2 5
9187 => nothing (it's a prime number too)
134234 => 2 41 82 1637 3274 67117*/
