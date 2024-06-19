class Solution:
    def longestConsecutive(self, nums) -> int:
        nums = set(nums)
        table = {}
        maxval = 0
        for num in nums:
            prev, next = num - 1, num + 1
            prevItemSequenceLength, nextItemSequenceLength = table.get(prev, 0), table.get(next, 0)
            curItemSequenceLength = prevItemSequenceLength + nextItemSequenceLength + 1
            table[num - prevItemSequenceLength] = curItemSequenceLength
            table[num + nextItemSequenceLength] = curItemSequenceLength
            maxval = max(maxval, curItemSequenceLength)
        return maxval
    

s = Solution()
print(s.longestConsecutive([100,4,200,1,3,2]))    


"""
[100,4,200,1,3,2]
{
100: 1
4: 2
200: 1
1: 1
3: 2
}
"""