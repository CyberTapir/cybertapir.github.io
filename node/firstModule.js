const jokes = require('give-me-a-joke');

jokes.getRandomDadJoke( function(joke) {
    console.log(joke);
});
joles.getRandomCNJoke( (joke) => {
    console.log(joke);
});