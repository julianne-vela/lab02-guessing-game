// import functions and grab DOM elements
import { compareNumbers } from '/utils.js';

const userGuess = document.getElementById('user-input');
const submitButton = document.getElementById('submit-button');
const resultsStr = document.getElementById('final-results');
const userHintStr = document.getElementById('user-hint');
const remainingGuessesSpan = document.getElementById('remaining-guesses');

// initialize state
let remGuesses = 4;
let correctNumber = Math.ceil(Math.random() * 20);
console.log(correctNumber);
// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    if (remGuesses < 1) {
        submitButton.disabled = true;
    }

    --remGuesses;
    const guessNum = Number(userGuess.value);



    if (compareNumbers(guessNum, correctNumber) === 0) {
        resultsStr.textContent = 'YOU GOT IT! CONGRATS!';
    } else if (compareNumbers(guessNum.value, correctNumber) === -1) {
        userHintStr.textContent = `Whoops, a little too low. Guess again! ${remGuesses} left!`;
    } else if (compareNumbers(guessNum.value, correctNumber) === 1) {
        userHintStr.textContent = `Darn, too high! Guess again! ${remGuesses} left!`;
    }

    // remainingGuessesSpan.textContent = remGuesses;

});
