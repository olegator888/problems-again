// total sam

var rob = function (nums) {
  const dp = Array(nums.length + 2).fill(0);
  for (let i = nums.length - 1; i > -1; i--) {
    dp[i] = Math.max(nums[i] + dp[i + 2], dp[i + 1]);
  }
  return dp[0];
};
