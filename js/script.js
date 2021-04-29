const guessedLetters = document.querySelector(".guessed-letters"); //access the <ul> where input letters will appear
const guessButton = document.querySelector(".guess"); //access the <button> with a class of "guess"
const letterInput = document.querySelector(".letter"); //access the letter input by the user
const wordInProgress = document.querySelector(".word-in-progress"); //access the <p> where letters will appear
const remainingGuesses = document.querySelector(".remaining"); //access the <p> where remaining guesses will display
const message = document.querySelector(".message"); //access the empty <p> where program let's user know if they guessed a letter
const playAgainButton = document.querySelector(".play-again"); //acess the play again button that appears at the end

const word = "magnolia"; //guess word until we fetch from an api

//function that displays circles as placeholders for letters in the guess word
const displayCircles = function (word) {
  const circleArray = [];
  for (const letter of word) { //for each letter in the word, push the circle string into the array 
    console.log(letter);
    circleArray.push("●"); 
    wordInProgress.innerText = circleArray.join(""); //joins circle strings 
  }
};

guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    const userGuess = letterInput.value;
    console.log(userGuess);
    userGuess = "";
});

displayCircles(word);