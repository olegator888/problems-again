/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const getPali = (i) => {
    let l = i,
      r = i;
    while (l > -1 && r < s.length && s[l] === s[r]) {
      l -= 1;
      r += 1;
    }
    let j = i,
      k = i + 1;
    while (j > -1 && k < s.length && s[j] === s[k]) {
      j -= 1;
      k += 1;
    }
    if (r - l > k - j) {
      return s.slice(l + 1, r);
    }
    return s.slice(j + 1, k);
  };

  let res = "";

  for (let i = 0; i < s.length; i++) {
    const pali = getPali(i);
    if (pali.length > res.length) res = pali;
  }

  return res;
};
