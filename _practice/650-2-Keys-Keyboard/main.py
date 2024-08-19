class Solution:
    def minSteps(self, n: int) -> int:
        if n == 1: return 0

        cache = {}

        def helper(count, paste):
            if count == n:
                return 0
            if count > n:
                return 1000
            if (count, paste) in cache: 
                return cache[(count, paste)]
            
            res = min(
                # paste
                1 + helper(count + paste, paste),   
                # copy & paste
                2 + helper(count * 2, count)
            )

            cache[(count, paste)] = res

            return res

        return 1 + helper(1, 1)        