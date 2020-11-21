//asks the user to enter the length and width of a room in meters, 
//and then logs the area of the room to the console in both square meters and square feet.
//Note: 1 square meter == 10.7639 square feet
//Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

let rlSync = require('readline-sync');
let length = rlSync.question("Enter the length of the room in meters: \n");
let width = rlSync.question("Enter the width of the room in meters: \n");
let sqrmeter = parseFloat(length) * parseFloat(width);
let sqrfeet = sqrmeter * 10.7639;

console.log(`The area of the room is ${sqrmeter} in squaremeter and ${sqrfeet} in squarefeet!`);