// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.canVote = age >= 18;
//     this.greeting = () => `Hello, my name is ${ this.name }`;
// }

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//         this.canVote = age >= 18;
//     }

//     greeting() {
//         return `Hello, my name is ${this.name}`
//     }
// }

//let testing = (abc, bak) => 23 * abc / bak;

//let myresult = `The answer is: ${ testing(12, 55) }`;
//console.log(myresult);


//A store for cupcake shop

class Shop{
    constructor(location){
        this.location = location;
        this.inventory = [];
        this.owner = 'Eddie Snow';
        this.cash = 0;
    }

    bakeCupcakes(cupcakes){
        //cupcakes is going to be an array of cupcake instances
        for(let cupcake of cupcakes){
            this.inventory.push(cupcake);
        }
    }

    sellCupcakes(){
        //sell a cupcake from the inventory
        this.inventory.pop();
        this.cash += 5;
    }

    chechCurrentCash(){
        return `$${this.cash}`;
    }
}

class Cupcake{
    constructor (cakeType, frostingType){
        this.cakeType = cakeType;
        this.frostingType = frostingType;
    }
}


let myShop = new Shop('123 Washington St.');

let firstBatch = [
    new Cupcake('Blueberry',  'Light Sugar'),
    new Cupcake('Blueberry',  'Light Sugar')
]

myShop.bakeCupcakes(firstBatch);
myShop.sellCupcakes();

let chechCurrentCash = myShop.chechCurrentCash();

console.log(chechCurrentCash)