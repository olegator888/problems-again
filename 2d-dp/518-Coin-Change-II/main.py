class Solution:
    def change(self, amount: int, coins) -> int:
        cache = {}

        def helper(i, left):
            if left < 0: return 0
            if left == 0: return 1
            if (i, left) in cache: return cache[(i, left)]

            res = 0
            for j in range(i, len(coins)):
                res += helper(j, left - coins[j])

            cache[(i, left)] = res
            return res

        return helper(0, amount)
