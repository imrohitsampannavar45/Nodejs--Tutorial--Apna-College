var giveMeAJoke = require('give-me-a-joke');

// To get a random dad joke
giveMeAJoke.getRandomDadJoke(function (joke) {
    console.log(joke);
});

// // To get a random Chuck Norris joke
// giveMeAJoke.getRandomCNJoke(function (joke) {
//     //=> console.log(joke);
// });