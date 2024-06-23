from typing import List

class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        if len(nums) < 2:
            return len(nums)

        longest = 0

        for i in range(len(nums)):
            curMin = nums[i]
            curMax = nums[i]
            for j in range(i + 1, len(nums)):
                if nums[j] < curMin:
                    curMin = nums[j]
                if nums[j] > curMax:
                    curMax = nums[j]
                diff = abs(curMax - curMin)        
                if diff <= limit:
                    longest = max(longest, j - i + 1)
                else:
                    break    

        return longest