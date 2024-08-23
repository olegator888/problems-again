// total sam

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let distance = 0;
  for (let i = 0; i < nums.length; i++) {
    if (distance >= i) {
      distance = Math.max(distance, i + nums[i]);
    }
  }
  return distance >= nums.length - 1;
};
