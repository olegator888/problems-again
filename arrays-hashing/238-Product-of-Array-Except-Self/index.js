/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const res = Array(nums.length).fill(1);

  for (let i = 1; i < res.length; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  let postfix = 1;
  for (let i = nums.length - 1; i > -1; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }

  return res;
};
