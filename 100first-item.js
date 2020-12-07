//Write a function that returns the first element of an input array. For example:
//What would you return if the input array was empty

function first(arr) {
    return arr[0];
}

//Write a function that returns the last element of an input array. 

function last(arr) {
    return arr[arr.length - 1];
}

console.log(last(['Earth', 'Moon', 'Mars']));

console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'
console.log(first([]));
