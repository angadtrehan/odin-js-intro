import { playgame } from "./playGame.js"
import { updateScores, cleanUp, displayResult, displayRounds } from "./update.js";

const button = document.querySelector("button");
const tracker = document.querySelector(".tracking");
const choices = document.querySelector(".choices");
let rounds = 5;
let currentRound = 0;
let userScore = 0;
let computerScore = 0;

button.addEventListener("click", () => {
    const input = document.querySelector("input");
    rounds = parseInt(input.value) || rounds;
    cleanUp();

    console.log(`We'll be playing ${rounds} rounds!`);
    displayRounds(rounds);
});

choices.addEventListener('click', (e) => {
    if (currentRound < rounds) {
        let status = playgame(e);
        if (status === "WIN") {
            userScore += 1;
        } else if (status === "LOSE") {
            computerScore += 1
        } else if (status === "DRAW") {
            console.log("it was a draw");
        } 
        
        updateScores(userScore, computerScore);
        if (currentRound === rounds - 1 || status === "CANCEL") {
            displayResult(userScore, computerScore);
        }
        currentRound++;
    }
});

let scrollVal = 0;
let posX = 0;
let posY = 0;

function updateTrackerPos() {
    tracker.style.top = (posY + scrollVal) + 'px';
    tracker.style.left = posX + 'px';
}

document.addEventListener('mousemove', (e) => {
    posX = e.pageX;
    posY = e.pageY;
    tracker.style.top = posY + 'px';
    tracker.style.left = posX + 'px';
});
document.addEventListener('scroll', (e) => {
    console.log(e);
    tracker.style.top = posY + window.scrollY + 'px';
});