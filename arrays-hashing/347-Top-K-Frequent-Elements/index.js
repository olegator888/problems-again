/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const cnt = {};
  for (const n of nums) {
    cnt[n] = (cnt[n] || 0) + 1;
  }

  const freq = Array(nums.length + 1)
    .fill(null)
    .map(() => []);

  for (const n in cnt) {
    freq[cnt[n]].push(n);
  }

  const res = [];
  for (let i = freq.length - 1; i > -1; i--) {
    for (const n of freq[i]) {
      res.push(n);
      if (res.length === k) {
        return res;
      }
    }
  }

  return res;
};
