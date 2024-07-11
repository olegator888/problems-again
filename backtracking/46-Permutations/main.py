# total sam

class Solution:
    def permute(self, nums):
        res = []
        cur = []
        included_idx = set()

        def dfs():
            if len(cur) == len(nums):
               res.append(cur.copy()) 
               return

            for j in range(len(nums)):
                if j in included_idx: continue
                cur.append(nums[j])
                included_idx.add(j)
                dfs()
                included_idx.remove(j)
                cur.pop()    

        for i in range(len(nums)):
            included_idx.add(i)
            cur.append(nums[i])
            dfs()    
            included_idx.remove(i)
            cur.pop()

        return res