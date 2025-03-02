import { playgame } from "./playGame.js"
import { updateScores, cleanUp, displayResult } from "./update.js";

const button = document.querySelector("button");
const tracker = document.querySelector(".tracking");
const defaultRounds = 5;

button.addEventListener("click", () => {
    cleanUp();
    const input = document.querySelector("input");
    let rounds = parseInt(input.value) || defaultRounds;

    console.log(`We'll be playing ${rounds} rounds!`);
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++) {
        let status = playgame();
        if (status === "WIN") {
            userScore += 1;
        } else if (status === "LOSE") {
            computerScore += 1
        } else if (status === "DRAW") {
            console.log("it was a draw");
        } 
        
        updateScores(userScore, computerScore);
        if (status === "CANCEL") {
            alert(`You've cancelled the game, calculating score for ${i+1} rounds played`);
            break;
        }
    }

    displayResult(userScore, computerScore);
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