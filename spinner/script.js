var playerItems = [];
var aiItems = [];

var playerRequirements = [];
var aiRequirements = [];

var ingredients = ["Eggs", "Lettuce", "Milk", "Flour", "Sugar", "Wheat", "Rice", "Bread"]

var wheelSpinning = false;


let theWheel = new Winwheel({
    'outerRadius'     : 212,        // Set outer radius so wheel fits inside the background.
    'innerRadius'     : 2,         // Make wheel hollow so segments dont go all way to center.
    'textFontSize'    : 16,         // Set default font size for the segments.
    'textOrientation' : 'horizontal', // Make text vertial so goes down from the outside of wheel.
    'textAlignment'   : 'outer',    // Align text to outside of wheel.
    'numSegments'     : 19,         // Specify number of segments.
    'segments'        :             // Define segments including colour and text.
    [                               // font size and text colour overridden on backrupt segments.
        {'fillStyle' : '#ff7152', 'text' : 'Eggs'},
        {'fillStyle' : '#3cb878', 'text' : 'Lettuce'},
        {'fillStyle' : '#f6989d', 'text' : 'Milk'},
        {'fillStyle' : '#00aef0', 'text' : 'Flour'},
        {'fillStyle' : '#000000', 'text' : 'LOSE AN INGREDIENT', 'textFontSize' : 11, 'textFillStyle' : '#ffffff'},
        {'fillStyle' : '#ff8c9f', 'text' : 'Wheat'},  
        {'fillStyle' : '#ffd35c', 'text' : 'Rice'},   
        {'fillStyle' : '#ff8a4f', 'text' : 'Bread'},   
        {'fillStyle' : '#ff7152', 'text' : 'Eggs'},
        {'fillStyle' : '#3cb878', 'text' : 'Lettuce'},
        {'fillStyle' : '#f6989d', 'text' : 'Milk'},
        {'fillStyle' : '#00aef0', 'text' : 'Flour'},
        {'fillStyle' : '#fff200', 'text' : 'Sugar'},
        {'fillStyle' : '#ff8c9f', 'text' : 'Wheat'},
        {'fillStyle' : '#ffd35c', 'text' : 'Rice'},
        {'fillStyle' : '#ff8a4f', 'text' : 'Bread'},
        {'fillStyle' : '#f26522', 'text' : 'GIVE AN INGREDIENT', 'textFontSize' : 11},   //Give the other player one of your ingridents
        {'fillStyle' : '#000000', 'text' : 'LOSE AN INGREDIENT', 'textFontSize' : 11, 'textFillStyle' : '#ffffff'},//lose an ingridiant
        {'fillStyle' : '#ffffff', 'text' : 'GIVE AN INGREDIENT', 'textFontSize' : 11} //Give the other player one of your ingridents
    ],
    'animation' :           // Specify the animation to use.
    {
        'type'     : 'spinToStop',
        'duration' : 10,
        'spins'    : 9,
        'callbackFinished' : alertPrize,  // Function to call whent the spinning has stopped.
        'callbackSound'    : playSound,   // Called when the tick sound is to be played.
        'soundTrigger'     : 'pin'        // Specify pins are to trigger the sound.
    },
    'pins' :                // Turn pins on.
    {
        'number'     : 19,
        'fillStyle'  : 'silver',
        'outerRadius': 4,
    }
});

 
// Loads the tick audio sound in to an audio object.
let audio = new Audio('tick.mp3');

// This function is called when the sound is to be played.

startGame();
function playSound()
{
    // Stop and rewind the sound if it already happens to be playing.
    audio.pause();
    audio.currentTime = 0;

    // Play the sound.
    audio.play();
}

function startGame()
{
    for (i = 0; i < 6; i++) 
    { 
        playerRequirements.push(ingredients[Math.floor(Math.random() * ingredients.length)])
    }
    for (i = 0; i < 6; i++) 
    { 
        aiRequirements.push(ingredients[Math.floor(Math.random() * ingredients.length)])
    }

    console.log(playerRequirements)
    displayLists();
}
 
// Called when the animation has finished.
function alertPrize(indicatedSegment)
{
    // Display different message if win/lose/backrupt.
    if (indicatedSegment.text == 'GIVE AN INGREDIENT') {
        alert('You have now lost an ingridient to your opponent');
    } else if (indicatedSegment.text == 'LOSE AN INGREDIENT') {
        alert('Oh no, you have lost an ingridient');
    } else {
        alert("You Received " + indicatedSegment.text);
    }

    if(playerRequirements.includes(indicatedSegment.text))
    {
        playerItems.push(indicatedSegment.text)
    }

    
    console.log(playerItems)
    resetWheel();
    displayLists();
}

function spinWheel()
{
    // Ensure that spinning can't be clicked again while already running.
    if (wheelSpinning == false) {
        // Based on the power level selected adjust the number of spins for the wheel, the more times is has
        // to rotate with the duration of the animation the quicker the wheel spins.
        
        theWheel.animation.spins = 10;

        // Disable the spin button so can't click again while wheel is spinning.

        // Begin the spin animation by calling startAnimation on the wheel object.
        theWheel.startAnimation();

        // Set to true so that power can't be changed and spin button re-enabled during
        // the current animation. The user will have to reset before spinning again.
        wheelSpinning = true;
    }
}

function displayLists()
{
    var playerList = document.getElementById("playerList");
    playerList.innerHTML = "";
    var playerItemsList = document.getElementById("playerItems");
    playerItemsList.innerHTML = "";
    var aiList = document.getElementById("aiList");
    aiList = "";
    var aiItemsList = document.getElementById("aiItems");
    aiItemsList = "";
    for (i = 0; i < playerRequirements.length; i++) 
    { 
        playerList.innerHTML += "<li>" + playerRequirements[i] + "</li>"
    }
    for (i = 0; i < playerItems.length; i++) 
    { 
        playerItemsList.innerHTML += "<li>" + playerItems[i] + "</li>"
    }
    for (i = 0; i < aiRequirements.length; i++) 
    { 
        aiList.innerHTML += "<li>" + aiRequirements[i] + "</li>"
    }
    for (i = 0; i < aiItems.length; i++) 
    { 
        aiItemsList.innerHTML += "<li>" + aiItems[i] + "</li>"
    }
}

function resetWheel()
{
    theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    theWheel.draw();                // Call draw to render changes to the wheel.

    wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
}
