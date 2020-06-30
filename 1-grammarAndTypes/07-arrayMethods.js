let coffee = ['esspresso', 'nitro cold brew', 'americano', 'cappucino', 'frappuccino'];
console.log(coffee); //Will return the entire array

console.log(coffee.slice(1, 4, String)); //Will return a portion of the array bewtween specifically set values.
//it will return the value of the first number, and the value before the last number specified

coffee.push('latte', 'decaf'); //Puts a new element at the 'end' of the current array

console.log(coffee.shift()); //Will remove and return the first element of the array

coffee.unshift('instant'); //Puts a new element at the start of an array

coffee.forEach((item) => { //For each element in the array 'coffee'
    console.log(item.length); //log the length(the number of characters) that the element contains
});