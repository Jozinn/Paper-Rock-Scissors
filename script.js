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
    const score = document.getElementById("score");
    const resultText = document.getElementById("result-text");
    const paper = document.getElementById("paper");
    const rock = document.getElementById("rock");
    const scissors = document.getElementById("scissors");
    const final = document.createElement("h1");
    const reset = document.createElement("button");
    let playerScore = 0;
    let computerScore = 0;
    let player = "";
    let counter = 0;
    paper.addEventListener("click", () => {
        player = "paper";
        getRound();
        counter++;
    });
    rock.addEventListener("click", () => {
        player = "rock";
        getRound();
        counter++;
    });
    scissors.addEventListener("click", () => {
        player = "scissors";
        getRound();
        counter++;
    });
    reset.addEventListener("click", () => {
        document.body.removeChild(final);
        document.body.removeChild(reset);
        document.body.appendChild(score);
        document.body.appendChild(resultText);
        document.body.appendChild(rock);
        document.body.appendChild(paper);
        document.body.appendChild(scissors);
        player = "";
        playerScore = 0;
        computerScore = 0;
        counter = 0;
    });
    function getRound() {
        let computer = computerPlay();
        let result = round(player, computer);
        if (result == "win") {
            playerScore++;
            resultText.textContent = `You win! ${player} beats ${computer}`;
        } else if (result == "lose") {
            computerScore++;
            resultText.textContent = `You lose! ${computer} beats ${player}`;
        } else {
            resultText.textContent = "Draw!";
        }
        score.textContent = "Player score: " + playerScore + " | Computer score: " + computerScore;
        if(counter == 4) {
            document.body.appendChild(final);
            document.body.appendChild(reset);
            document.body.removeChild(score);
            document.body.removeChild(resultText);
            document.body.removeChild(rock);
            document.body.removeChild(paper);
            document.body.removeChild(scissors);
            reset.textContent = "Reset";
            if(playerScore > computerScore) {
                final.textContent = `You Win! \n Player score: ${playerScore} | Computer score: ${computerScore}`;
            } else if(playerScore < computerScore) {
                final.textContent = `You Lose! \n Player score: ${playerScore} | Computer score: ${computerScore}`;
            } else {
                final.textContent = `Draw! \n Player score: ${playerScore} | Computer score: ${computerScore}`;
            }  
        }
    }
}
game();