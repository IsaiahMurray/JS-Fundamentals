console.log('LOADED FILE!');

let myPTag = document.getElementById('testParagraph');

myPTag.style.color = 'blue';

console.log(document.querySelectorAll('p.sampleClass'));

document.querySelectorAll('p.sampleClass')[0].innerText = 'Hey I changed';

let toChange = document.querySelectorAll('p.sampleClass');

toChange.forEach(tag =>{
    tag.innerHTML = '<h1>Hendrix</h1>';
})

document.getElementById('clickThisButton').addEventListener('click', event => { //target the class 'clickThisButton', then add an event on 'click
    if(event.target.style.backgroundColor == 'red') { //if the background color is equal to red
        event.target.style.backgroundColor = 'blue'  //set it to blue
    }   else {
        event.target.style.backgroundColor = 'red'; //set it to red
    }
})

myButton.addEventListener('mouseover', event => {
    event.target.style.fontSize = '30px'
})

let userInput;

document.getElementById('nameInput').addEventListener('keyup', event => {
    userInput = event.target.value;
    document.getElementById('theValue').innerText = userInput
});


let button = document.getElementById('buttonBoi');
let pb = document.getElementById('paraBoi')

button.addEventListener('click', event => {
    pb.innerText = 'HEY THE BUTTON WAS CLICKED!!';
})

pb.addEventListener('click', event => {
    pb.innerText = 'HEY, no pushing!'
})
