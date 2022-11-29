const cellButton = Array.from(document.querySelectorAll(".cell"));
const whoseTurn = document.querySelector(".whoseTurn");
const restart = document.querySelector(".restart");
const playAgain = document.querySelector(".playAgain");
const overview = document.querySelector(".overview");

let player = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let roundWon = false;

const winCombos = [
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "4", "8"],
  ["2", "4", "6"],
];

// const gameStatus

console.log(cellButton);

const cellPlayed = (clickedCellID, clickedCell) => {
  gameState[clickedCellID] = player;
  clickedCell.innerHTML += player;
};

const resultChecker = () => {
  //looping through win combos
  for (let i = 0; i < winCombos.length; i++) {
    // testing against each type of win combination
    const winCombo = winCombos[i];
    console.log(winCombo);
    let a = gameState[winCombo[0]];
    let b = gameState[winCombo[1]];
    let c = gameState[winCombo[2]];
    // Want to check if any gameState values are empty
    if (a === "" || b === "" || c === "") {
      continue;
    }
    console.log(player);
    if (a === b && b === c) {
      roundWon = true;
    }
  }
};

const cellClick = (event) => {
  const clickedCell = event.target;
  const clickedCellID = event.target.id;
  // check if cell has already been clicked vs game state
  if (gameState[clickedCellID] != "") {
    return;
  }
  cellPlayed(clickedCellID, clickedCell);
  // check result
  resultChecker();

  if (roundWon == true) {
    if (player == "X") {
      window.alert("Player X wins!");
    } else if (player == "O") {
      window.alert("Player O wins!");
    }
  }
  if (player == "X") {
    player = "O";
  } else if (player == "O") {
    player = "X";
  }
};

// Click event for each grid square
cellButton.forEach((cell) => {
  cell.addEventListener("click", cellClick);
});

playAgain.addEventListener("click", () => {
  cellButton.forEach((cell) => {
    cell.innerHTML = "";
  });
});

restart.addEventListener("click", () => {
  console.log("gameState before", gameState);
  gameState = ["", "", "", "", "", "", "", "", ""];
  cellButton.forEach((cell) => {
    cell.innerHTML = "";
  });
  console.log("gameState after", gameState);
});

// if (player == "X" && cell.innerHTML == "") {
//   cell.innerHTML += "X";
//   player = "O";
// } else if (player == "O" && cell.innerHTML == "") {
//   cell.innerHTML += "O";
//   player = "X";
// }
// if (player == "X") {
//   whoseTurn.innerHTML = "Current Turn: X";
// } else if (player == "O") {
//   whoseTurn.innerHTML = "Current Turn: O";
// }
// ;
