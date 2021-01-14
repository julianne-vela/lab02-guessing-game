// IMPORT MODULES under test here:
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('The users guess should be less than the random number generated', (expect) => {
    const expected = -1;
    const actual = compareNumbers(15, 18);

    expect.equal(actual, expected);
});

test('The users guess should be greater than the random number generated', (expect) => {
    const expected = 1;
    const actual = compareNumbers(5, 2);

    expect.equal(actual, expected);
});

test('The users guess should be equal the random number generated', (expect) => {
    const expected = 0;
    const actual = compareNumbers(4, 4);
    expect.equal(actual, expected);
});
