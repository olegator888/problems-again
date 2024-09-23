/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (s.length < p.length) return [];

  const windowCnt = {};
  const cnt = {};
  for (let i = 0; i < p.length; i++) {
    cnt[p[i]] = (cnt[p[i]] || 0) + 1;
    windowCnt[s[i]] = (windowCnt[s[i]] || 0) + 1;
  }

  const compare = () => {
    for (const key of Object.keys(cnt)) {
      if (cnt[key] !== windowCnt[key]) return false;
    }
    return true;
  };

  const res = [];

  if (compare()) res.push(0);

  let l = 0;

  for (let r = p.length; r < s.length; r++) {
    windowCnt[s[r]] = (windowCnt[s[r]] || 0) + 1;
    windowCnt[s[l]] -= 1;

    if (windowCnt[s[l]] === 0) delete windowCnt[s[l]];
    l++;
    if (compare()) res.push(l);
  }

  return res;
};
