# total sam

class Solution:
    def combinationSum(self, candidates, target: int):
        res = []
        combination = []

        def dfs(i, cur_sum):
            if cur_sum >= target:
                if cur_sum == target:
                    res.append(combination.copy())
                return    
            
            for j in range(i, len(candidates)):
                combination.append(candidates[j])
                dfs(j, cur_sum + candidates[j])
                combination.pop()

        for i in range(len(candidates)):
            combination.append(candidates[i])
            dfs(i, candidates[i])    
            combination.pop()

        return res    