/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = nums[0];
  let total = 0;

  for (const n of nums) {
    total += n;
    res = Math.max(res, total);
    if (total < 0) total = 0;
  }

  return res;
};
