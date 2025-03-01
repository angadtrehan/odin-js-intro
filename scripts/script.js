import { playgame } from "./playGame.js"

const button = document.querySelector("button");
const defaultRounds = 5;

button.addEventListener("click", () => {
    const input = document.querySelector("input");
    let rounds = parseInt(input.value) || defaultRounds;

    console.log(`We'll be playing ${rounds} rounds!`);
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++) {
        let status = playgame();
        if (status === "WIN") {
            userScore += 1;
            alert(`You won! Your current score is ${userScore}, and computer's current score is ${computerScore}`);
        } else if (status === "LOSE") {
            computerScore += 1
            alert(`You lost :( Your current score is ${userScore}, and computer's current score is ${computerScore}`);
        } else if (status === "DRAW") {
            alert(`It's a draw. Your current score is ${userScore}, and computer's current score is ${computerScore}`);
        } else {
            alert(`You've cancelled the game, calculating score for ${i+1} rounds played`);
            break;
        }
    }

    const result = document.querySelector("p");
    if (userScore != computerScore) {
        result.textContent = `You ${userScore > computerScore ? "won" : "lost"}! Winner is ${userScore > computerScore ? "User" : "Computer"}. Your score: ${userScore}, computer's score: ${computerScore}`;
    } else {
        result.textContent = `It's a draw :( Try again? Your score: ${userScore}, computer's score: ${computerScore}`;
    }
});