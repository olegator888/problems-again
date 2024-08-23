# total sam

class Solution:
    def canJump(self, nums) -> bool:
        distance = 0
        for i in range(len(nums)):
            if distance >= i:
              distance = max(distance, i + nums[i])
        return distance >= len(nums) - 1      
        