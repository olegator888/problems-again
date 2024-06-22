/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let l = 0;
  let m = 0;
  let odd = 0;
  let res = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] % 2) {
      odd += 1;
    }

    while (odd > k) {
      if (nums[l] % 2) {
        odd -= 1;
      }
      l += 1;
      m = l;
    }

    if (odd == k) {
      while (!(nums[m] % 2)) {
        m += 1;
      }
      res += m - l + 1;
    }
  }

  return res;
};
