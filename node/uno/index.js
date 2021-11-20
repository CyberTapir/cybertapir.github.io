const { decks } = require('cards');
const deck = new decks.StandardDeck({ jokers: 2 });
deck.shuffleAll()
const hand = deck.draw(7);
const playerHand = [];
const won = false;
//while (!won){
    substituteCards(hand);
    printCards(playerHand);
    //Gameplay
    //Write out the last played card.
    //Play a card
        //remove the card from the hand
        //add to played pile
//}
function printCards(inputHand) {
    console.log("You have the following cards: ");
    for (i=0;i<7;i++){
        switch (inputHand[i]){
            case "r0":
                console.log("Red Zero (0)");
                break;
            case "r1":
                console.log("Red One (1)");
                break;
            case "r2":
                console.log("Red Two (2)");
                break;
            case "r3":
                console.log("Red Three (3)");
                break;
            case "r4":
                console.log("Red Four (4)");
                break;
            case "r5":
                console.log("Red Five (5)");
                break;
            case "r6":
                console.log("Red Six (6)");
                break;
            case "r7":
                console.log("Red Seven (7)");
                break;
            case "r8":
                console.log("Red Eight (8)");
                break;
            case "r9":
                console.log("Red Nine (9)");
                break;
            case "rs":
                console.log("Red Skip (S)");
                break;
            case "rd":
                console.log("Red Draw 2 (+2)");
                break;
            case "rr":
                console.log("Red Reverse (R)");
                break;
            case "g0":
                console.log("Green Zero (0)");
                break;
            case "g1":
                console.log("Green One (1)");
                break;
            case "g2":
                console.log("Green Two (2)");
                break;
            case "g3":
                console.log("Green Three (3)");
                break;
            case "g4":
                console.log("Green Four (4)");
                break;
            case "g5":
                console.log("Green Five (5)");
                break;
            case "g6":
                console.log("Green Six (6)");
                break;
            case "g7":
                console.log("Green Seven (7)");
                break;
            case "g8":
                console.log("Green Eight (8)");
                break;
            case "g9":
                console.log("Green Nine (9)");
                break;
            case "gs":
                console.log("Green Skip (S)");
                break;
            case "gd":
                console.log("Green Draw 2 (+2)");
                break;
            case "gr":
                console.log("Green Reverse (R)");
                break;
            case "b0":
                console.log("Blue Zero (0)");
                break;
            case "b1":
                console.log("Blue One (1)");
                break;
            case "b2":
                console.log("Blue Two (2)");
                break;
            case "b3":
                console.log("Blue Three (3)");
                break;
            case "b4":
                console.log("Blue Four (4)");
                break;
            case "b5":
                console.log("Blue Five (5)");
                break;
            case "b6":
                console.log("Blue Six (6)");
                break;
            case "b7":
                console.log("Blue Seven (7)");
                break;
            case "b8":
                console.log("Blue Eight (8)");
                break;
            case "b9":
                console.log("Blue Nine (9)");
                break;
            case "bs":
                console.log("Blue Skip (S)");
                break;
            case "bd":
                console.log("Blue Draw 2 (+2)");
                break;
            case "br":
                console.log("Blue Reverse (R)");
                break;
            case "y0":
                console.log("Yellow Zero (0)");
                break;
            case "y1":
                console.log("Yellow One (1)");
                break;
            case "y2":
                console.log("Yellow Two (2)");
                break;
            case "y3":
                console.log("Yellow Three (3)");
                break;
            case "y4":
                console.log("Yellow Four (4)");
                break;
            case "y5":
                console.log("Yellow Five (5)");
                break;
            case "y6":
                console.log("Yellow Six (6)");
                break;
            case "y7":
                console.log("Yellow Seven (7)");
                break;
            case "y8":
                console.log("Yellow Eight (8)");
                break;
            case "y9":
                console.log("Yellow Nine (9)");
                break;
            case "ys":
                console.log("Yellow Skip (S)");
                break;
            case "yd":
                console.log("Yellow Draw 2 (+2)");
                break;
            case "yr":
                console.log("Yellow Reverse (R)");
                break;
        }
    }
}
function substituteCards() {
    for (var i = 0;i<7;i++){
        switch(hand[i].rank.longName){
            case "Ace":
                switch(hand[i].suit.name){
                    case "diamonds": //Yellow 1
                        playerHand[i] = "y1";
                        break;
                    case "clubs": //Blue 1
                        playerHand[i] = "b1";
                        break;
                    case "spades": //Red 1
                        playerHand[i] = "r1";
                        break;
                    case "hearts": //Green 1
                        playerHand[i] = "g1";
                        break;
                }
                break;
            case "Two":
                switch(hand[i].suit.name){
                    //Card colour
                    case "diamonds":
                        playerHand[i] = "y2";
                        break;
                    case "clubs":
                        playerHand[i] = "b2";
                        break;
                    case "spades":
                        playerHand[i] = "r2";
                        break;
                    case "hearts":
                        playerHand[i] = "g2";
                        break;
                }
                break;
            case "Three":
                switch(hand[i].suit.name){
                    //Card colour
                    case "diamonds":
                        playerHand[i] = "y3";
                        break;
                    case "clubs":
                        playerHand[i] = "b3";
                        break;
                    case "spades":
                        playerHand[i] = "r3";
                        break;
                    case "hearts":
                        playerHand[i] = "g3";
                        break;
                }
                break;
            case "Four":
                switch(hand[i].suit.name){
                    //Card colour
                    case "diamonds":
                        playerHand[i] = "y4";
                        break;
                    case "clubs":
                        playerHand[i] = "b4";
                        break;
                    case "spades":
                        playerHand[i] = "r4";
                        break;
                    case "hearts":
                        playerHand[i] = "g4";
                        break;
                }
                break;
            case "Five":
                switch(hand[i].suit.name){
                    //Card colour
                    case "diamonds":
                        playerHand[i] = "y5";
                        break;
                    case "clubs":
                        playerHand[i] = "b5";
                        break;
                    case "spades":
                        playerHand[i] = "r5";
                        break;
                    case "hearts":
                        playerHand[i] = "g5";
                        break;
                }
                break;
            case "Six":
                switch(hand[i].suit.name){
                    //Card colour
                    case "diamonds":
                        playerHand[i] = "y6";
                        break;
                    case "clubs":
                        playerHand[i] = "b6";
                        break;
                    case "spades":
                        playerHand[i] = "r6";
                        break;
                    case "hearts":
                        playerHand[i] = "g6";
                        break;
                }
                break;
            case "Seven":
                switch(hand[i].suit.name){
                    //Card colour
                    case "diamonds":
                        playerHand[i] = "y7";
                        break;
                    case "clubs":
                        playerHand[i] = "b7";
                        break;
                    case "spades":
                        playerHand[i] = "r7";
                        break;
                    case "hearts":
                        playerHand[i] = "g7";
                        break;
                }
                break;
            case "Eight":
                switch(hand[i].suit.name){
                    //Card colour
                    case "diamonds":
                        playerHand[i] = "y8";
                        break;
                    case "clubs":
                        playerHand[i] = "b8";
                        break;
                    case "spades":
                        playerHand[i] = "r8";
                        break;
                    case "hearts":
                        playerHand[i] = "g8";
                        break;
                }
                break;
            case "Nine":
                switch(hand[i].suit.name){
                    //Card colour
                    case "diamonds":
                        playerHand[i] = "y9";
                        break;
                    case "clubs":
                        playerHand[i] = "b9";
                        break;
                    case "spades":
                        playerHand[i] = "r9";
                        break;
                    case "hearts":
                        playerHand[i] = "g9";
                        break;
                }
                break;
            case "Ten": //Zero
                switch(hand[i].suit.name){
                    //Card colour
                    case "diamonds":
                        playerHand[i] = "y0";
                        break;
                    case "clubs":
                        playerHand[i] = "b0";
                        break;
                    case "spades":
                        playerHand[i] = "r0";
                        break;
                    case "hearts":
                        playerHand[i] = "g0";
                        break;
                }
                break;
            case "Jack": //Reverse
                switch(hand[i].suit.name){
                    //Card colour
                    case "diamonds":
                        playerHand[i] = "yr";
                        break;
                    case "clubs":
                        playerHand[i] = "br";
                        break;
                    case "spades":
                        playerHand[i] = "rr";
                        break;
                    case "hearts":
                        playerHand[i] = "gr";
                        break;
                }
                break;
            case "Queen": //Draw 2
                switch(hand[i].suit.name){
                    //Card colour
                    case "diamonds":
                        playerHand[i] = "yd";
                        break;
                    case "clubs":
                        playerHand[i] = "bd";
                        break;
                    case "spades":
                        playerHand[i] = "rd";
                        break;
                    case "hearts":
                        playerHand[i] = "gd";
                        break;
                }
                break;
            case "King": //Skip
                switch(hand[i].suit.name){
                    //Card colour
                    case "diamonds":
                        playerHand[i] = "ys";
                        break;
                    case "clubs":
                        playerHand[i] = "bs";
                        break;
                    case "spades":
                        playerHand[i] = "rs";
                        break;
                    case "hearts":
                        playerHand[i] = "gs";
                        break;
                }
            case "Joker":
                //Draw 4
                playerHand[i] = "j";
                break;
        }
    }
    return playerHand;
}