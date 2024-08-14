class Solution:
    def canPartition(self, nums) -> bool:
        if sum(nums) % 2: return False

        dp = set([0])
        target = sum(nums) // 2

        for i in range(len(nums)):
            nextDP = set()
            for t in dp:
                nextDP.add(nums[i] + t)
                nextDP.add(t)
            dp = nextDP    

        return target in dp    