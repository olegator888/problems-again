# sam with little drawing

class Solution:
    def eraseOverlapIntervals(self, intervals) -> int:
        intervals.sort()
        res, prev = 0, None

        for i in intervals:
            if prev and i[0] < prev[1]:
                res += 1
                if prev[1] > i[1]:
                    prev = i
            else:
                prev = i        

        return res