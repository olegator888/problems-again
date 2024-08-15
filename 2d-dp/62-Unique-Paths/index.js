// total sam

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const cache = {};

  const key = (r, c) => `${r}_${c}`;

  const dfs = (r, c) => {
    if (cache[key(r, c)] !== undefined) return cache[key(r, c)];
    if (r == m || c == n) return 0;
    if (r === m - 1 && c === n - 1) return 1;
    const res = dfs(r + 1, c) + dfs(r, c + 1);
    cache[key(r, c)] = res;
    return res;
  }

  return dfs(0, 0);
};