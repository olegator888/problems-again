# sam

from collections import defaultdict
import heapq

class Solution:
    def networkDelayTime(self, times, n: int, k: int) -> int:
        graph = defaultdict(list) # { (time, dest) }
        for u, v, w in times:
            graph[u].append((w, v))

        res = 0
        heap = [(0, k)]
        visit = set()

        while heap:
            time, node = heapq.heappop(heap)
            if node in visit: continue
            visit.add(node)
            res = time
            for nei_time, nei in graph[node]:
                if nei not in visit:
                    heapq.heappush(heap, (time + nei_time, nei))
 
        return res if len(visit) == n else -1   
