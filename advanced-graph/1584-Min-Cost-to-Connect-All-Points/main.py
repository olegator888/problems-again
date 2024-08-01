# total sam

from collections import defaultdict
import heapq

class Solution:
    def minCostConnectPoints(self, points) -> int:
        graph = defaultdict(list) # { i: (dist, idx) }
        for i in range(len(points)):
            xi, yi = points[i]
            for j in range(len(points)):
                xj, yj = points[j]
                graph[i].append((abs(xi - xj) + abs(yi - yj), j))

        heap = [(0, 0)] # (dist, idx)
        visit = set()
        res = 0
        while heap:
            dist, node = heapq.heappop(heap)
            if node in visit: continue
            visit.add(node)
            res += dist
            if len(visit) == len(points):
                return res
            for nei_dist, nei in graph[node]:
                if nei not in visit:
                    heapq.heappush(heap, (nei_dist, nei))


s = Solution()
print(s.minCostConnectPoints([[3,12],[-2,5],[-4,1]]))                

        