# total sam

import heapq

class Solution:
    def swimInWater(self, grid) -> int:
        rows, cols = len(grid), len(grid[0])
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        heap = [(grid[0][0], 0, 0)]
        time = 0
        visit = set()

        while heap:
            while time < heap[0][0]:
                time += 1
                continue

            level, r, c = heapq.heappop(heap)
            time = max(time, level)
            if (r, c) in visit: continue
            visit.add((r, c))
            if r == rows - 1 and c == cols - 1:
                return time
            for dr, dc in directions:
                row, col = r + dr, c + dc
                if row in range(rows) and col in range(cols) and (row, col) not in visit:
                    heapq.heappush(heap, (grid[row][col], row, col)) 