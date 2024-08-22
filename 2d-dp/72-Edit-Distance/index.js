/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const cache = {};
  const getKey = (i, j) => `${i}_${j}`;

  const dfs = (i, j) => {
    if (i === word1.length || j === word2.length) {
      return Math.max(word1.length - i, word2.length - j);
    }
    const key = getKey(i, j);
    if (cache[key] !== undefined) return cache[key];

    if (word1[i] === word2[j]) {
      cache[key] = dfs(i + 1, j + 1);
    } else {
      cache[key] =
        1 +
        Math.min(
          dfs(i, j + 1), // insert
          dfs(i + 1, j), // delete
          dfs(i + 1, j + 1) // replace
        );
    }

    return cache[key];
  };

  return dfs(0, 0);
};
