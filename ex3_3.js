let firstArr = [1, 2, 3, 4]; // source array
let secondArr = []; // empty destination array
//for (elem of firstArr){ trop dur à faire direct avec une version condenséelse
/*for (let i = 0 ; i < firstArr.length ; i ++){ //Cette méthode n'utilise pas push ni de méthode
  secondArr[i] = firstArr[i];
}*/

for (let i = 0 ; i < firstArr.length ; i ++) {
secondArr[i] = secondArr.push(firstArr[i]);
}

//secondArr=firstArr.slice();  méthode d'appel simple
console.log(firstArr);
console.log(secondArr);
