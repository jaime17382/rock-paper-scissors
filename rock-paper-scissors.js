/*function playGame() {
    // Array of possible moves
    const moves = ["rock", "paper", "scissors"]; */
    let choiceOne = "rock";
    let choiceTwo = "paper";
    let choiceThree = "scissors";

    /*
    my problem is-
    when checking if prompt input is rock paper or scissors, 
    the check also allows any character within the strings rock paper or scissors,
    how can i make sure prompt ONLY accepts the entire string 
    */

    // Get user's choice
    let userChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();

      if (userChoice === choiceOne || userChoice === choiceTwo || userChoice === choiceThree ) {
        console.log(true);
      }
      else {
        console.log("Please enter Rock, Paper, or Scissors")
      }

      do {
        prompt(userChoice)
      }
      while(userChoice !== choiceOne);
      

   

  



  



/*


let pattern = /^["Rock", "Paper", "Scissors"]/;

function getComputerChoice() {
    let game = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * game.length);
    return game [random];
   }



   function roundOne(playerSelection, computerSelection) {
        if (playerSelection = "rock", computerSelection = "rock") {
            return("HI");
        }
        else if (playerSelection = "rock", computerSelection = "scissors"){
            return("not HI");
        }
        else if(playerSelection = "rock", computerSelection = "rock") {
            return("not HI again!");
        }
}


function getPlayerChoice() {
   let playerSelectionOptions = prompt("Rock, Paper, or Scissors");
   let pattern = /^["Rock", "Paper", "Scissors"]/;
   let result = pattern.test(playerSelectionOptions) || !playerSelectionOptions;
    if (result) {
        return(roundOne);
    }
    else if (result !== pattern) {
        return("You did not enter Rock, Paper, or Scissors!");
    }
}



let playerSelection = getPlayerChoice; rock, paper, or scissors 
let computerSelection = getComputerChoice; rock, paper, or scissors 
console.log(roundOne(playerSelection, computerSelection))
*/