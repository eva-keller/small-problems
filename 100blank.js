//Write a function that checks whether a string is empty or not.

//const isBlank = str => str === (''); 
//Change your isBlank function from the previous exercise 
//to return true if the string is empty or only contains whitespace.

function isBlank(string) {
    return string.trim().length === 0;
  }


console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank('')); 