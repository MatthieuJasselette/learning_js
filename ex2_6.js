const readlineSync = require("readline-sync");
let pickNumber = readlineSync.question("Pick a number between 1 and 7.")

if (pickNumber>=1 && pickNumber<=7){
  if(pickNumber==1){
    console.log("Monday")
  }
  else  if(pickNumber==2){
    console.log("Tuesday")
  }
  else  if(pickNumber==3){
    console.log("Wednesday")
  }
  else if(pickNumber==4){
    console.log("Thursday")
  }
  else  if(pickNumber==5){
    console.log("Friday")
  }
  else  if(pickNumber==6){
    console.log("Saturday")
  }
  else  if(pickNumber==7){
    console.log("Sunday")
  }
}
else {
  console.log(`${pickNumber} is not between 1 and 7. Please pick a number between 1 and 7`)
}
