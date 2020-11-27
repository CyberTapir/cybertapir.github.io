// Your guess the number game goes here
function playGameNow() {
	//variable declaration
	var guesses = 0;
	var playerInput;
	var answer = Math.floor(Math.random() * 10 + 1);
	console.log(answer);
	var hasWon = false; //saying the player hasn't won the game
	guesses = 0;
	while (hasWon === false) {
		playerInput = prompt("Enter a number between 1 and 10");
		if (playerInput == answer) {
			guesses = guesses + 1;
			alert("You guessed the number in " + guesses + " guesses.");
			hasWon = true; //breaks loop bc player has won
		} else if (playerInput < answer) {
			alert("Your guess was too low");
			guesses = guesses + 1;
		} else if (playerInput > answer) {
			alert("Your guess was too high");
			guesses = guesses + 1;
		} else if (playerInput < 1 || playerInput > 10) {
			alert("Please enter a number in the range");
				//if the player doesn't enter anything, or letters/characters or a number bigger than 10
		}
	}
}