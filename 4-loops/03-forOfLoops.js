//Only works for collections that have an iterable key

let grades = ["A", "F", "F-", "C++", "B+"];
for(x of 'grades'){
    console.log(x);
}

// for-of-loops return to you the VALUW, and can only run on ITERABLES(ordered collecitons)