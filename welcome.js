//Create a function that takes 2 arguments, an array and an object. 
//The array will contain 2 or more elements that, when combined with adjoining spaces, 
//will produce a person's name. 
//The object will contain two keys, "title" and "occupation", and the appropriate values. 
//Your function should return a greeting that uses the person's full name, and mentions the person's title.
//name = ["John", "Q", "Doe"];

let greetings = function(nameArr, detailsObj) {  //save the function in a variable
    let fullName = nameArr.join(' '); //join returns the array as string separated by comma or space
    let fullOcc = Object.values(detailsObj).join(' ');
    return `Hello, ${fullName}! Nice to have a ${fullOcc} around.`;
  };

greetings();
greetings(["Eve", "Q", "Doe"], { title: "Junior", occupation: "Plumber" })


//console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
  // logs Hello, John Q Doe! Nice to have a Master Plumber around.