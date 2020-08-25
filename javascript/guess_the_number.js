function playGame() {
    //Variable Decleration
    var gamewon = false; //to exit the while loop
    var playerAnswer; //what the player inputs
    var guesses = 0; //how many guesses the player has taken
    var max = prompt("What is your max number?"); //max number player picks
    var answer = Math.floor(Math.random) * max; 
    //getting random number in the range between 0 and max-1
    answer = answer + 1; //so we don't have 0 as a possible answer
     //and so it goes to top of range specified by user
    while (gamewon = false) {
        //prompt
        playerAnswer = prompt("Enter a number between 1 and " + max + ":");
        //if not in the number range
        if (playerAnswer > max || playerAnswer < 1) {
            alert("Please enter a number between 1 and " + max + ":");
            guesses = guesses + 1;
        //if player guessed too high
        } else if (playerAnswer > answer) {
            alert("Too high");
            guesses = guesses + 1;
        //if player guessed too low
        } else if (playerAnswer < answer) {
            alert("Too low");
            guesses = guesses + 1;
        //if player guesses the number, and then exits code.
        } else if (playerAnswer == answer) {
            guesses = guesses + 1
            alert("You guessed the number in " + guesses + " guesses!")
            gamewon = true;
        /*
            If player enters a letter or special character
            or presses the cancel button
            exit code with return function
        */
        } else {
            return null;
        }
    }
}