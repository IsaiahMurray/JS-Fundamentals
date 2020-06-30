function hi(){
    console.log('Ayo');
}

hi();
hi;
console.log(hi);
console.log(hi());

function numList(){ 
    for(let i = 1; i <= 10; i++){ //Set i equal to one. While i is less than or equal to 10, iterate up by one.
        console.log(i); //Log the value of i
    }
}

numList();

//IIFE -> Immediately invokec function expression
// used for when you want a function to fire one time when an action takes place
(function () {console.log('why is this working?')})