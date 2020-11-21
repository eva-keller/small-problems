//The program should prompt for a bill amount and a tip rate. 
//The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
//expected output
//What is the bill? 200
//What is the tip percentage? 15
//The tip is $30.00
//The total is $230.00
let rlSync = require('readline-sync');
let billAmount = rlSync.question("What is the bill? \n");
let tipRate = rlSync.question("What is the tip percentage? \n");

let tipAmount = parseFloat(billAmount * (tipRate/100));
let billTotal = parseFloat(billAmount) + parseFloat(tipAmount);

console.log(`The tip is $${tipAmount}.`);
console.log(`The total is $${billTotal}.`);