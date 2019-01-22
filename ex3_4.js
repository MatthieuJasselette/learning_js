let newArr = [5, 2, 5, 9, 1];
/*let minNumber = "empty"; //la version avec du code crasseux
let maxNumber = 0;

for (let i = 0 ; i <newArr.length ; i ++) {
  if (newArr[i] > maxNumber) {
    maxNumber = newArr[i]
  }
  if (minNumber == "empty"){ // code crasseux
    minNumber = newArr[i];
  } else if (newArr[i] < minNumber){
    minNumber = newArr[i];
  }
}

console.log(`The minimum is ${minNumber} and the maximum is ${maxNumber}`)*/

//console.log(typeof newArr); //Contrôle
//console.log(typeof newArr[0]); // Contrôle
console.log(`The minimum is ${Math.min.apply(null, newArr)} and the maximum is ${Math.max.apply(null, newArr)}`) //simple et lisible mais ne fonctionne pas
