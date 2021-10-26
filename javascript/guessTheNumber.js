button.onclick = playGame();
function playGame() {
    var guesses = 0;
    var playerInput;
    var answer = 5;
    var hasWon = false;
    
    guesses = 0;
    while (hasWon == false) {
    playerInput = prompt("Enter a number between 1 and 10");
        if (playerInput > answer) {
            alert("Your guess was too high");
            guesses = guesses + 1;
        } else if (playerInput < answer) {
            alert("Your guess was too low");
            guesses = guesses + 1;
        } else if (playerInput == answer) {
            guesses = guesses + 1;
            alert("You guessed the number in " + guesses + " guesses.");
            hasWon = true;
        } else {
            alert("Please enter a number");
        }
    }
}
