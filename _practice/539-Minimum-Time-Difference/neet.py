# total sam

class Solution:
    def findMinDifference(self, timePoints) -> int:
        timePoints.sort()

        def time_to_minutes(t):
            h, m = map(int, t.split(":"))
            return 60 * h + m
        
        res = 24 * 60 - time_to_minutes(timePoints[-1]) + time_to_minutes(timePoints[0]) # compute circular distance between first and last points
        for i in range(len(timePoints) - 1):
            cur = time_to_minutes(timePoints[i + 1])            
            prev = time_to_minutes(timePoints[i])
            diff = cur - prev
            res = min(res, diff)

        return res    