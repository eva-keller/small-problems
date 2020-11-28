//Write a program that will ask for user's name. 
//The program will then greet the user. 
//If the user writes "name!" then the computer yells back to the user.
//if user says name! yell
//check the last index for ! if !, then convert the greeting to all caps.
//else greet the user
function getName(prompt) {
    let readlineSync = require('readline-sync');
    let name = readlineSync.question(prompt);
    return name;
  }
let firstName = getName('What is your first name? ');

let eMark = "!";
    if(firstName.charAt(firstName.length-1) === eMark) {
        console.log(`HELLO, ${firstName.toUpperCase()}!`);
    }else{
        console.log(`Hello, ${firstName}!`);
    }




  






//What is your name? Bob
//Hello Bob.
//What is your name? Bob!
//HELLO BOB. WHY ARE WE SCREAMING?