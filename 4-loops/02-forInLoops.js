let student = {
    name: "Gloria",
    awesome: true,
    specialty: "Javascript",
    week: 1
};

console.log(student.name);
console.log(student['awesome'])

for(x in student){
    console.log(x);
}

console.log(typeof student);

let grades = ["A", "F", "F-", "C++", "B+"];
for (x in grades){
    console.log(x);
}

const user = {firstName: 'John', lastName: 'Doe'};
for (key in user){
    console.log(user[key]);
}