class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        idx_mp = {}
        for i in range(len(nums)):
            idx_mp[nums[i]] = i
        for i in range(len(nums)):
            diff = target - nums[i]
            if diff in idx_mp and idx_mp[diff] != i:
                return [i, idx_mp[diff]]