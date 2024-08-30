# total sam

class Solution:
    def countSubIslands(self, grid1, grid2) -> int:
        rows, cols = len(grid1), len(grid1[0])
        visit = set()
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

        def dfs(r, c):
            if r < 0 or r == rows or c < 0 or c == cols or grid2[r][c] == 0 or (r, c) in visit:
                return
            
            visit.add((r, c))
            for dr, dc in directions:
                dfs(r + dr, c + dc)
        
        res = 0
        
        # count grid2 islands
        for r in range(rows):
            for c in range(cols):
                if (r, c) not in visit and grid2[r][c] == 1:
                    dfs(r, c)
                    res += 1

        def remove_cells(r, c):
            if (r, c) not in visit: return
            visit.remove((r, c))
            for dr, dc in directions:
                remove_cells(r + dr, c + dc)    

        for r in range(rows):
            for c in range(cols):
                if grid1[r][c] == 0 and (r, c) in visit:
                    res -= 1
                    remove_cells(r, c)          

        return res            

        
        

        