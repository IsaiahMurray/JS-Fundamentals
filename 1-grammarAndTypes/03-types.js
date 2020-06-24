// Booleans can only be true or false
let isOn = true;

let isRaining = false;

// NULL
let empty = null;

// Undefined is like a placeholder for something you will display but are waiting for data to define the variable

let undef = undefined;
console.log(undef);

let whatAmI;
console.log(whatAmI);

// Numbers
let degrees = 90;
console.log(degrees);

let ratherLarge = 999999999999999; // this is fifteen 9's
console.log(ratherLarge);

let whatIsGoingOnHere = 9999999999999999; // this is sixteen 9's
console.log(whatIsGoingOnHere);

let notQuite = 0.2 = 0.1; //weewoo

let numbersAreHard = (0.2 * 10 + 0.1 + 10) / 10;
console.log(numbersAreHard);

let created = Number('123'); // This will turn the string '123' into the actual number
console.log(created);

let abc = Number('z');
console.log(abc); //Returns NaN, meaning Not a Number. Won't break your code, but it won't register as a number

// Strings
let stringOne = "doubleydoos"; // Can use both single and double quotes for strings.
let stringTwo = 'singleydoos'; // Just be consistent

let first = 1050 + 100;
let second = '1050' + 100;
let third = 1050 + '100';
let last = '1050' = '100';
console.log(first, second, third, last);

let firstName = 'Isaiah';
let lastName = 'Murray';
console.log(firstName + " " + lastName);

// Escape characters
let messageOne = 'don\'t do this';
let messageTwo = '\\don\'t do this\\';
console.log(myMessage);
console.log(messageTwo);

let messageThree = 'don\'t\n do this\\';
console.log(messageThree);

// Objects

let frodo = {
    race: 'Hobbit',
    rings: 1,
    cloak: true,
    primaryWeapon: {
        name: 'String',
        attack: 30,
        damage: false
    }
};

console.log(typeof frodo);

// Array
let groceriesList = ['banana', 'kiwi', 'coconut', 21];

let aThing = [23, {isOn: tru, electricty: 'AC'}, ['wallaby']];
console.log(aThing instanceof Array);

// STRINGS: Methods

let userTitle = "a DaY iN tHe LiFe Of dEv";
console.log(userTitle.toUpperCase());
console.log(userTitle.trim());
console.log(userTitle.includes('in'));