// Create your global variables here
var wins = 0;
var losses = 0;
var guessAmt = 9;
var lettersGuessed = [];
var letters = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
                "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var random = Math.floor((Math.random() * letters.length - 1) + 1);
var computerChoice = letters[random];

console.log(computerChoice)

// Show the initals values on the DOM - each attaches to an id in the HTML

document.getElementById("Wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guess-amt").innerHTML = guessAmt;

// capture key press from the user
document.onkeypress = function(event) {
  // The key property on the event object is used to capture which key the user presses
  var userInput = event. key;
//   console.log(userInput)
  // An if...else statement is needed to compare the user's input the randomly choosen letter by the computer
  // The condition can only evaluate to true or false
  if (userInput === computerChoice) {
    // This block of code runs if the condition is true
    
    wins++; // Shorthand for wins = wins + 1; OR wins += 1;
    document.getElementById("Wins").innerHTML = wins;
    }
    
    // if (userInput === computerChoice) 
    //  computer generates new answer
    

    else {
    // This block of code runs if the condition is false

    // Addes the letter to the end of the array
    lettersGuessed.push(userInput);

    // Joins the array into a string and shows that on the DOM
    document.getElementById("letters-guessed").innerHTML = lettersGuessed.join(", ");

    
      } 

    if (userInput !== computerChoice) {
        // This block of code runs if the condition is false
        
        losses++; // Shorthand for losses = losses + 1; OR wins += 1;
        document.getElementById("losses").innerHTML = losses;
      } 
    // Keeps the counter from going under 0
    if (guessAmt === 0) {
      losses++; 
      document.getElementById("losses").innerHTML = losses;

    } 
    else if (guessAmt > 0) {
      guessAmt--; // Shorthand for guessAmt = guessAmt - 1; OR losses -= 1;
      document.getElementById("guess-amt").innerHTML = guessAmt;
    }
    if (guessAmt === 0) {
    document.location.href = ""
    }
  
}
