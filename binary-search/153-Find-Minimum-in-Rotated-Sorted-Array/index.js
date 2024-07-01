/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let res = Infinity;
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    res = Math.min(res, nums[m]);
    if (nums[m] > nums[r]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return res;
};
