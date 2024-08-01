/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const cache = {};

  const helper = (i) => {
    if (cache[i] !== undefined) return cache[i];
    if (i === s.length) return true;
    for (const w of wordDict) {
      if (s.slice(i).startsWith(w) && helper(i + w.length)) {
        cache[i] = true;
        return true;
      }
    }
    cache[i] = false;
    return false;
  };

  return helper(0);
};
