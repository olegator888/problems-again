/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function (nums, k) {
  const q = [];

  let flips = 0;

  for (let i = 0; i < nums.length; i++) {
    while (q.length > 0 && i > q[0] + k - 1) {
      q.shift();
    }

    if ((nums[i] + q.length) % 2 === 0) {
      if (i + k > nums.length) {
        return -1;
      }
      flips += 1;
      q.push(i);
    }
  }

  return flips;
};
