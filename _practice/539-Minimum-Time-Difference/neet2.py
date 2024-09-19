# bucket sort

class Solution:
    def findMinDifference(self, timePoints) -> int:
        def time_to_minutes(t):
            h, m = map(int, t.split(":"))
            return 60 * h + m
        
        exists = [False] * (60 * 24)

        for t in timePoints:
            m = time_to_minutes(t)

            if exists[m]:
                return 0
            
            exists[m] = True