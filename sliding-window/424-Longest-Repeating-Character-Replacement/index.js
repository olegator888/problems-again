/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let longest = 0;
  let l = 0;
  let cnt = {};
  let maxFreq = 0;

  for (let r = 0; r < s.length; r++) {
    cnt[s[r]] = (cnt[s[r]] || 0) + 1;
    maxFreq = Math.max(maxFreq, cnt[s[r]]);
    while (r - l + 1 - maxFreq > k) {
      cnt[s[l]] -= 1;
      l += 1;
    }
    longest = Math.max(longest, r - l + 1);
  }

  return longest;
};
