# total sam 1st try

class Solution:
    def insert(self, intervals, newInterval):
        intervals.append(newInterval)
        intervals.sort()
        res = []
        for interval in intervals:
            if res and interval[0] <= res[-1][1]:
                res[-1][1] = max(res[-1][1], interval[1])
            else:
                res.append(interval)    
        return res
        