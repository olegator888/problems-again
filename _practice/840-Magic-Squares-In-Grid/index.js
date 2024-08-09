/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  // r, c - top left corner of square to check
  const checkSquare = (r, c) => {
    const nums = new Set();

    let sum = 0;

    // check that all the numbers are in range from 1 to 9 inclusive
    // and compute sum that must be the same for every row, col and diag
    for (let i = r; i < r + 3; i++) {
      for (let j = c; j < c + 3; j++) {
        if (nums.has(grid[i][j])) return false;
        nums.add(grid[i][j]);
        if (grid[i][j] < 1 || grid[i][j] > 9) return false;
        if (i === r) sum += grid[i][j];
      }
    }

    // check every row
    for (let i = r; i < r + 3; i++) {
      let rowSum = 0;
      for (let j = c; j < c + 3; j++) {
        rowSum += grid[i][j];
      }
      if (rowSum !== sum) return false;
    }

    // check every col
    for (let j = c; j < c + 3; j++) {
      let colSum = 0;
      for (let i = r; i < r + 3; i++) {
        colSum += grid[i][j];
      }
      if (colSum !== sum) return false;
    }

    // check diags
    const negDiag = grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2];
    const posDiag = grid[r + 2][c] + grid[r + 1][c + 1] + grid[r][c + 2];

    if (negDiag !== posDiag || negDiag !== sum) return false;

    return true;
  };

  let res = 0;

  for (let r = 0; r < rows - 2; r++) {
    for (let c = 0; c < cols - 2; c++) {
      if (checkSquare(r, c)) res += 1;
    }
  }

  return res;
};
