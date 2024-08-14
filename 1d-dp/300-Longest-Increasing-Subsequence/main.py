# total sam

class Solution:
    def lengthOfLIS(self, nums) -> int:
        dp = [1] * len(nums)

        for i in range(len(nums)):
            tmp = dp[i]
            for j in range(i - 1, -1, -1):
              if nums[j] < nums[i]:
                  dp[i] = max(dp[i], tmp + dp[j])

        return max(dp)          