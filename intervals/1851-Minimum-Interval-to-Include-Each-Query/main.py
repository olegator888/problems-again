import heapq

class Solution:
    def minInterval(self, intervals, queries):
        queries = [(q, i) for i, q in enumerate(queries)]

        queries.sort()
        intervals.sort()

        res = [-1] * len(queries)
        minHeap = []
        i = 0 # current interval pointer

        for q, j in queries:
            while i < len(intervals) and intervals[i][0] <= q:
                start, end = intervals[i]
                heapq.heappush(minHeap, (end - start + 1, end))
                i += 1

            while minHeap and minHeap[0][1] < q:
                heapq.heappop(minHeap)

            if minHeap:
                res[j] = minHeap[0][0]

        return res                