# total sam

class Solution:
    def rob(self, nums) -> int:
      cache = {}

      def dfs(i):
        if i in cache: return cache[i]
        if i >= len(nums): return 0
        res = max(nums[i] + dfs(i + 2), dfs(i + 1))
        cache[i] = res
        return res
      
      return dfs(0)
        