class Solution:
    def findTargetSumWays(self, nums, target: int) -> int:
        cache = {}

        def helper(i, curSum):
            if i == len(nums):
                return 1 if curSum == target else 0
            if (i, curSum) in cache: return cache[(i, curSum)]
            cache[(i, curSum)] = helper(i + 1, curSum + nums[i]) + helper(i + 1, curSum - nums[i])
            return cache[(i, curSum)]
        
        return helper(0, 0)
        