var randomLoc = Math.floor(Math.random() * 5);
var location1, location2, location3;
var hits = 0;
var guesses = 0;
var misses = 0;
var cell0 = false;
var cell1 = false;
var cell2 = false;
var cell3 = false;
var cell4 = false;
var cell5 = false;
var cell6 = false;
setupGame();
function setupGame() {
	console.log("A new game has started!")
	location1 = randomLoc;
	location2 = location1+1;
	location3 = location2+1;
	hits = 0;
	misses = 0;
	clearCells();
	randomLoc = Math.floor(Math.random() *5);
}
function clearCells() {
	for (var i=0; i<=6; i++) {
		var cellId = "cell" + i;
		var cellElement = document.getElementById(cellId);
		cellElement.innerHTML = ""
	}
}
function cellClicked(cellId) {
	console.log(cellId);
	var cell = document.getElementById("cell" + cellId);
	/*
	Change this code so that it checks and displays HIT or MISS
	and updates hits and misses
	IF hits = 3, it should alert "You won!"
	IF misses = 3, it should alert ("Better luck next time!")

	EXTENSION: How do you make it so that you can't click the same cell twice?
	*/
	if (cellID == 0 && cellID == location1 || cellID == location2 || cellID == location3){
		cell.innerHTML = "HIT"
		hits = hits + 1
		var hitSpan = document.getElementById("hits")
		hitSpan.innerHTML = hits
		guesses = guesses + 1
		cell0 = true;
	} else if (cellID == 0 && cellID != location1 || cellID != location2 || cellID != location3){
		cell.innerHTML = "MISS"
		misses = misses + 1;
		var hitSpan = document.getElementById("misses")
		hitSpan.innerHTML = misses
		guesses = guesses + 1;
		cell0 = true;
		//Checking Cell 0
	} else if (cellID == 1 && cellID == location1 || cellID == location2 || cellID == location3){
		cell.innerHTML = "HIT"
		hits = hits + 1
		var hitSpan = document.getElementById("hits")
		hitSpan.innerHTML = hits
		guesses = guesses + 1
		cell1 = true;
	} else if (cellID == 1 && cellID != location1 || cellID != location2 || cellID != location3){
		cell.innerHTML = "MISS"
		misses = misses + 1;
		var hitSpan = document.getElementById("misses")
		hitSpan.innerHTML = misses
		guesses = guesses + 1;
		cell1 = true;
		//Checking cell 1
    } else if (cellID == 2 && cellID == location1 || cellID == location2 || cellID == location3){
		cell.innerHTML = "HIT"
		hits = hits + 1
		var hitSpan = document.getElementById("hits")
		hitSpan.innerHTML = hits
		guesses = guesses + 1
		cell2 = true;
	} else if (cellID == 2 && cellID != location1 || cellID != location2 || cellID != location3){
		cell.innerHTML = "MISS"
		misses = misses + 1;
		var hitSpan = document.getElementById("misses")
		hitSpan.innerHTML = misses
		guesses = guesses + 1;
		cell2 = true;
		//checking cell 2
	} else if (cellID == 3 && cellID == location1 || cellID == location2 || cellID == location3){
		cell.innerHTML = "HIT"
		hits = hits + 1
		var hitSpan = document.getElementById("hits")
		hitSpan.innerHTML = hits
		guesses = guesses + 1
		cell3 = true;
	} else if (cellID == 3 && cellID != location1 || cellID != location2 || cellID != location3){
		cell.innerHTML = "MISS"
		misses = misses + 1;
		var hitSpan = document.getElementById("misses")
		hitSpan.innerHTML = misses
		guesses = guesses + 1;
		cell3 = true;
		//checking cell 3
	} else if (cellID == 4 && cellID == location1 || cellID == location2 || cellID == location3){
		cell.innerHTML = "HIT"
		hits = hits + 1
		var hitSpan = document.getElementById("hits")
		hitSpan.innerHTML = hits
		guesses = guesses + 1
		cell4 = true;
	} else if (cellID == 4 && cellID != location1 || cellID != location2 || cellID != location3){
		cell.innerHTML = "MISS"
		misses = misses + 1;
		var hitSpan = document.getElementById("misses")
		hitSpan.innerHTML = misses
		guesses = guesses + 1;
		cell4 = true;
		//checking cell 4
	} else if (cellID == 5 && cellID == location1 || cellID == location2 || cellID == location3){
		cell.innerHTML = "HIT"
		hits = hits + 1
		var hitSpan = document.getElementById("hits")
		hitSpan.innerHTML = hits
		guesses = guesses + 1
		cell5 = true;
	} else if (cellID == 5 && cellID != location1 || cellID != location2 || cellID != location3){
		cell.innerHTML = "MISS"
		misses = misses + 1;
		var hitSpan = document.getElementById("misses")
		hitSpan.innerHTML = misses
		guesses = guesses + 1;
		cell5 = true;
		//checking cell 5
	} else if (cellID == 6 && cellID == location1 || cellID == location2 || cellID == location3){
		cell.innerHTML = "HIT"
		hits = hits + 1
		var hitSpan = document.getElementById("hits")
		hitSpan.innerHTML = hits
		guesses = guesses + 1
		cell6 = true;
	} else if (cellID == 6 && cellID != location1 || cellID != location2 || cellID != location3){
		cell.innerHTML = "MISS"
		misses = misses + 1;
		var hitSpan = document.getElementById("misses")
		hitSpan.innerHTML = misses
		guesses = guesses + 1;
		cell6 = true;
		//checking cell 6
	} else if (cell0 == true || cell1 == true || cell2 == true || cell3 == true || cell4 == true || cell5 == true || cell6 == true){
		alert("You've already picked that square, pick another")
	} 
}
