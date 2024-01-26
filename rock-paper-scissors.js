/*function playGame() {
    // Array of possible moves
    const moves = ["rock", "paper", "scissors"]; */
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    let choice = [rock, paper, scissors];

    /*
    my problem is-
    when checking if prompt input is rock paper or scissors, 
    the check also allows any character within the strings rock paper or scissors,
    how can i make sure prompt ONLY accepts the entire string 
    */

    // Get user's choice
    let userChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();

      if (userChoice = choice) {
        console.log(true);
      }
      else {
        console.log("Please enter Rock, Paper, or Scissors")
      }

   

  



  



/*

  // Computer randomly selects a move
    const computerChoice = moves[Math.floor(Math.random() * moves.length)];

    // Display choices
    console.log("You chose: " + userChoice);
    console.log("Computer chose: " + computerChoice);

    // Determine the winner
    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
    } else {
        console.log("Computer wins!");
    }
}

// Call the function to play the game
playGame();


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