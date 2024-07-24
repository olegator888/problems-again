// total sam

var solve = function (board) {
  const rows = board.length;
  const cols = board[0].length;

  const capture = (r, c) => {
    if (r < 0 || c < 0 || r === rows || c === cols || board[r][c] !== "O") {
      return;
    }

    board[r][c] = "U";
    capture(r + 1, c);
    capture(r - 1, c);
    capture(r, c + 1);
    capture(r, c - 1);
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (
        board[r][c] === "O" &&
        ([0, rows - 1].includes(r) || [0, cols - 1].includes(c))
      ) {
        capture(r, c);
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "O") {
        board[r][c] = "X";
      }
      if (board[r][c] === "U") {
        board[r][c] = "O";
      }
    }
  }
};
