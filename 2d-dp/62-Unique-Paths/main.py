class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        cache = {}
        def dfs(r, c):
            if (r, c) in cache: return cache[(r, c)]
            if r == m or c == n: return 0
            if r == m - 1 and c == n - 1: return 1
            res = dfs(r + 1, c) + dfs(r, c + 1)
            cache[(r, c)] = res
            return res
        return dfs(0, 0)