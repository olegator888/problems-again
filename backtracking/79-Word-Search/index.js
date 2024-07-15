// total sam

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;
  const visit = new Set();

  const backtrack = (r, c, i) => {
    if (i === word.length) return true;
    const coord = `${r}_${c}`;
    if (
      r < 0 ||
      r == rows ||
      c < 0 ||
      c == cols ||
      visit.has(coord) ||
      board[r][c] !== word[i]
    ) {
      return false;
    }

    visit.add(coord);
    const res =
      backtrack(r + 1, c, i + 1) ||
      backtrack(r - 1, c, i + 1) ||
      backtrack(r, c + 1, i + 1) ||
      backtrack(r, c - 1, i + 1);
    visit.delete(coord);
    return res;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (backtrack(r, c, 0)) {
        return true;
      }
    }
  }

  return false;
};
