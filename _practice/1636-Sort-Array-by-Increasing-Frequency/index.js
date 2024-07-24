/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const count = {};
  for (const n of nums) {
    count[n] = (count[n] || 0) + 1;
  }
  const sortedKeys = Object.keys(count).sort((a, b) => {
    if (count[a] === count[b]) {
      return +b - +a;
    }

    return count[a] - count[b];
  });
  const res = [];
  for (const n of sortedKeys) {
    while (count[n]) {
      res.push(n);
      count[n]--;
    }
  }
  return res;
};
