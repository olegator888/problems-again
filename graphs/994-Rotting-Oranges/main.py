# total sam

from collections import deque

class Solution:
    def orangesRotting(self, grid) -> int:
        time = 0
        rows, cols = len(grid), len(grid[0])
        fresh_cnt = 0
        rotten = deque()
        visit = set()

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 2:
                    rotten.append((r, c))
                    visit.add((r, c))
                elif grid[r][c] == 1:
                    fresh_cnt += 1    

        if not fresh_cnt:
            return 0
        
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

        while rotten:  
            time += 1
            for _ in range(len(rotten)):
              r, c = rotten.popleft()
              for dr, dc in directions:
                  row, col = r + dr, c + dc
                  if row < 0 or row == rows or col < 0 or col == cols or (row, col) in visit or grid[row][col] == 0:
                      continue
                  rotten.append((row, col))
                  visit.add((row, col))
                  fresh_cnt -= 1

        if fresh_cnt == 0:
            return time - 1
        
        return -1
        