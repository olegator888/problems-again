from typing import List

class Solution:
    def get_num_of_bouqets(self, bloomDay, mid, k):
        num_of_bouqets = 0
        count = 0

        for day in bloomDay:
            # if the flower is bloomed, add to the set. else reset the count.
            if day <= mid:
                count += 1
            else:
                count = 0

            if count == k:
                num_of_bouqets += 1
                count = 0

        return num_of_bouqets        

    def minDays(self, bloomDay: List[int], m: int, k: int) -> int:
        if m * k > len(bloomDay):
            return -1
        
        start = 0
        end = max(bloomDay)
        minDays = -1

        while start <= end:
            mid = (start + end) // 2

            if self.get_num_of_bouqets(bloomDay, mid, k) >= m:
                minDays = mid
                end = mid - 1
            else:
                start = mid + 1

        return minDays            
    

        
        
                