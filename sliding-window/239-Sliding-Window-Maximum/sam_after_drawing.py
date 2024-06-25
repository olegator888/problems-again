from typing import List
from collections import deque

class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        q = deque()
        for i in range(k):
            while q and q[-1][0] < nums[i]:
                q.pop()
            q.append([nums[i], i])

        res = [q[0][0]]    

        for r in range(k, len(nums)):
            while q and q[-1][0] < nums[r]:
                q.pop()

            q.append([nums[r], r])    

            while q and q[0][1] < r - k + 1:
                q.popleft()

            res.append(q[0][0])

        return res        