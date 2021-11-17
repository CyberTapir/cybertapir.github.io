/*
Spades = Red
Clubs = Blue
Diamonds = Yellow
Hearts = Green
Others - Draw 4
*/
const { decks } = require('cards');
//create the deck
const deck = new decks.StandardDeck({ jokers: 2 });
//shuffle the deck
deck.shuffleAll()
//create a hand
const hand = deck.draw(7);
console.log(hand);

//Substitute for actual UNO Cards

//Write out the hand

//while not won

    //Write out the last played card.

    //Play a card
        //remove the card from the hand
        //add to played.