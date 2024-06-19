/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = {};
  const cols = {};
  const squares = {};

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const coord = `${Math.floor(r / 3)}_${Math.floor(c / 3)}`;
      if (!rows[r]) rows[r] = new Set();
      if (!cols[c]) cols[c] = new Set();
      if (!squares[coord]) squares[coord] = new Set();

      if (board[r][c] === ".") {
        continue;
      }

      if (
        rows[r].has(board[r][c]) ||
        cols[c].has(board[r][c]) ||
        squares[coord].has(board[r][c])
      ) {
        return false;
      }

      rows[r].add(board[r][c]);
      cols[c].add(board[r][c]);
      squares[coord].add(board[r][c]);
    }
  }

  return true;
};
