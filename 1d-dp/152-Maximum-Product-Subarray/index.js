/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let res = nums[0],
    curMin = nums[0],
    curMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    let tmp = n * curMax;
    curMax = Math.max(curMin * n, n, curMax * n);
    curMin = Math.min(tmp, n, curMin * n);
    res = Math.max(res, curMax);
  }

  return res;
};
