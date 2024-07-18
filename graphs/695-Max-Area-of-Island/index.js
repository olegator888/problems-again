// total sam

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let res = 0;
  const visit = new Set();

  const getPos = (r, c) => r * cols + c;

  const dfs = (r, c) => {
    if (
      r < 0 ||
      c < 0 ||
      r === rows ||
      c === cols ||
      visit.has(getPos(r, c)) ||
      grid[r][c] === 0
    ) {
      return 0;
    }
    visit.add(getPos(r, c));
    return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c - 1) + dfs(r, c + 1);
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1 && !visit.has(getPos(r, c))) {
        res = Math.max(res, dfs(r, c));
      }
    }
  }

  return res;
};
