const cellButton = Array.from(document.querySelectorAll(".cell"));
const whoseTurn = document.querySelector(".whoseTurn");
const restart = document.querySelector(".status__button--restart");
const playAgain = document.querySelector(".status__button--playAgain");
const overview = document.querySelector(".overview");
const xScore = document.querySelector(".xScore");
const oScore = document.querySelector(".oScore");

let player = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let roundWon = false;
let draw = false;
let counter = 0;

let xWins = 0;
let oWins = 0;

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

const cellPlayed = (clickedCellID, clickedCell) => {
  if (roundWon === false) {
    gameState[clickedCellID] = player;
    clickedCell.innerHTML += player;
  }
};

const resultChecker = () => {
  //looping through win combos
  for (let i = 0; i < winCombos.length; i++) {
    // testing against each type of win combination
    const winCombo = winCombos[i];
    let a = gameState[winCombo[0]];
    let b = gameState[winCombo[1]];
    let c = gameState[winCombo[2]];
    // Want to check if any gameState values are empty
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
    }
  }
};

const cellClick = (event) => {
  // Only works if the game isn't won
  if (roundWon == true || draw == true) {
    window.alert("The game is over! ");
  } else {
    const clickedCell = event.target;
    const clickedCellID = event.target.id;
    counter = counter + 1;
    // check if cell has already been clicked vs game state
    if (gameState[clickedCellID] != "") {
      return;
    }
    cellPlayed(clickedCellID, clickedCell);
    // check result
    resultChecker();
    // check for draw
    if (counter >= 9 && roundWon === false) {
      window.alert("A draw!");
      draw = true;
      overview.innerHTML += "<li>A draw!</li>";
    }

    if (roundWon == true) {
      if (player == "X") {
        window.alert("Player X wins!");
        overview.innerHTML += "<li>X Won!</li>";
        xScore.innerHTML = ++xWins;
      } else if (player == "O") {
        window.alert("Player O wins!");
        overview.innerHTML += "<li>O Won!</li>";
        oScore.innerHTML = ++oWins;
      }
    }
    if (player == "X") {
      player = "O";
    } else if (player == "O") {
      player = "X";
    }
  }
  if (player == "X" && roundWon == false) {
    whoseTurn.innerHTML = "Current Turn: X";
  } else if (player == "O" && roundWon == false) {
    whoseTurn.innerHTML = "Current Turn: O";
  }
  if (roundWon == true || draw == true) whoseTurn.innerHTML = "Game Over!";
};

// Click event for each grid square
cellButton.forEach((cell) => {
  cell.addEventListener("click", cellClick);
});

//Restarts game. Loser goes first.
playAgain.addEventListener("click", () => {
  cellButton.forEach((cell) => {
    cell.innerHTML = "";
    gameState = ["", "", "", "", "", "", "", "", ""];
    roundWon = false;
    counter = 0;
    draw = false;
    whoseTurn.innerHTML = "Current Turn: " + player;
  });
});

//Completely clears history and restarts game. X goes first.
restart.addEventListener("click", () => {
  gameState = ["", "", "", "", "", "", "", "", ""];
  cellButton.forEach((cell) => {
    cell.innerHTML = "";
  });
  roundWon = false;
  overview.innerHTML = "";
  player = "X";
  counter = 0;
  draw = false;
  whoseTurn.innerHTML = "Current Turn: X";
  xWins = 0;
  oWins = 0;
  xScore.innerHTML = 0;
  oScore.innerHTML = 0;
});

// if (player == "X" && cell.innerHTML == "") {
//   cell.innerHTML += "X";
//   player = "O";
// } else if (player == "O" && cell.innerHTML == "") {
//   cell.innerHTML += "O";
//   player = "X";
// }

// }
// ;
