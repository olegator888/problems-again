# total sam

class Solution:
    def minCostClimbingStairs(self, cost) -> int:
      dp = [c for c in cost]
      dp.append(0)
      dp.append(float("inf"))
      for i in range(len(cost) - 1, -1, -1):
         dp[i] += min(dp[i + 1], dp[i + 2])
      return min(dp[0], dp[1])