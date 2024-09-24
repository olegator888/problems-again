/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
  const prefixSet = new Set();
  for (let n of arr1) {
    while (n && !prefixSet.has(n)) {
      prefixSet.add(n);
      n = Math.floor(n / 10);
    }
  }

  let res = 0;
  for (let n of arr2) {
    while (n && !prefixSet.has(n)) {
      n = Math.floor(n / 10);
    }
    if (n) res = Math.max(res, String(n).length);
  }

  return res;
};
