# total sam

import math
import heapq

class Solution:
    def kClosest(self, points, k: int):
        points = [(math.sqrt(x * x + y * y), x, y) for x, y in points]
        heapq.heapify(points)
        res = []
        while k:
            _, x, y = heapq.heappop(points)
            res.append([x, y])
            k -= 1
        return res    
