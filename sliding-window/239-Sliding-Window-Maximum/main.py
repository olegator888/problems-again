# total sam )

from typing import List
import heapq

class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        maxH = []
        for i in range(k):
            heapq.heappush(maxH, (-nums[i], i))    

        res = [-1 * maxH[0][0]]

        for r in range(k, len(nums)):
            heapq.heappush(maxH, (-nums[r], r))  

            while maxH and maxH[0][1] < r - k + 1:
                heapq.heappop(maxH)

            res.append(-1 * maxH[0][0])    

        return res