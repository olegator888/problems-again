/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const cache = {};
  const getKey = (i, j) => `${i}_${j}`;

  const dfs = (i, j) => {
    const key = getKey(i, j);
    if (j === t.length) return 1; // this line must go before next line!!!
    if (i === s.length) return 0;
    if (cache[key] !== undefined) return cache[key];

    // try next char at string s in any case
    cache[key] = dfs(i + 1, j);

    // in case when current characters are equal
    // we can also try next t character
    if (s[i] === t[j]) {
      cache[key] += dfs(i + 1, j + 1);
    }

    return cache[key];
  };

  return dfs(0, 0);
};
