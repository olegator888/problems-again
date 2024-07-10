class Solution:
    def combinationSum(self, candidates, target: int):
        res, cur = [], []

        def dfs(i, total):
            if total == target:
                res.append(cur.copy())
                return
            if i >= len(candidates) or total > target:
                return
            
            cur.append(candidates[i])
            dfs(i, total + candidates[i])
            cur.pop()
            dfs(i + 1, total)

        dfs(0, 0)
        return res    