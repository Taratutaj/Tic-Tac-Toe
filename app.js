var board;
var playerO = "O";
var playerX = "X";
var currPlayer = playerO;
var gameOver = false;

window.onload = function() {
  setGame();
}

function setGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {

      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      if (r == 0 || r == 1) {
        tile.classList.add("horizontal-line");
      }
      if (c == 0 || c == 1) {
        tile.classList.add("vertical-line");
      }
      tile.addEventListener("click", setTile);
      document.getElementById("board").append(tile);
    }
  }
}

function setTile() {
  if (gameOver) {
    return;
  }

  let coords = this.id.split("-");
  let r = parseInt(coords[0]);
  let c = parseInt(coords[1]);

  if (board[r][c] != '') {
    return;
  }
  board[r][c] = currPlayer;
  this.innerText = currPlayer;

  if (currPlayer == playerO) {
    currPlayer = playerX;
  } else if (currPlayer == playerX) {
    currPlayer = playerO;
  }
  checkWinner();
}

function checkWinner() {
  //horizontally
  for (let r = 0; r < 3; r++) {
    if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != '') {
      for (i = 0; i < 3; i++) {
        let tile = document.getElementById(r.toString() + "-" + i.toString());
        tile.classList.add("winner");
      }
      gameOver = true;
      return;
    }
  }
  //vertically
  for (let c = 0; c < 3; c++) {
    if (board[0][c] == board[1][c] && board[1][c] == board[2][c] && board[0][c] != '') {
        for (i = 0; i < 3; i++) {
          let tile = document.getElementById(i.toString() + "-" + c.toString());
          tile.classList.add("winner");
        }
        gameOver = true;
        return;
    }
  }
  //diagonally
  if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != '') {
    for (i = 0; i < 3; i++) {
      let tile = document.getElementById(i.toString() + "-" + i.toString());
      tile.classList.add("winner");
    }
    gameOver = true;
    return;
  }
  if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[2][0] != ''){
    let c=2
    for(r=0;r<3;r++){
    let tile = document.getElementById(r.toString() + "-" + c.toString());
    tile.classList.add("winner");
    c= c-1;
    }
    gameOver = true;
    return;
  }
}
