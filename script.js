let playerScore = 0
let computerScore = 0 

function computerPlay() {
    let computerChoices = ["Rock", "Paper", "Scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

let computerSelection = computerPlay();


function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = prompt("Choose your weapon (rock, paper, scissors)");
    playerSelection = playerSelection.toLowerCase();
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);

    if (playerSelection === computerSelection) {
        console.log("Draw");
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        console.log("You Lost");
        computerScore++
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log("You Won!");
        playerScore++
    }
}

function game(){
   while (playerScore != 3 && computerScore != 3) {
       playRound();
   }
}
console.log(game())