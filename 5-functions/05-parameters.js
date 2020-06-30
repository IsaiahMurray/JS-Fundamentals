//Expressional function -> when you put the function within the scope of a new variable
let greeting = function (name){
    console.log('Hello, ${ name }!');
}

greeting('Becky');


let printMyName = function(fName, lName){
    let fullName = fName + " " + lName;
    console.log(`Hello, my name is ${ fullName }.`);
}

printMyName('Isaiah', 'Murray');