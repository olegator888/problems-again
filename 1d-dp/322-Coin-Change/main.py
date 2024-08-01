class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        cache = {}

        def helper(left):
            if left in cache: return cache[left]
            if left < 0: return float("inf")
            if left == 0: return 0
            res = float("inf")
            for c in coins:
                res = min(res, 1 + helper(left - c))
            cache[left] = res
            return res    

        res = helper(amount) 
        return res if res != float("inf") else -1