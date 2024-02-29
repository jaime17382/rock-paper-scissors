function playGame() {
// Array of possible moves
    let moves = ["rock", "paper", "scissors"]; 

     // Computer randomly selects a move
     let computerChoice = moves[Math.floor(Math.random() * moves.length)];
     
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
        console.log();
      }
      else {
        console.log("Please enter Rock, Paper, or Scissors")
      }

    
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
    
 

   
     /* 
     start simple- 
     write counter function

     use score counter for each player
     */


     let score = 1; prompt("Do you want to continue the game?");
       while (score <= 5 && score != "No") {
       console.log(score);
       score++;
 // Call the function to play the game
       playGame();
      }
 

 
 

  



  
