/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  const isPali = (r) => {
    let l = 0;
    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++;
      r--;
    }
    return true;
  };

  for (let r = s.length - 1; r > -1; r--) {
    if (isPali(r)) {
      const suffix = s.slice(r + 1);
      return suffix.split("").reverse().join("") + s;
    }
  }

  return "";
};
