/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
  if (nums.length <= 4) return 0;

  nums.sort((a, b) => a - b);

  let res = Infinity;

  for (let left = 0; left < 4; left++) {
    const right = nums.length - 4 + left;
    res = Math.min(res, nums[right] - nums[left]);
  }

  return res;
};
