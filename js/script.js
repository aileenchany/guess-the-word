const guessedLettersElement = document.querySelector(".guessed-letters"); //access the <ul> where input letters will appear
const guessButton = document.querySelector(".guess"); //access the <button> with a class of "guess"
const letterInput = document.querySelector(".letter"); //access the letter input by the user
const wordInProgress = document.querySelector(".word-in-progress"); //access the <p> where letters will appear
const remainingGuessesElement = document.querySelector(".remaining"); //access the <p> where remaining guesses will display
const remainingGuessesSpan = document.querySelector(".remaining span"); //acess the span element inside <p> with class "remaining"
const message = document.querySelector(".message"); //access the empty <p> where program let's user know if they guessed a letter
const playAgainButton = document.querySelector(".play-again"); //acess the play again button that appears at the end

const word = "magnolia"; //guess word until we fetch from an api
const guessedLetters = []; //empty array where we store the user's guesses

//function that displays circle symbols as placeholders for letters in the guess word
const displayCircles = function (word) {
  const circleArray = [];
  for (const letter of word) { //for each letter in the word, push the circle string into the array 
    console.log(letter);
    circleArray.push("●"); 
  }
  wordInProgress.innerText = circleArray.join(""); //joins circle strings 
};

displayCircles(word);

guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    
    message.innerText = ""; //we empty the element which contains the message

    const userGuess = letterInput.value;
    const checkIfGoodGuess = checkInput(userGuess);

    if (checkIfGoodGuess) { //if condition is true, we call the function makeGuess
        makeGuess(userGuess);
    };
    letterInput.value =""; //then we clear the input value
});

//Function to Check Player's Input
const checkInput = function(input) {
    const acceptedLetter = /[a-zA-Z]/; //regular expression that accepts only letters
    if(input.length === 0 || input.length > 1 || !input.match(acceptedLetter)) { //conditional statements that make sure the user's input is a letter
        message.innerText = "Please enter a single letter."
    } else  {
        return input;
    }  
};

//Function to Capture Input
const makeGuess = function(guess) {
    guess = guess.toUpperCase(); 
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed this letter. Try again."
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
    }
};

//Function to Show the Guessed Letters
const showGuessedLetters = function() {
    guessedLettersElement.innerHTML = "";
    
    for(const letter in guessedLetters ) {
        const li = document.createElement("li");
        li.innerText = letter; //SO FAR UNABLE TO GET VALUE AND DISPLAY TO USER
        guessedLettersElement.append(li);
    }
};

//Function to Update the Word in Progress
//This function will replace the circle symbols with the correct letters guessed.
const updateWordInProgress = function(guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    console.log(wordArray);
    const newArray = [];
    for (const letter of wordArray) {
        if(guessedLetters.includes(letter)) {
            newArray.push(letter.toUpperCase());
        } else {
            newArray.push("●");
        }
    }
    console.log(newArray);
    wordInProgress.innerText = newArray.join("");
    checkIfPlayerWon();
};

//Function to Check If the Player Won
const checkIfPlayerWon = function() {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
    }
};