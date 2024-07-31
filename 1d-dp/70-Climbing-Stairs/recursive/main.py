# total sam

class Solution:
    def climbStairs(self, n: int) -> int:
        cache = {}  

        def dfs(level):
            if level in cache:
                return cache[level]
            if level == n:
                return 1
            if level > n:
                return 0
            
            res = dfs(level + 1) + dfs(level + 2)
            cache[level] = res
            return res

        return dfs(0)    