# total sam :)

from typing import List
from collections import defaultdict
import heapq

class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        minH, maxH = [], []
        cnt = defaultdict(int)
        l, longest = 0, 0

        for r in range(len(nums)):
            heapq.heappush(minH, nums[r])
            heapq.heappush(maxH, -nums[r])
            cnt[nums[r]] += 1
            while -maxH[0] - minH[0] > limit:
                cnt[nums[l]] -= 1
                l += 1
                while cnt[-maxH[0]] == 0:
                    heapq.heappop(maxH)
                while cnt[minH[0]] == 0:
                    heapq.heappop(minH)    
            longest = max(longest, r - l + 1)        
        
        return longest