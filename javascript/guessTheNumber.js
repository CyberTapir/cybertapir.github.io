function playGame() {
    var guesses = 0;
    var playerInput;
    //At this point for testing, the answer will stay 5
    var answer = 5;
    guesses = 0;
    playerInput = prompt("Enter a number between 1 and 10")
    if (playerInput > answer) {
        alert("Your guess was too high");
        guesses = guesses + 1;
    } else if (playerInput < answer) {
        alert("Your guess was too low");
        guesses = guesses + 1;
    } else if (playerInput = answer) {
        guesses = guesses + 1;
        alert("You guessed the number in " + guesses + " guesses.";
    } else if (playerInput = null) {
        return;
    } else {
        alert("Please enter a number");
    }
}
