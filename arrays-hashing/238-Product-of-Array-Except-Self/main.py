# class Solution:
#     def productExceptSelf(self, nums: List[int]) -> List[int]:
#         prefix, suffix = [1] * len(nums), [1] * len(nums)

#         for i in range(1, len(nums)):
#             prefix[i] = nums[i - 1] * prefix[i - 1]

#         for i in range(len(nums) - 2, -1, -1):
#             suffix[i] = suffix[i + 1] * nums[i + 1]    

#         ans = []

#         for i in range(len(nums)):
#             ans.append(prefix[i] * suffix[i])

#         return ans   

# o(1) memory
class Solution:
    def productExceptSelf(self, nums):
        ans = [1] * len(nums)
        for i in range(1, len(nums)):
            ans[i] = ans[i - 1] * nums[i - 1]

        suffix = nums[-1]
        for i in range(len(nums) - 2, -1, -1):
            ans[i] *= suffix
            suffix *= nums[i]

        return ans