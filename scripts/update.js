const user = document.querySelector(".user-score > .score");
const computer = document.querySelector(".computer-score > .score");
const result = document.querySelector("p.result");
const list = document.querySelector(".movelist");
const setupArea = document.querySelector(".setup-area");
const playArea = document.querySelector(".play-area");
const resultsArea = document.querySelector(".result-area")
const roundsText = document.querySelector(".rounds-text");

export function updateScores(userScore, computerScore) {
    user.textContent = `${userScore}`;
    computer.textContent = `${computerScore}`;
}

export function updateMoveHistory(userInput, computerInput, result) {
    const listItem = document.createElement("li");
    listItem.classList.add("move");

    if (result === "CANCEL") {
        listItem.appendChild(document.createTextNode("USER ENDED GAME EARLY"));
    } else {
        listItem.appendChild(document.createTextNode(`USER ${userInput}, COMPUTER ${computerInput}: ${result} FOR U`));
    }
    list.appendChild(listItem);
}

export function cleanUp() {
    user.textContent = "";
    computer.textContent = "";
    while (list.firstElementChild) {
        list.removeChild(list.firstElementChild);
    }
    result.textContent = "Result: ";
    setupArea.style.display = "none";
    playArea.style.display = "block";
    resultsArea.style.display = "block";
    result.style.display = "none";
}

export function displayResult(userScore, computerScore) {
    if (userScore != computerScore) {
        result.textContent = result.textContent + `You ${userScore > computerScore ? "won" : "lost"}! Winner is ${userScore > computerScore ? "User" : "Computer"}. Your score: ${userScore}, computer's score: ${computerScore}`;
    } else {
        result.textContent = result.textContent + `It's a draw :( Try again? Your score: ${userScore}, computer's score: ${computerScore}`;
    }
    result.style.display = "block";
    playArea.style.display = "none";
    setupArea.style.display = "block";
}

export function displayRounds(rounds) {
    roundsText.textContent = `We'll be playing ${rounds} rounds`;
}