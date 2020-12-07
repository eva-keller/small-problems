//Write code that removes the items from 'groceryList' one by one, until it is empty. 
//If you log the elements you remove, the expected behavior would look as follows.

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

for (let i = groceryList.length; i >= groceryList.length; i--){
    console.log(groceryList.shift());
}

while (groceryList.length > 0) {
    let checkedItem = groceryList.shift();
  
    console.log(checkedItem);
  }

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

//console.log(groceryList); // []
