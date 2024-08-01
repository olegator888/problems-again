class Solution:
    def numDecodings(self, s: str) -> int:
        cache = {}

        def dfs(i):
            if i in cache:
                return cache[i]
            if i == len(s):
                return 1
            if i > len(s) or s[i] == "0": 
                return 0    

            res = dfs(i + 1)   
            if i + 1 < len(s) and int(s[i:i+2]) in range(1, 27):
                res += dfs(i + 2)

            cache[i] = res    

            return res

        return dfs(0)    
