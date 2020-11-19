let frog;
let cars = [];
let logs = [];
let grid = 50;
let lives = 10;
let points = 100;
let name;
document.getElementById("lives").innerHTML = "5";
name = prompt("Enter your name to begin");

function resetGame(){
    //Spawns a new frog
    frog = new Frog(width / 2 - grid / 2, height - grid, grid);
    document.getElementById("lives").innerHTML = "Lives left = " + lives / 2;
    frog.attach(null);
    // For death detection
    lives = lives - 1;
    points = points - 100;
    console.log("Resetting the board, and -1 lives")
    //endGame redirect function
    if (lives == 0) {
        endGame()
        console.log("All lives lost, redirecting now")
    }
}

function setup(){
    //Creating the canvas for play
    createCanvas(500,500);
    resetGame();
    document.getElementById("name").innerHTML = "Name = " + name;
    let index = 0;
    console.log("Row 1 Setup")
    // ROW 1
    for (let i = 0; i < 2; i++) {
        let x = i * 300;
        cars[index] = new Car(x, height - grid * 2, grid * 2, grid, 2);
        index ++;
    }
    console.log("Row 2 Setup")
    // ROW 2
    for (i = 0; i < 2; i++) {
        let x = i * 200 + 150;
        cars[index] = new Car(x, height - grid * 3, grid, grid, -3.5);
        index ++;
    }
    console.log("Row 3 Setup")
    // ROW 3
    for (i = 0; i < 4; i++) {
        let x = i * 150 + 25;
        cars[index] = new Car(x, height - grid * 4, grid, grid, 1.2);
        index ++;
    }
    console.log("Row 5 Setup")
    // ROW 5
    index = 0;
    for (i = 0; i < 2; i++) {
        let x = i * 250 + 100;
        logs[index] = new Log(x, height - grid * 6, grid * 3, grid, 2.3);
        index ++;
    }
    console.log("Row 6 setup")
    // ROW 6
    for (i = 0; i < 3; i++) {
        let x = i * 200 + 30;
        logs[index] = new Log(x, height - grid * 7, grid * 2, grid, -1.3);
        index ++;
    }

    // ROW 7
    for (i = 0; i < 2; i++) {
        let x = i * 400 + 10;
        logs[index] = new Log(x, height - grid * 8, grid * 4, grid, 0.5);
        index ++;
    }
}

function endGame(won){
    if (won == 1){
        alert("You Win! Your final score was " + points + " points.");
    } else {
        alert("Game Over! Your final score was 0 points.")
    }
    location.reload();
}

function draw(){
    background(0);
    // Safety lines
    fill(255, 100);
    rect(0, 0, width,grid*2);
    rect(0, height-grid,width,grid);
    rect(0, height-grid*5,width,grid);

    //Detecting collisions with cars
    for(let i = 0; i < cars.length; i++){
        cars[i].update();
        cars[i].show();
        //if death
        if(frog.intersects(cars[i])){
            lives = lives - 1;
            if (lives == 0){
                endGame();
            }
            resetGame();
        } else {
            points = points + 10;
        }
    }
    //Spawn Logs
    for(i = 0; i < logs.length; i++){
        logs[i].update();
        logs[i].show();
    }
    
    //Death detection for logs
    if (frog.y < height - grid * 5 && frog.y > grid*2) {
        let ok = false;
        
        for(i = 0; i<logs.length; i++){
            if (frog.intersects(logs[i])) {
                ok = true;
                frog.attach(logs[i]);
            }
        }
        //EndGame redirect function
        if(!ok){
            lives = lives - 1;
            if (lives == 0) {
                endGame();
            }
        resetGame();
        }
    } else {
        frog.attach(null);
    }
    
    frog.update();
    frog.show();
    
}

//What happens when the keys are pressed
// Moves the frog, logs the location to the console, and updates points
function keyPressed() {
    if(keyCode === UP_ARROW){
        frog.move(0, -1);
        console.log(frog.x +" - "+ frog.y);
        console.log(points)
        if (frog.y == 0) {
            frog.update();
            frog.show();
            points = points + 500;
            endGame(1);
        } 
        if (frog.y == 250) {
            frog.update();
            frog.show();
            points = points + 250;
        }
    } else if(keyCode === DOWN_ARROW){
        frog.move(0, 1);
        console.log(frog.x +" "+ frog.y);
    } else if(keyCode === RIGHT_ARROW){
        frog.move(1, 0);
        console.log(frog.x +" "+ frog.y);
    } else if(keyCode === LEFT_ARROW){
        frog.move(-1, 0);
        console.log(frog.x +" "+ frog.y);
    }
}
