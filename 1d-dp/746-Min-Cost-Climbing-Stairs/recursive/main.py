# total sam

class Solution:
    def minCostClimbingStairs(self, cost) -> int:
      cache = {}

      def dfs(i):
          if i in cache: return cache[i]
          if i == len(cost): return 0
          if i > len(cost): return float("inf")
          res = cost[i] + min(dfs(i + 1), dfs(i + 2))
          cache[i] = res
          return res
         
      return min(dfs(0), dfs(1))
        