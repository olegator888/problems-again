import heapq
from collections import Counter, deque

class Solution:
    def leastInterval(self, tasks, n: int) -> int:
        cnt = Counter(tasks)
        heap = [-n for n in cnt.values()]
        heapq.heapify(heap)
        q = deque()
        time = 0

        while heap or q:
            time += 1

            if not heap:
                time = q[0][1]
            else:
                cnt = 1 + heapq.heappop(heap)
                if cnt:
                    q.append([cnt, time + n])        
            if q and time == q[0][1]:
                heapq.heappush(heap, q.popleft()[0])        

        return time    