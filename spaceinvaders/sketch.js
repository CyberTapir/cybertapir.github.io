var ship;
var bullets = [];
var bombs = [];
var aliens = [];
var invaders = [];
var invaders2 = [];
var playerScore = 0;
var ammoUsed = 0;
var gameOn = "over";

// Preloads assets
function preload() {
    invader = loadImage('assets/invader.png');
    invader2 = loadImage('assets/invader2.png');
    ammo = loadImage('assets/bullet.png');
    ord = loadImage('assets/bomb.png');
    batShip = loadImage('assets/spaceship.png');
}

function resetSketch() {
    gameOn = "over"; // Game not started
    ship = new Ship(batShip);
    for (var i = 0; i < 7; i++) {
        invaders[i] = new Invader(invader, i*80+80, 60);
    }
    for (var i = 0; i < 7; i++) {
        invaders2[i] = new Invader(invader2, i*80+40, 30);
    }
    //bullet = new Bullet(ammo);
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    resetSketch();
    var button = createButton("reset");
    button.onclick = function () {console.log("Test")};

    // Set up test bomb
    var bomb = new Bomb(ord,20, 20);
    bombs.push(bomb);

}
// debugging
function test() {
    console.log("Test");
}


//**MP's notes**
function randomBombDrop(arr) {
    let invaders = arr;
    
    
    // Random int from 0 to length of invaders - 1
    var randNum = Math.floor((Math.random() * (invaders.length)) + 1);
    //invaderVector = createVector(invaders[randNum].x, invaders2[randNum].y);
    // Use random int to select invader
    for(i=0; i<invaders.length; i++) {
        if ( invaders[i] == invaders[randNum] ) {
            return randNum;
        } else {
            return i;
        }
    }
    
    // Call drop bomb method of invader
    //randoAlien.dropBomb
    //  Alternatively, just create a bomb here instead of interacting invader
    // Push the bomb to the array



}

function draw() {

    clear();
    if (gameOn == "over") {
        background(51);
        textSize(24);
        textFont('Helvetica');
        strokeWeight(1);
        fill('rgb(0,255,0)');
        text("Press Enter to start", 175, 200);
    }
    if (gameOn == "on") { // Start Game

        background(51);
        ship.show();
        ship.move();

        // bullets array
        
        for (var i = 0; i < bullets.length; i++) {
            bullets[i].show();
            bullets[i].move();
            for (var j = 0; j < invaders.length; j++) {
                if (bullets[i].hits(invaders[j])) {
                    invaders[j].die();
                    bullets[i].die();
                }
            }
            for (var j = 0; j < invaders2.length; j++) {
                if (bullets[i].hits(invaders2[j])) {
                    invaders2[j].die();
                    bullets[i].die();
                }
            }
            ammoUsed = bullets.length;
        }

        // bombs array
        for (var i = 0; i < bombs.length; i++) {
            bombs[i].show();
            bombs[i].move();
            
            if (bombs[i].hits(ship)) {
                ship.die();
                bombs[i].die();
            }
        }

        // the edge flag
        var edge = false;
    // this loop sets up the first row of invaders
        for (var i = 0; i < invaders.length; i++) {
            invaders[i].show();
            invaders[i].move();
            if (invaders[i].x > width || invaders[i].x < 0) {
                edge = true;
            }
        }

        for (var i = 0; i < invaders2.length; i++) {
            invaders2[i].show();
            invaders2[i].move();    
            if (invaders2[i].x > width || invaders2[i].x < 0) {
                edge = true;
            }
            
        }

        if (edge) {
            for (var i = 0; i < invaders.length; i++) {
                
                invaders[i].shiftDown();
            }  
            for (var i = 0; i < invaders2.length; i++) {
                invaders2[i].shiftDown();
            }
        }

        // kill hit invaders
        for (var i = invaders.length-1; i >= 0; i--) {
            if (invaders[i].toDelete) {
                playerScore += invaders[i].points;
                invaders.splice(i, 1);
            }
        }
        for (var i = invaders2.length-1; i >= 0; i--) {
            if (invaders2[i].toDelete) {
                playerScore += invaders2[i].points;
                invaders2.splice(i, 1);
            }
        }

        for (var i = bullets.length-1; i >= 0; i--) {
            if (bullets[i].toDelete) {
                bullets.splice(i, 1);
            }
        }

    
        // draw score
        textSize(24);
        textFont('Helvetica');
        strokeWeight(1);
        fill('rgb(0,255,0)');
        text(`Score: ${playerScore}`, width - 150, 30);
        text(`Ammo: ${ammoUsed}`, width - 150, 50);
    }
}

function keyReleased() {
    if (key != ' ') {
        ship.setDir(0);
    }
}

function keyPressed() {
    if (keyCode === ENTER) {
        gameOn = "on";
    }
    if (key === ' ') {
        var bullet = new Bullet(ammo, ship.x, height);
        bullets.push(bullet);

        // drop bomb here
        //randomBombDrop(arr)
        //invaderVector = createVector(invaders[randomBombDrop(invaders)].x, invaders2[randomBombDrop(invaders)].y);
        var bomb = new Bomb(ord, invaders[randomBombDrop(invaders)].x, invaders2[randomBombDrop(invaders)].y);
        bombs.push(bomb);
       
    }
    if (keyCode === RIGHT_ARROW) {
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
        ship.setDir(-1);
    }
}
