class Solution:
    def change(self, amount: int, coins) -> int:
        cache = {}

        def dfs(i, a):
            if a == amount: return 1
            if a > amount or i == len(coins): return 0
            if (i, a) in cache: return cache[(i, a)]

            cache[(i, a)] = dfs(i, a + coins[i]) + dfs(i + 1, a)
            return cache[(i, a)]

        return dfs(0, 0)