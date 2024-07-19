class Solution:
    def luckyNumbers (self, matrix):
        rows, cols = len(matrix), len(matrix[0])

        max_of_row_mins = float("-inf")
        for r in range(rows):
            row_min = min(matrix[r])
            max_of_row_mins = max(max_of_row_mins, row_min)

        for c in range(cols):
            col_max = matrix[0][c]

            for r in range(rows):
                col_max = max(col_max, matrix[r][c])    
            if col_max == max_of_row_mins:
                return [col_max]    

        return []
