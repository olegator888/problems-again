class Solution:
    def myPow(self, x: float, n: int) -> float:
        power = abs(n)

        def helper(power):
            if power == 0:
                return 1
            if power == 1:
                return x
            if power == 2:
                return x * x        
            half = helper(power // 2)
            return half * half * (x if power % 2 == 1 else 1)
        
        res = helper(power)  
            
        if n < 0:
            return 1 / res
        return res   