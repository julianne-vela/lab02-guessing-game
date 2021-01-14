# Guess a Number App

### HTML Setup
- Number Input
    - Why? So the user can enter their guessed number
- Button
    - Why? So the user can submit their guess
- Guesses remaining span
    - Why? To display the remaining guesses the user has
- Too high/too low/you got it! span
    - Why? So the user knows what is wrong with their guess, if anything. 

### JavaScript Plan
1) Grab the DOM Elements
    a. userInput
    b. submitButton
    c. results
    d. remainingGuesses 
1) Initialize State
    a. Random number: n
    b. Guesses remaining: 4
1) Add event listener to button (On-click)
    - STATE:  
        a. decrement remaining guesses (--)
        b. store the users guess in a variable (Number(input.value))
        c. compare user guess with the random number selected
    - VIEW:  
        a. If the user guess is greater than the random number, inject 'too high' into the results span
            - Check to see how many guesses are remaining. If none, disable inpudt and display losing message.
        b. If the user guess is less than the random number, inject 'too low' into the results span
            - Check to see how many guesses are remaining. If none, disable inpudt and display losing message.
        c. If the user guess is equal to the random number, display a winning message and disable input. 

1) STRETCH GOAL: Add an event listener onto the reset button
    - On click
        a. STATE: Reset remaining guesses state to 4
        b. STATE: Create a new random number
        c. VIEW: Re-enable the inputs if they are disabled and fix the game text.
