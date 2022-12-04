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
let firstTurn = true;
let gameIsRunning = true;

const checkWinCondition = () => {
    for (let i = 0; i < winCombinations.length; i++) {
        let a = document.getElementById(`${winCombinations[i][0]}`).innerText
        let b = document.getElementById(`${winCombinations[i][1]}`).innerText
        let c = document.getElementById(`${winCombinations[i][2]}`).innerText

        if (a === b && a === c && (a === "x" || a === "o")) {
            console.log("Winner");
            gameIsRunning = false;
        }
    }
}
const addText = (event) => {
    if(event.target.innerText === ""){
        event.target.innerText = firstTurn ? "x" : "o";
        firstTurn = !firstTurn
    }
}
const handleClick = (event) => {
    if (gameIsRunning){
        addText(event)
        checkWinCondition()
    }

}