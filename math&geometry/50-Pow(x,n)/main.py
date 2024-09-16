class Solution:
    def myPow(self, x: float, n: int) -> float:
        power = abs(n)
        res = 1

        while power > 0:
            res *= x
            power -= 1

        if n < 0:
            return 1 / res
        return res    
    
    # пока что tle 
    # возможно, стоит попробовать прыгать по 2
