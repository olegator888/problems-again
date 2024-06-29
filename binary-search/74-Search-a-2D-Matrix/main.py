# total sam

from typing import List

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        # 1 - find row that could contain target
        # 2 - search through row
        
        m, n = len(matrix), len(matrix[0])

        row = None
        b, t = 0, m - 1
        while b <= t:
            m = (b + t) // 2
            if target < matrix[m][0]:
                t = m - 1
            elif target > matrix[m][-1]:
                b = m + 1
            else:
                row = matrix[m]  
                break      

        if not row:
            return False

        l, r = 0, n - 1
        while l <= r:
            m = (l + r) // 2
            if target < row[m]:
                r = m - 1
            elif target > row[m]:
                l = m + 1
            else:
                return True        

        return False