let newArr = [3, 2, 5, 9, 1];
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

console.log(`The minimum is ${Math.min(newArr)} and the maximum is ${Math.max(newArr)}`) //simple et lisible
