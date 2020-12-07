//Remove 'fossil' from the array, then add 'geothermal' to the end of the array.


let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

console.log(energy.shift('fossil'));
console.log(energy.push('geothermal'));
console.log(energy);