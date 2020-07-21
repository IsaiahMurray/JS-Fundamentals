//Only works for collections that have an iterable key

let grades = ["A", "F", "F-", "C++", "B+"];
for(x of 'grades'){
    console.log(x);
}

// for-of-loops return to you the VALUE, and can only run on ITERABLES(ordered collecitons)

const names = ['john', 'bob', 'mary', 'joe'];

for (name of names){
    console.log(name);
}
