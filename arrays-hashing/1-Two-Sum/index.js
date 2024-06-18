/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const prev_map = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const diff = target - n;
    if (prev_map[diff] !== undefined) {
      return [i, prev_map[diff]];
    }
    prev_map[n] = i;
  }
};
