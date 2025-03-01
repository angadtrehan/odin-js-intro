function getPlayerInput() {
    while (true) {
        let input = prompt("Choose your fighter (rock/paper/scissor)");
        if (input == null) {
            return "CANCEL";
        } else { 
            input = input.trim().toUpperCase();
            if (!(input === "ROCK" || input === "PAPER" || input === "SCISSOR")) {
                alert("ENTER A VALID CHOICE (LOOK AT THE OPTIONS GIVEN TO YOU PLS - case doesn't matter)");
            } else {
                return input;
            }
        }
    }
}

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
        default:
            console.log("Something went wrong");
            throw ReferenceError();
    }
    return "LOSE";
}

export function playgame() {
    let userInput = getPlayerInput();
    let computerInput = getComputerInput();

    if (userInput === "CANCEL") {
        return userInput;
    }

    return compare(userInput, computerInput);
}