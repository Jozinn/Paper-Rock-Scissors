function computerPlay() {
    let move = Math.floor(Math.random() * 3);
    if (move == 0) {
        return "paper";
    } else if (move == 1) {
        return "rock";
    } else {
        return "scissors";
    }
}
function round(playerSelection, computerSelection) {
    if (playerSelection == "paper" && computerSelection == "rock") {
        return "win";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "win";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "win"; 
    } else if (playerSelection == computerSelection) {
        return;
    } else {
        return "lose";
    }
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0; i<5; i++) {
        let computer = computerPlay();
        let player = prompt("Write: Paper, Rock or Scissors ")
        player = player.toLowerCase();
        let result = round(player, computer);
        if (result == "win") {
            playerScore++;
            console.log(`You win! ${player} beats ${computer}`);
        } else if (result == "lose") {
            computerScore++;
            console.log(`You lose! ${computer} beats ${player}`);
        } else {
            console.log("Draw!");
        }
        console.log("Player score: " + playerScore + " | Computer score: " + computerScore);
    }
    if (playerScore > computerScore) {
        console.log("You win!!!");
    } else if (playerScore < computerScore) {
        console.log("You lose!!!");
    } else {
        console.log("Draw!");
    }
    console.log("The finale score: \n" + "Your score: " + playerScore + "     Computer score: " + computerScore);
}
game();