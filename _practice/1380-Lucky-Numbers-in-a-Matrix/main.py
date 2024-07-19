# total sam

class Solution:
    def luckyNumbers (self, matrix):
        rows_mins = []
        res = []
        for row in matrix:
            rows_mins.append(min(row))
        for c in range(len(matrix[0])):
            max_val = float("-inf")
            max_val_idx = 0
            for r in range(len(matrix)):
                if matrix[r][c] > max_val:
                    max_val = matrix[r][c]
                    max_val_idx = r
            if max_val_idx < len(rows_mins) and rows_mins[max_val_idx] == max_val:
                res.append(max_val)
            
        return res    
