//Initialize a variable weather with a string value being "sunny", "rainy", or anything else.
//Write an if statement that logs:
//"It's a beautiful day!" if weather is assigned to the string "sunny",
//"Grab your umbrella." if weather is assigned to the string "rainy", and
//"Let's stay inside." otherwise.
//Test your code with different values for weather.

var weather = "grey";

switch(weather) {
    case "sunny":
        console.log("It's a beautiful day");
        break;
    case "rainy":
        console.log("Grab your umbrella!");
        break;
    case "snowy":
        console.log("Stay inside with a hot choc.")
        break;
    default:
        console.log("Watch the forecast!");
}

if (weather == "sunny") {
    console.log("It's a beautiful day!");
}else if (weather == "rainy"){
    console.log("Grab your umbrella!")
}else{
    console.log("let's stay inside");
}
