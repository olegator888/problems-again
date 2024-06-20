# sam with hint

class Solution:
    def maxArea(self, height):
        res = 0

        l, r = 0, len(height) - 1
        while l < r:
            res = max(res, min(height[l], height[r]) * (r - l))
            if height[r] < height[l]:
                r -= 1
            else:
                l += 1    

        return res
        