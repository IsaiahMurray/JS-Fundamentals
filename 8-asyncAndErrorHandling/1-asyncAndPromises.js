//fetch('https://www.coolserver.com')
//.then(response => console.log(response))
//.catch(err => console.error(err));


(abc) => 'yeet';

// The PROMISE constuctor function takes 1 argument: a callback functioins that takes 2 parameters
// Callback function: The first parameter wil contain a function to run when the promise is resolved (cb from the .then(cb))
// Callback function: The second parameter contains the function to run when the promise is rejected(cb from the .catch(cb))
// A PROMISE IS ASYNC BY NATURE
let superCoolPromise = new Promise((resolve, reject) => {
    resolve(42);
    reject('Array indicies atart at 1');
});

superCoolPromise.then(something => console.log(something)).catch(err => console.error(err));


let fetchie = (url) => {
    return new Promise((resolve, reject) => {
        if ( url === 'https://supercoolwebsite.io') {
            resolve(['abc', 123]);
        } else {
            let myError = new Error('Ope!');
            reject(myError);
        }
    })
}

fetchie('https://supercoolwebsite.io').then(response => console.log(response)).catch(err => console.error(err));

console.log('Did this break?');

async function letsTalkAboutASYNC () {
    try{                                                    

    let response = await fetchie('https://supercoolwebsite.io'); 
    console.log(response);

    throw new Error('Yoted out of there');

    } catch(e){
        console.log(e);
    }
}

letsTalkAboutASYNC();
console.log('Yeet')