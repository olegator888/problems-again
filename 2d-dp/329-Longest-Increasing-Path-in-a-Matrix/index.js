// total sam 1st try

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const rows = matrix.length,
    cols = matrix[0].length;
  const cache = {};

  const dfs = (r, c, prev) => {
    const key = r * cols + c;
    if (r < 0 || r === rows || c < 0 || c === cols || matrix[r][c] <= prev) {
      return 0;
    }
    if (cache[key] !== undefined) return cache[key];
    cache[key] =
      1 +
      Math.max(
        dfs(r + 1, c, matrix[r][c]),
        dfs(r - 1, c, matrix[r][c]),
        dfs(r, c + 1, matrix[r][c]),
        dfs(r, c - 1, matrix[r][c])
      );
    return cache[key];
  };

  let res = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      res = Math.max(res, dfs(r, c, -Infinity));
    }
  }

  return res;
};
