/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const cache = {};
  const getKey = (i, j) => `${i}_${j}`;

  const dfs = (i, j) => {
    if (i >= s.length && j >= p.length) return true;
    if (j >= p.length) return false;
    const key = getKey(i, j);
    if (cache[key] !== undefined) return cache[key];

    const match = i < s.length && (s[i] == p[j] || p[j] === ".");

    if (p[j + 1] === "*") {
      cache[key] = dfs(i, j + 2) || (match && dfs(i + 1, j));
      return cache[key];
    }

    if (match) {
      cache[key] = dfs(i + 1, j + 1);
      return cache[key];
    }

    return false;
  };

  return dfs(0, 0);
};
