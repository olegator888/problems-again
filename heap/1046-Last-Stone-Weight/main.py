import heapq

class Solution:
    def lastStoneWeight(self, stones) -> int:
        heap = [-1 * n for n in stones]
        heapq.heapify(heap)

        while len(heap) > 1:
            new_stone = abs(heapq.heappop(heap) - heapq.heappop(heap))
            if new_stone:
                heapq.heappush(heap, -1 * new_stone)

        if not heap: return 0

        return -1 * heap[0]   