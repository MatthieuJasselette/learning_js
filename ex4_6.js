const readlineSync = require("readline-sync");

const pickNumber = parseInt(readlineSync.question("Pick a  number."));

console.log(typeof pickNumber) // Contrôle

let factorial = (a) => {
  if (a < 0) {
    return -1;
  } else if (a == 0) {
    return 1;
  } else {
    return a*factorial(a-1);
  }
}
//console.log(factorial(5)); //Contrôle
console.log(factorial(pickNumber));

/*
énoncé :
Create a function factorial(a) that returns the factorial of a number.

That function must be recursive.

Recursivity :
function count(i) {
  if (i <= 100) {
    console.log(i);
    count(i + 1);
  }
}

count(i);
// displays all numbers from 1 to 100
This has nothing to do with a language element in JavaScript. Recursivity is a programming technique that you can use in all
programming languages. It's used when a function calls itself.

There exist some mathematical demonstrations that prove recursive functions can always be used instead of loops for all type
of calculation, just like the opposite is true. In term of ease of use and readability sometimes loops are more appropriate
and sometimes recursive functions are better.

We won't make a whole lecture about it because it's not the simplest thing to master. But you should know it exists and try
remember it as it can be useful from time to time.
*/
