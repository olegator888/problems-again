class Solution:
    def maxProduct(self, nums) -> int:
        res, curMin, curMax = nums[0], 1, 1

        for n in nums:
            tmp = n * curMax
            curMax = max(n, curMin * n, curMax * n)
            curMin = min(n, curMin * n, tmp)
            res = max(res, curMax)

        return res
        