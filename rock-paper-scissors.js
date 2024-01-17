function getComputerChoice() {
    let game = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * game.length);
    return game [random];
   }

function roundOne(playerSelection, computerSelection) {

    if (playerSelection, computerSelection === "paper") {
        return("You lost! Play Again!")
    }
    else if (playerSelection, computerSelection === "scissors") {
        return ("You Win! Rock beats Scissors")
    }
    else if (playerSelection, computerSelection === "rock") {
        return("It's a tie! Rock is equal to Rock! Replay the round!")
    }
}

function playerSelect(playerSelection) {
    let playerOptions = ["rock", "paper", "scissors"];
}

let playerSelection = prompt("Rock, Paper, or Scissors")
let computerSelection = getComputerChoice();
console.log(roundOne(playerSelection, computerSelection))
   
/*
   let playerOptionsCase = playerOptions.toLowerCase().toUpperCase()
   */