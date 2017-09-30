var wins = document.getElementById("wins")
var losses = document.getElementById("losses")
var numGuesses = document.getElementById("num-guesses")
var currentGuesses = document.getElementById("current-guesses")

var limitGuesses = 9;
var numWins = 0
var numLosses = 0

function getRandomLetter() {
	var letters = "abcdefghijklmnopqrstuvwxyz";

	var lettersArray = letters.split("");
	var randomNumber = Math.floor(Math.random()*26);

	var randomLetter = lettersArray[randomNumber]
	return randomLetter;

	// return letters.split("")[Math.floor(Math.random()*26)]
}

var currentRandomLetter = getRandomLetter();

wins.innerHTML = numWins;
losses.innerHTML = numLosses;
numGuesses.innerHTML = limitGuesses;
console.log(currentRandomLetter)

document.addEventListener("keydown", function(event) {
		var userLetter = event.key;

		if (currentRandomLetter === userLetter) {
			numWins++;
			wins.innerHTML = numWins;
			reset(); // Resetting the currentGuesses and numGuesses after winning.
		} else {
			limitGuesses--; // once wrong, limitGuesses goes down
			if (limitGuesses <= 0) {
				numLosses++; // if you're out of limits, you lose and losses go up by 1
				losses.innerHTML = numLosses; // now, you show it on the page.
				reset(); // Resetting the currentGuesses and numGuesses after winning.
			}
			numGuesses.innerHTML = limitGuesses // we show the limitGuesses going down on the page
			currentGuesses.innerHTML += userLetter + ", "; // we show user input
		}
})

function reset() {
	currentRandomLetter = getRandomLetter(); // we get a new random letter
 	limitGuesses = 9; // we reset the variable of numGuesses to 9
	numGuesses.innerHTML = limitGuesses; // we show the limitGuesses on the page
	currentGuesses.innerHTML = ""; // we reset the currentGuesses and show it on the page
}
