// total sam

var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  const helper = (nums) => {
    const dp = Array(nums.length + 2).fill(0);
    for (let i = nums.length - 1; i > -1; i--) {
      dp[i] = Math.max(nums[i] + dp[i + 2], dp[i + 1]);
    }
    return Math.max(dp[0], dp[1]);
  };

  return Math.max(
    helper(nums.slice(0, nums.length - 1)),
    helper(nums.slice(1, nums.length))
  );
};
