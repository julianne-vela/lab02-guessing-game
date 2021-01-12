// IMPORT MODULES under test here:
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('The users guess should be less than the random number generated', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(15, 18);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('The users guess should be greater than the random number generated', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(5, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('The users guess should be equal the random number generated', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(4, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
