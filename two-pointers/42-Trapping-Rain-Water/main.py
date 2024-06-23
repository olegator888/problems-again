from typing import List

class Solution:
    def trap(self, height: List[int]) -> int:
        water = 0
        leftMax, rightMax = [0] * len(height), [0] * len(height)

        curMax = 0
        for i in range(len(height)):
            leftMax[i] = curMax
            curMax = max(curMax, height[i])
        curMax = 0
        for i in range(len(height) - 1, -1, -1):
            rightMax[i] = curMax
            curMax = max(curMax, height[i])   

        for i in range(len(height)):
            water += max(0, min(leftMax[i], rightMax[i]) - height[i])     

        return water