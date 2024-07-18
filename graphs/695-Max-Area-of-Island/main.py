# total sam

class Solution:
    def maxAreaOfIsland(self, grid) -> int:
        res = 0
        rows, cols = len(grid), len(grid[0])
        visit = set()
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]  

        def dfs(r, c):
            nonlocal res
            if r < 0 or c < 0 or r == rows or c == cols or (r, c) in visit or grid[r][c] == 0:
                return 0
            
            visit.add((r, c))
            area = 1
            for dr, dc in directions:
                area += dfs(r + dr, c + dc)
            res = max(res, area)

            return area
        
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 1 and (r, c) not in visit:
                    dfs(r, c)

        return res
        