var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var wins = 0;
var losses = 0;
var guess = 15;
var guessletters = [];

document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();


    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

        guessletters.push(userGuess);

        guess--;

        function reset() {
            guess = 15;
            guessletters.length = 0;
        }

        if (userGuess === computerGuess) {
            wins++;
            reset();
            alert("You Win");
        } else if (guess === 0) {
            losses++;
            reset();
            alert("You Lose");
        }



        var html =

           
            "<p>Guess what letter I'm thinking of:</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guess + "</p>" +
            "<p>Your Guesses so far: " + guessletters + "</p>";


        document.querySelector("#game").innerHTML = html;
    }
};
