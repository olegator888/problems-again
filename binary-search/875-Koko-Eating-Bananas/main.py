# sam with bit of help 

from typing import List
import math

class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        if len(piles) == h:
            return max(piles)

        def get_time(speed):
            res = 0

            for p in piles:
                res += math.ceil(p / speed)

            return res
        
        k = max(piles)
        
        l, r = 1, k
        while l <= r:
            m = (l + r) // 2
            eating_time = get_time(m)
            
            if eating_time <= h:
                k = m
                r = m - 1 
            else:    
                l = m + 1

        return k
    
s = Solution()
print(s.minEatingSpeed([312884470], 312884469))    