

const decisions = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const machineDisplay = document.getElementById('machineDisplay');
const resultDisplay = document.getElementById('resultDisplay');

function playGame(playerdecision) {
    const machinedecision = decisions[Math.floor (Math.random() * 3)];
    let result = "";

    if (playerdecision === machinedecision) {
        result = "IT'S A DRAW GAME!!!";
    } else {
        switch(playerdecision) {
            case "rock":
        }
    }
}