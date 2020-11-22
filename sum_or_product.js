//Write a program that asks the user to enter an integer greater than 0, =readline sync
//then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer
//expected output:
//Please enter an integer greater than 0: 5
//Enter "s" to compute the sum, or "p" to compute the product. 
//save result to a variable
//if the choice is s - do this, if the choice is p-do that
//function for the sums of all numbers up to the entered int
//function for the product of all numbers up to the entered int
// output = The sum of the integers between 1 and 5 is 15.
let rlsync = require('readline-sync');
let number = rlsync.question("Enter an integer greater than 0: \n");
console.log(`You entered ${number}.`);
let choice = rlsync.question("Enter 's' to compute the sum, or 'p' to compute the product.");
console.log(`Your choice is ${choice}`);

function compute(choice){
    if(choice === 's'){
        return sumTo();
    }else {
        return productTo();
    }
}

function sumTo(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
  }

function productTo(number) {
    let product = 1;
    for (let i = 1; i<= number; i++) {
    product *= i;
    }
    return product;
}
  
console.log(`The sum of the integers between 1 and ${number} is ` + sumTo(number));
console.log(`The product of the integers between 1 and ${number} is ` + productTo(number));


