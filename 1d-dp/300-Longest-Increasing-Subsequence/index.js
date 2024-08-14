// total sam

var lengthOfLIS = function(nums) {
  const dp = Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    let tmp = dp[i];
    for (let j = i - 1; j > -1; j--) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], tmp + dp[j]);
      }
    }
  }

  return Math.max(...dp);
};