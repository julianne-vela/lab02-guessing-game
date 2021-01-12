const guess = document.getElementById('user-input');
const correctNumber = document.getElementById('random-number');

export function compareNumbers(guess, correctNumber) {
    if (guess < correctNumber) {
        return -1;
    } else if (guess > correctNumber) {
        return 1;
    } else (guess === correctNumber);
    return 0;
}


