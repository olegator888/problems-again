class Solution:
    def combinationSum2(self, candidates, target: int):
        res = []
        cur = []

        candidates.sort()

        def backtrack(i, total):
          if total == target:
             res.append(cur.copy())
             return
          if i == len(candidates) or total > target:
             return
          
          cur.append(candidates[i])
          backtrack(i + 1, total + candidates[i])
          cur.pop()
          while i + 1 < len(candidates) and candidates[i] == candidates[i + 1]:
             i += 1
          backtrack(i + 1, total)   

        backtrack(0, 0)
        return res