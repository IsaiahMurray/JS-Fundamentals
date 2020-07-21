/*
  TODO: Display an XKCD comic based on a number that a user chooses
​
  Prompt the user for a number (NUMBER)
  Click a button to FETCH the comic based on this number (click event)
  Take the data from the response (JSON)
  display the comic and title and date (DOM)
*/
​
/*
  Need:
  Input Box for the Number
  Button
  Function:
    grab the number
    craft the api url with the number
    fetch request to the url
    translate the response into json
    display data to the DOM
​
  Guide
​
*/
​
​
let searchterm; //initializing our search input on the form
​
let resultArea = document.getElementById('result'); //assigning a variable to the section where the result will be
​
let displayComic = (data) => { //initianlizing and assigning the comic display to whatever data is taken in
  resultArea.textContent = undefined; //Clears out any previous values
​
  // img, p, p                  //Creating html elements for the image, title, and date of the fetched comic 
  let comicImage = document.createElement('img');
  let title = document.createElement('p');
  let date = document.createElement('p');
​
//Attaches new information the elements we created
  comicImage.src = data.img;
  title.innerText = data.title;
  date.innerText = `${data.day}/${data.month}/${data.year}`;
​
//Appends them to the area we want them displayed
  resultArea.appendChild(comicImage);
  resultArea.appendChild(title);
  resultArea.appendChild(date);
}
​
let getComic = async (comicId) => { //Grab the comic id
  try { //Try to go fetch the url to this spot
    let response = await fetch(`https://cors-anywhere.herokuapp.com/http://xkcd.com/${ comicId }/info.0.json`);
    let data = await response.json(); //Translate the returned data into json
    displayComic(data); //Call the dipsplay function using the data we just acquired
  } catch {
    console.error('Something didn\'t work') //If it didnt work, catch this error
  }
}
​
//This is an event listener we added to track the keys that were typed into the input
document.getElementById('inputField').addEventListener('keyup', (event) => {
  searchterm = event.target.value //setting the search term equal to the event target value
});
​
document.getElementById('searchTerm').addEventListener('submit', (event) => { //When the form is submitted, do this event
  event.preventDefault(); //Prevent the default of the form submit(which is to refresh the page)
  getComic(searchterm);
})