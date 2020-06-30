let myName = "Carson";

function someProcess(){
    const myName = "X-AE-12";
    console.log(myName);
}

console.log(myName);

let y = 12;

function scopey(){
    y = 33;
    console.log(y);
}

console.log(y);
scopey();
console.log(y);

/* The outcome is
12
33
33

because y is defined as 33, then assigned as 33 in the scopey function, then never redfined as 12.
It is important to take into consideration where and when you define variables */

var slope = 12; //Declaring and initializing the variable "slope" to be 12

function varTest(){ //Creating a new function
    var slope = 56; //Redefining the variable "slope" as 56
    if(true){
        var slope = 9001;
        console.log(slope); //If true, redefine the variable "slope" as 9001 then log it
    }
    console.log(slope); //Log the results of the function
}

varTest();
console.log(slope); //Since the scope of the function is limited, this log will be 12