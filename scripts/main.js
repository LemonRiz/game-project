const cellButton = Array.from(document.querySelectorAll(".cell"));
const whoseTurn = document.querySelector(".whoseTurn");
const restart = document.querySelector(".restart");
const playAgain = document.querySelector(".playAgain");
const overview = document.querySelector(".overview");

let player = "X";

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

// Click event for each grid square
cellButton.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (player == "X" && cell.innerHTML == "") {
      cell.innerHTML += "X";
      player = "O";
    } else if (player == "O" && cell.innerHTML == "") {
      cell.innerHTML += "O";
      player = "X";
    }
    if (player == "X") {
      whoseTurn.innerHTML = "Current Turn: X";
    } else if (player == "O") {
      whoseTurn.innerHTML = "Current Turn: O";
    }
  });
});

playAgain.addEventListener("click", () => {
  cellButton.forEach((cell) => {
    cell.innerHTML = "";
  });
});

restart.addEventListener("click", () => {
  cellButton.forEach((cell) => {
    cell.innerHTML = "";
  });
  overview.innerHTML = "";
  player = "X";
  whoseTurn.innerHTML = "Current Turn: X";
});
