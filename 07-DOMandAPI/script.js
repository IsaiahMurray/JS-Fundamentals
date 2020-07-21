let unorderedList = document.querySelector('ul');
let submitButton = document.getElementById('submit');
let rocketForm = document.querySelector('form');

const baseURL = 'https://api.spacexdata.com/v2/rockets'

let fetchRockets = (event) => {
    event.preventDefault();

    fetch(baseURL)
    .then(response => response.json()) //Taking the response and turning ir into a json object
    .then(json => {
        console.log(json);
        json.forEach( rocket => {

            //NEED: name, cost, mass, image
            //Table row for each rocket
            //td name, cost, mass, image
            //drop the row into the body

            let row = document.createElement('tr');
            let name = document.createElement('td');
            let cost = document.createElement('td');
            let mass = document.createElement('td');
            let imageData = document.createElement('td');
            let img = document.createElement('img');

            name.innerText = rocket.name;
            cost.innerText = rocket.cost_per_launch;
            mass.innerText = rocket.mass.kg;
            img.src = rocket.flickr_images[0];

            imageData.appendChild(img);

            row.appendChild(name);
            row.appendChild(cost);
            row.appendChild(mass);
            row.appendChild(imageData);

            document.querySelector('tbody').appendChild(row);
        })
        .catch(error => console.log(error));
    })


}

rocketForm.addEventListener('submit', fetchRockets);












// let myData = [
//     { title: "Downtown Is Loud", author: "Adam"},
//     { title: "My Room Is Hot", author: "Nathaniel"},
//     { title: "My Neighbors Are Noisy", author: "Alec"},
//     { title: "I Wish I Could Type As Fast As Adam", author: "Sierra"},
//     { title: "Python is better", author: "Yaboi and Swft"}
// ];


// //Loops over the different statements(objects) inside of my data (array)
// for (let thing of myData) {

//     //Create the li that is going to hold the statement(title, author)
//     let mySuperCoolListItem = document.createElement('li');

//     //Creating the elements that will display the title and author
//     let myTitle = document.createElement('h3');        //TITLE
//     let myAuthor = "- " + document.createElement('p'); //AUTHOR

//     //Set the values in the element to display as text (title, author)
//     myTitle.innerText = thing.title;        //Sets the TITLE
//     myTitle.innerText = thing.author;       //Sets the AUTHOR

//     //Add the title and author elements to the li
//     mySuperCoolListItem.appendChild(myTitle);
//     mySuperCoolListItem.appendChild(myAuthor);

//     unorderedList.appendChild(mySuperCoolListItem);
// }