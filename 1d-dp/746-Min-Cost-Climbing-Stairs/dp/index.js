// total sam

var minCostClimbingStairs = function (cost) {
  const dp = [...cost];
  dp.push(0, Infinity);
  for (let i = cost.length - 1; i > -1; i--) {
    dp[i] += Math.min(dp[i + 1], dp[i + 2]);
  }
  return Math.min(dp[0], dp[1]);
};
