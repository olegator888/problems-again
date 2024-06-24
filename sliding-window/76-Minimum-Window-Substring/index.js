/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const tCount = {};
  let invalidLetters = 0;
  for (const c of t) {
    if (!tCount[c]) {
      invalidLetters += 1;
    }
    tCount[c] = (tCount[c] || 0) + 1;
  }
  let res = [0, 0];
  let minLen = Infinity;
  let l = 0;
  const windowCount = {};

  for (let r = 0; r < s.length; r++) {
    windowCount[s[r]] = (windowCount[s[r]] || 0) + 1;
    if (windowCount[s[r]] === tCount[s[r]]) {
      invalidLetters -= 1;
    }

    while (l < s.length && invalidLetters === 0) {
      if (r - l + 1 < minLen) {
        minLen = r - l + 1;
        res = [l, r + 1];
      }

      windowCount[s[l]] -= 1;
      if (tCount[s[l]] && windowCount[s[l]] < tCount[s[l]]) {
        invalidLetters += 1;
      }
      l += 1;
    }
  }

  return s.slice(res[0], res[1]);
};
