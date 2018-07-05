$(document).ready(function() {

//Set up variables:
var wins = 0;
var losses = 0;
var guessAmt = 9;
var lettersGuessed = [];

//Attaches variables to the DOM:
$("#Wins").text(wins);
$("#losses").text(losses);
$("#guess-amt").text(guessAmt);
$("#letters-guessed").text(lettersGuessed);


//Computer picks letter at random:
var letters = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
                "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var random = Math.floor((Math.random() * letters.length - 1) + 1);
var computerChoice = letters[random];
console.log(computerChoice)

//game reset function:
function resetGame() {
  computerChoice = letters[random];
  guessAmt = 9;
  $("#guess-amt").text(guessAmt);
  lettersGuessed = [];
  $("#letters-guessed").text(lettersGuessed);
}

//User presses key
var userInput = $(document).keypress (function(event) {
   userInput = event. key;
   
  console.log(userInput);

  lettersGuessed.push(userInput);
  $("#letters-guessed").append((userInput) + ", ");
  
  guessAmt--;
  $("#guess-amt").text(guessAmt);

//If guess is correct:
if (userInput === computerChoice) {
    wins++;
    $("#Wins").text(wins);
    resetGame();
    console.log(wins);
}

//When guessAmt=0
if (guessAmt === 0) {
    losses++;
    $("#losses").text(losses);
    resetGame()
    console.log(losses);
}
});
})
