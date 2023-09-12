/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//Creates 5 object literals inside of an array.
const quotes = [
  {
    quote: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
    source: 'Barack Obama',
    citation: "Barack Obama’s Feb. 5 Speech",
    year: 2008
  },
  {
    quote: "There is no such thing as a best solution, be it a tool, a language, or an operating system. There can only be systems that are more appropriate in a particular set of circumstances.",
    source: 'Olawale Daniel',
    citation: 'The Pragmatic Programmer: From Journeyman to Master',
    year: 1999
  },
  {
    quote: "Try to make sense of what you see and wonder about what makes the universe exist. Be curious, and however difficult life may seem, there is always something you can do, and succeed at. It matters that you don’t just give up.",
    source: 'Stephen Hawking',
    citation: "Conference in Cambridge held for his 75th birthday",
    year: 2017,
    tag: "#President"
  },
  {
    quote: "Everybody should learn to program a computer because it teaches you how to think.",
    source: "Steve Jobs",
    citation: "Interview with Robert Cringley",
    year: 1995
  },
  {
    quote: "First solve the problem then write the code",
    source: "John Johnson",
    citation: "Kartaca.com",
    year: ""
  },
  {
    quote: "Do the research. Ask questions. Find someone doing what you are interested in! Be curious!",
    source: "Katherine Johnson",
    citation: "",
    year: "",
    tag: "#toTheMoon"
  }
]
/***
 * `getRandomQuote` function
***/

//Generates a random index number from 0-4
function getRandomQuote(quotes) {
  randomNumber = Math.floor(Math.random() * (quotes.length));
  randomObject = quotes[randomNumber];
  return randomObject;
}
console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
***/
//Generates a random color for background
function randomColor(){
  let color = Math.floor(Math.random() * 255);
  return color;
}

function printQuote() {
  //calls the getRandomQuote function to obtain one of the objects
  const randomObject = getRandomQuote(quotes);

  //Builds html string 
  let HTML =
    // <p class ="quote"> ${randomObject["quote"]} </p>
    // <p class="source"> ${randomObject["source"]}
    `<p class ="quote"> ${randomObject.quote} </p>
    <p class="source"> ${randomObject.source}
    `
  //if citation, year, or tag are present, they're added to html string
  if (randomObject.citation !== "") {
    HTML += `<span class = "citation"> ${randomObject.citation} </span>`
  }
  if (randomObject.year) {
    HTML += `<span class = "year"> ${randomObject.year} </span>`
  }
  if (randomObject.tag) {
    HTML += `<span class="tag"> ${randomObject.tag} </span>`
  }
  HTML += `</p>`;

  //Replaces html from index.html
  document.getElementById('quote-box').innerHTML = `${HTML}`;
  //Replaces background color for the body 
  document.querySelector('body').style.backgroundColor = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}
//Makes a new quote display automacticallyevery 12 seconds
setInterval(printQuote, 12000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//When button is clicked the print quote function is called
document.getElementById('load-quote').addEventListener("click", printQuote, false); ``