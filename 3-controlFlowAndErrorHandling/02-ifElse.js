let temperature = 75;

if (temperature < 65){
    console.log('Wear a jacket');
}
else{
    console.log('No jacket necessary!');
};

let name = 'Isaiah';

if(name === 'Isaiah'){
    console.log('Hello ' + name + '.');
}
else{
    console.log('Is your name ' + name + '?')
};

// Older than 25, say "Yay! you can rent a car!"
// Older than 21, but not 25, say "Hey, you can purchase alcohol!"
// Older than 18 but not 21, say "Hey! You can vote!"
// Younger tham 18, say "You can do stuff one day.."

if(age >= 25){
    console.log('Yay! you can rent a car!');
} else if(age >= 21){
    console.log('Hey, you can purchase alcohol!');
}else if(age >= 18){
    console.log('Hey! You can vote!');
}else{
    console.log('Sorr \'bout it!');
}