const cellButton = Array.from(document.querySelectorAll(".cell"));

let player = "X";

const winConditions = 
[cellButton[0], cellButton[1], cellButton[2]]


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
  });
});
