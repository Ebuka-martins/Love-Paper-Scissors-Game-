const decisions = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const machineDisplay = document.getElementById('machineDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const machineScoreDisplay = document.getElementById('machineScoreDisplay');

let playerScore = 0;
let machineScore = 0;

function playGame(playerdecision) {
    const machinedecision = decisions[Math.floor(Math.random() * 3)];
    let result = "";

    // Reset Classes
    resultDisplay.classList.remove("win", "lose", "draw");

    if (playerdecision === machinedecision) {
        result = "IT'S A DRAW GAME!!!";
        resultDisplay.classList.add("draw");
    } else {
        switch (playerdecision) {
            case "rock":
                result = (machinedecision === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (machinedecision === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (machinedecision === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    if (result === "YOU WIN!") {
        playerScore++;
        resultDisplay.classList.add('win');
    } else if (result === "YOU LOSE!") {
        machineScore++;
        resultDisplay.classList.add('lose');
    }

    playerDisplay.textContent = `Player: ${playerdecision}`;
    machineDisplay.textContent = `Machine: ${machinedecision}`;
    resultDisplay.textContent = result;
    playerScoreDisplay.textContent = playerScore;
    machineScoreDisplay.textContent = machineScore;

    if (playerScore >= 10) {
        endGame("Congratulation! you reached 10 points first and won the game!");
    } else if (machineScore >= 10) {
        endGame("The machine reached 10 point first. Better luck next time!");
    }
}

function endGame(message) {
    // Display a celebration message
    resultDisplay.textContent = message;
    // change the styling as needed
    resultDisplay.classList.add('win'); 

    // optionally, add celebratory effects like confetti or sounds
    alert(message);

    // Display further play
    playerScore = 0;
    machineScore = 0; 
}
