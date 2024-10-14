# total sam

import heapq
from math import ceil
from typing import List


class Solution:
    def maxKelements(self, nums: List[int], k: int) -> int:
        max_heap = [-n for n in nums]
        heapq.heapify(max_heap)

        score = 0

        for _ in range(k):
            largest = -heapq.heappop(max_heap)
            score += largest
            heapq.heappush(max_heap, -ceil(largest / 3))

        return score