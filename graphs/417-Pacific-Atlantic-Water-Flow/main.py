class Solution:
    def pacificAtlantic(self, heights):
        rows, cols = len(heights), len(heights[0])
        pacific, atlantic = set(), set()
        res = []
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        visit = set()

        def dfs(r, c, prev, coords):
            if r < 0 or c < 0 or r == rows or c == cols or (r, c) in visit or heights[r][c] < prev:
                return
            coords.add((r, c))
            visit.add((r, c))
            for dr, dc in directions:
                dfs(r + dr, c + dc, heights[r][c], coords)
            visit.remove((r, c))

        # top bottom
        for c in range(cols):
            dfs(0, c, float("-inf"), pacific)
            dfs(rows - 1, c, float("-inf"), atlantic)

        # left right  
        for r in range(rows):
            dfs(r, 0, float("-inf"), pacific)
            dfs(r, cols - 1, float("-inf"), atlantic)    

        for item in pacific:
            if item in atlantic:
                res.append(item)

        return res
        