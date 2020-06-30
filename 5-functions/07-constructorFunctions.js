let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true
}

let person2 = {
    name: 'Nicolas',
    age: 56,
    canVote: true
}

let person3 = {
    name: 'Argyle',
    age: 15,
    canVote: false
}

/*function creatPerson(name, age, canVote){ // creating a function with three parameters in the constructor
    let person = {
        name: name,
        age: age,
        canVote: canVote
    }

    return person;
}*/

function Person(name, age, canVote){
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}

let macyJones = new Person('Macy', 24, true);
abc = Person('abc', 22, false);
