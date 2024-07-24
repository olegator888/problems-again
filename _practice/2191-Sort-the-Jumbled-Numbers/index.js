/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function (mapping, nums) {
  const cache = {};

  const getNum = (n) => {
    const str = String(n);
    if (str in cache) {
      return cache[str];
    }
    let res = "";
    for (const c of str) {
      res += String(mapping[+c]);
    }
    cache[str] = Number(res);
    return Number(res);
  };

  return nums.sort((a, b) => getNum(a) - getNum(b));
};

sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6]);
