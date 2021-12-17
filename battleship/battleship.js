/* Declaring JavaScript global variables is outside the function so it can be accessed from any function*/
var location1, location2, location3;
var hits = 0;
var misses = 0;
setupGame()

//function to perform a particular task (in this case, to set up a game)
function setupGame() {
	console.log("A new game has started!") //output this message to the web console

	// location1 is a random location (between 0 and 4)
	// and then updates location2 and location3
	location1 = Math.floor(Math.random() * 5);
	location2 = location1 + 1;
	location3 = location1 + 2;

//restarts game and wipes hits and misses
	hits = 0;
	misses = 0;
	var hitSpan = document.getElementById("hits") //Get the element with the specified ID
	hitSpan.innerHTML = hits //modify the content of an HTML element
	var missesSpan = document.getElementById("misses")
	missesSpan.innerHTML = misses 
	clearCells(); //run the clearCells function 
}
//function to clear cells
function clearCells() {
	for (var i=0; i<=6; i++) {
		var cellId = "cell" + i;
		var cellElement = document.getElementById(cellId);
		cellElement.innerHTML = ""
	}
}

//function to allow cells to be clicked and display location
function cellClicked(cellId) {
	console.log("cellId:" + cellId);
	console.log("location1:" + location1);
	console.log("location2:" + location2);
	console.log("location3:" + location3);

	var cell = document.getElementById("cell" + cellId);

	/*
	Change this code so that it checks and displays HIT or MISS
	and updates hits and misses
	IF hits = 3, it should alert "You won!"
	IF misses = 3, it should alert ("Better luck next time!")

	EXTENSION: How do you make it so that you can't click the same cell twice?
	*/
	if (cellId == location1 || cellId == location2 || cellId == location3) {
		cell.innerHTML = "HIT"
		hits = hits + 1
		if (hits >= 3) {
			alert("You sunk my battleship!")
		}
		var hitSpan = document.getElementById("hits")
		hitSpan.innerHTML = hits
	} else {
		cell.innerHTML = "MISS"
		misses = misses + 1
		if (misses >= 3) {
			alert("You should practice more!")
		}
		var missesSpan = document.getElementById("misses")
		missesSpan.innerHTML = misses 
	}
}

