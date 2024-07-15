# total sam

class Solution:
    def subsetsWithDup(self, nums):
        res = []
        current = []

        nums.sort()

        def backtrack(i):
            if i == len(nums):
                res.append(current.copy())
                return
        
            current.append(nums[i])
            backtrack(i + 1)
            current.pop()
            while i < len(nums) - 1 and nums[i] == nums[i + 1]:
                i += 1
            backtrack(i + 1)

        backtrack(0)    

        return res