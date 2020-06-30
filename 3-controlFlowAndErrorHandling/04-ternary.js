let num = 6;

// Ternary

(num > 0) 
? console.log('yes') 
: console.log('nah');

// Exactly the same but in if else

if (num >0){
    console.log('yes');
} else{
    console.log('nah');
}

//======
if(num > 0 && num < 5){
    console.log('yes');
} else if (num > 5){
    console.log('Im greater than 5');
} else{
    console.log('nah');
}

//====
(num > 0 && num < 5)
? console.log('yes')
:(num > 5)
    ? console.log('Im greater than 5')
    : console.log('nah');

// 