
// Jokes Part

const bttn = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apikey = "6v7kwsqAnSWFTdEUhl2JLg==8HCpWTaZDzWn7Jom";
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
  method: "GET", 
  headers: { 
  "X-Api-Key": apikey,
  },
};

async function getJoke() {
  try {
    jokeEl.innerText = "ha ha ha ha ha.."
    bttn.disabled = true;
    bttn.innerText = "Loading..";
    const response = await fetch(apiUrl, options)
    const data = await response.json();
    bttn.disabled = false;
    bttn.innerText = "Tell me a Joke";
    jokeEl.innerText = data[0].joke
  } catch (error) {
    jokeEl.innerText = "hahahaha Error Occured, Try Again";
    bttn.disabled = false;
    bttn.innerText = "Tell me a Joke";
  }
}

bttn.addEventListener("click", getJoke);


// feedback Part
const feedbtn = document.getElementById('submit');
const feedtext = document.getElementById('feed');
const feedEl = document.querySelectorAll('.rating');

let selectedRating = "";

feedEl.forEach((e) => {
  e.addEventListener("click", (event) => {
    selectedRating = `Feedback: ${event.target.innerText || event.target.parentNode.innerText} - Thank You For Your Feedback`;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active")
  })
})

feedbtn.addEventListener("click", ()=> {
  feedtext.innerText = selectedRating;
})












