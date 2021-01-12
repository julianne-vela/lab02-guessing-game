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

// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    --remGuesses;
    const guessNum = Number(userGuess.value);
    if (compareNumbers(guessNum.value, correctNumber) === 0) {
        resultsStr.textContent = 'YOU GOT IT! CONGRATS!';
    } else if (compareNumbers(guessNum.value, correctNumber) === -1) {
        resultsStr.textContent = 'Whoops, a little too low. Guess again!';
    } else if (compareNumbers(guessNum.value, correctNumber) === 1) {
        resultsStr.textContent = 'Darn, too high! Guess again!';
    }

    remainingGuessesSpan.textContent = remGuesses;

});
