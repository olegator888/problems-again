/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const countPali = (l, r) => {
    let count = 0;
    while (l > -1 && r < s.length && s[l] === s[r]) {
      count += 1;
      l--;
      r++;
    }
    return count;
  };

  let res = 0;

  for (let i = 0; i < s.length; i++) {
    res += countPali(i, i) + countPali(i, i + 1);
  }

  return res;
};
