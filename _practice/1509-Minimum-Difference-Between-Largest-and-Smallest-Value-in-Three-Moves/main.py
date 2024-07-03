class Solution:
    def minDifference(self, nums: List[int]) -> int:
        if len(nums) <= 4:
            return 0
        
        nums.sort()
          
        res = float("inf")  
        for left in range(4):
            right = len(nums) + left - 4
            res = min(res, nums[right] - nums[left])

        return res