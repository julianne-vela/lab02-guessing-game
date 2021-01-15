import { compareNumbers } from './utils.js';

const userGuess = document.getElementById('user-input');
const submitButton = document.getElementById('submit-button');
const resultsStr = document.getElementById('final-results');
const userHintStr = document.getElementById('user-hint');

let remGuesses = 4;
let correctNumber = Math.ceil(Math.random() * 20);

function changeHintResults(guessNum) {
    if (compareNumbers(guessNum, correctNumber) === 1) {
        userHintStr.textContent = `Darn, too high! Guess again! ${remGuesses} left!`;
    } else if (compareNumbers(guessNum, correctNumber) === -1) {
        userHintStr.textContent = `Whoops, a little too low. Guess again! ${remGuesses} left!`;
    } else if (compareNumbers(guessNum, correctNumber) === 0) {
        resultsStr.textContent = 'YOU GOT IT! CONGRATS!';
    }
}

function disableGamePlay(guessNum) {
    if (remGuesses < 1 || (compareNumbers(guessNum, correctNumber) === 0)) {
        submitButton.disabled = true;
    }
}
submitButton.addEventListener('click', () => {
    --remGuesses;
    const guessNum = Number(userGuess.value);

    changeHintResults(guessNum);
    disableGamePlay(guessNum);
});
