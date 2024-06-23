/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const s1Cnt = {};
  for (const c of s1) {
    s1Cnt[c] = (s1Cnt[c] || 0) + 1;
  }

  let cnt = {};
  l = 0;

  for (let r = 0; r < s2.length; r++) {
    if (!s1Cnt[s2[r]]) {
      l = r + 1;
      cnt = {};
      continue;
    }

    cnt[s2[r]] = (cnt[s2[r]] || 0) + 1;

    while (cnt[s2[r]] > s1Cnt[s2[r]]) {
      cnt[s2[l]] -= 1;
      l += 1;
    }

    if (r - l + 1 === s1.length) {
      return true;
    }
  }

  return false;
};
