# total sam

class Solution:
    def rob(self, nums) -> int:
      if len(nums) == 1:
         return nums[0]

      def helper(nums):
        dp = [0] * (len(nums) + 2)
        for i in range(len(nums) - 1, -1, -1):
           dp[i] = max(nums[i] + dp[i + 2], dp[i + 1])
        return max(dp[0], dp[1])

      return max(helper(nums[:len(nums) - 1]), helper(nums[1:len(nums)]))
        