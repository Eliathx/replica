const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let firstTurn = true, gameIsRunning = true, winnerFound = false, clickCounter = 0;

const checkWinCondition = () => {
    for (let i = 0; i < winCombinations.length; i++) {
        let a = document.getElementById(`${winCombinations[i][0]}`)
        let b = document.getElementById(`${winCombinations[i][1]}`)
        let c = document.getElementById(`${winCombinations[i][2]}`)

        if (a.innerText === b.innerText && a.innerText === c.innerText && (a.innerText === "X" || a.innerText === "O")) {
            a.style.color = "#226b9f";
            b.style.color = "#226b9f";
            c.style.color = "#226b9f";
            gameIsRunning = false;
            winnerFound = true;

        }
    }
}
const addText = (event) => {
    if (event.target.innerText === "") {
        event.target.innerText = firstTurn ? "X" : "O";
        clickCounter++;
        firstTurn = !firstTurn
    }
}

const handleClick = (event) => {
    let message = document.getElementById("game-message");
    if (gameIsRunning) {
        addText(event)
        checkWinCondition()
    }
    if (clickCounter === 9 && !winnerFound) {
        message.innerHTML = "It's a <a id='draw'>draw!</a>";
        gameIsRunning = false;
    } else {
        let turn = firstTurn ? "X" : "O"
        message.innerHTML = winnerFound ? "We have a <a id='winner'>winner</a>!" : "Current turn: "+turn;
    }

}

const reset = () => {
    let message = document.getElementById("game-message");
    gameIsRunning = true;
    winnerFound = false;
    clickCounter = 0;
    for (let i = 0; i < 9; i++) {
        document.getElementById(`${i}`).innerText = "";
        document.getElementById(`${i}`).style.color = "rgba(255, 255, 255, 0.75)";
    }
    message.innerText = "Click to begin game!";
}