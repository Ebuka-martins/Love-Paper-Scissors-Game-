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

    if (playerdecision === machinedecision) {
        result = "IT'S A DRAW GAME!!!";
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
    } else if (result === "YOU LOSE!") {
        machineScore++;
    }

    playerDisplay.textContent = `Player: ${playerdecision}`;
    machineDisplay.textContent = `Machine: ${machinedecision}`;
    resultDisplay.textContent = result;
    playerScoreDisplay.textContent = playerScore;
    machineScoreDisplay.textContent = machineScore;
}
