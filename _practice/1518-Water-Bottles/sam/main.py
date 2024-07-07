class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        res = 0

        while numBottles:
            if numBottles >= numExchange:
                newBottles = numBottles // numExchange
                res += newBottles * numExchange
                numBottles = numBottles - newBottles * numExchange + newBottles
            else:
                res += numBottles
                numBottles = 0    

        return res