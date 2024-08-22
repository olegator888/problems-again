# total sam 1st try

class Solution:
    def longestIncreasingPath(self, matrix) -> int:
        rows, cols = len(matrix), len(matrix[0])
        cache = {}

        def dfs(r, c, prev):
            if r < 0 or r == rows or c < 0 or c == cols or matrix[r][c] <= prev:
                return 0
            if (r, c) in cache:
                return cache[(r, c)]
            cache[(r, c)] = 1 + max(
                dfs(r + 1, c, matrix[r][c]),
                dfs(r - 1, c, matrix[r][c]),
                dfs(r, c + 1, matrix[r][c]),
                dfs(r, c - 1, matrix[r][c])
            )
            return cache[(r, c)]
        
        res = 1

        for r in range(rows):
            for c in range(cols):
                res = max(res, dfs(r, c, float("-inf")))

        return res
        