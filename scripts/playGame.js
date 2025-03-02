import { updateMoveHistory } from "./update.js"
 
function getComputerInput() {
    let rand = Math.random() * 3;
    switch (Math.floor(rand)) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSOR";
        default:
            return getComputerInput();
    }
}

function compare(userInput, computerInput) {
    if (userInput === computerInput) {
        return "DRAW";
    }
    switch(userInput) {
        case "ROCK":
            if (computerInput === "SCISSOR") {
                return "WIN";
            }
            break;
        case "PAPER":
            if (computerInput === "ROCK") {
                return "WIN";
            }
            break;
        case "SCISSOR":
            if (computerInput === "PAPER") {
                return "WIN";
            }
            break;
        case "CANCEL":
            return userInput;
        default:
            console.log("Something went wrong");
            throw ReferenceError();
    }
    return "LOSE";
}

export function playgame(e) {
    let userInput = e.target.id;
    let computerInput = getComputerInput();

    let result = compare(userInput, computerInput);
    updateMoveHistory(userInput, computerInput, result);
    return result;
}