class Solution:
    def stoneGameII(self, piles) -> int:
        cache = {}
        suffix_sum = piles[:]

        for i in range(len(suffix_sum) - 2, -1, -1):
            suffix_sum[i] += suffix_sum[i + 1]

        def helper(i, m) -> int:
          if i + 2 * m >= len(suffix_sum):
              return suffix_sum[i]

          if (i, m) in cache:
              return cache[(i, m)]
          
          res = float("inf")

          # Iterate through possible moves and calculate the minimum result for the opponent
          for j in range(1, 2 * m + 1):
              res = min(res, helper(i + j, max(j, m)))

          cache[(i, m)] = suffix_sum[i] - res
          return cache[(i, m)]

        return helper(0, 1)