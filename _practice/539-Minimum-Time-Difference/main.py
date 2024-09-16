# total sam

class Solution:
    def findMinDifference(self, timePoints) -> int:
        def convertToMinutes(time):
            hours = int(time[0:2])
            minutes = int(time[3:])
            return hours * 60 + minutes
        
        times = [convertToMinutes(time) for time in timePoints]
        times.sort()
        times.append(times[0]) # handle circle

        res = float("inf")

        max_time = 24 * 60

        for i in range(len(times) - 1):
            res = min(
                res, 
                # not goings through 00:00
                abs(times[i + 1] - times[i]), 
                # going through 00:00
                # using minmax to handle circle
                max_time - max(times[i + 1], times[i]) + min(times[i], times[i + 1])
              )

        return res    