function runGame() {


    let guessString = '';
    let guessNumber = 0;
    let correct = false;

    const randomNumber = Math.random() * 100;
    const randomInteger = Math.floor(randomNumber);
    const target = randomInteger + 1;


    do {
        guessString = prompt('I am thinking of a number in the range 1 to 100.\n\nWhat is the number?');
        guessNumber = +guessString;
        correct = checkGuess(guessNumber, target);
    } while (notCorrect);

}

function checkGuess(guessNumber, target) {
    
}