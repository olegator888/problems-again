class Solution:
    def rangeSum(self, nums: List[int], n: int, left: int, right: int) -> int:
        newArr = []
        for i in range(len(nums)):
            cur = 0
            for j in range(i, len(nums)):
                cur += nums[j]
                newArr.append(cur)
        newArr.sort()
        
        res = 0
        for i in range(left - 1, right):
            res += newArr[i]

        return res % (pow(10, 9) + 7)