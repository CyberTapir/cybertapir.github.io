const { decks } = require('cards');
const prompt = require('syncprompt');

// Create a standard 52 card deck + 2 jokers
const deck = new decks.StandardDeck({ jokers: 2 });

// Shuffle the deck
deck.shuffleAll();

// Draw a hand of one card from the deck
const hand = deck.draw(1);

// Get a single card
const card = hand[0];

/**
 * Guess if it's red or black
 */
let guess = prompt("Type r for red or b for black: ");

if (guess == 'r') {
    console.log("You chose red");
    // if r is correct, then the rumors are true
    checkCorrect('red');
} else {
    console.log("You chose black");
    checkCorrect('black');
}

function checkCorrect(colorGuessed) {
    if (getColor(card) == colorGuessed) {
        console.log('You are correct!');
    } else {
        console.log('Try again');
    }
}

function getColor(card) {
    if (card.suit.name == 'diamonds' || card.suit.name == "hearts") {
        return 'red';
    } else {
        return 'black';
    }
}


console.log(hand);
