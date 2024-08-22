// total sam

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const cache = {};
  const getKey = (i, curSum) => `${i}_${curSum}`;

  const helper = (i, curSum) => {
    const key = getKey(i, curSum);
    if (cache[key] !== undefined) return cache[key];
    if (i === nums.length) {
      return curSum === target ? 1 : 0;
    }

    cache[key] =
      helper(i + 1, curSum + nums[i]) + helper(i + 1, curSum - nums[i]);

    return cache[key];
  };

  return helper(0, 0);
};
