class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        cache = {}

        def dfs(i, j):
            if i == len(s): return j == len(p) or j == len(p) - 1 and p[j] == "*"
            if j == len(p): return False
            if (i, j) in cache: return cache[(i, j)]

            res = False

            if p[j] == ".":
                res = dfs(i + 1, j + 1)
            
            elif p[j] == "*":
                # use prev char 0 times
                res = dfs(i, j + 1)

                # if prev char is valid - use it
                if p[j - 1] == s[i] or p[j - 1] == ".":
                    res = res or dfs(i + 1, j)

            else:
                if s[i] == p[j]: res = dfs(i + 1, j + 1)
                else: res = dfs(i, j + 1)    

            cache[(i, j)] = res        
            return res        

        return dfs(0, 0)    