/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
  const words = new Set(dictionary);

  const cache = {};

  const dfs = (i) => {
    if (i === s.length) return 0;
    if (cache.hasOwnProperty(i)) return cache[i];

    let res = 1 + dfs(i + 1);
    for (let j = i; j < s.length; j++) {
      const word = s.slice(i, j + 1);
      if (words.has(word)) {
        res = Math.min(res, dfs(j + 1));
      }
    }

    cache[i] = res;
    return res;
  };

  return dfs(0);
};
