class Solution:
    def merge(self, intervals):
        intervals.sort()
        res = []
        for i in intervals:
            if res and i[0] <= res[-1][1]:
                res[-1][1] = max(res[-1][1], i[1])
            else:
                res.append(i)    
        return res
        