# total sam

class Solution:
    def restoreMatrix(self, rowSum, colSum):
        rows, cols = len(rowSum), len(colSum)
        matrix = []

        for r in range(rows):
            row = []
            for c in range(cols):
                val = min(rowSum[r], colSum[c])
                row.append(val)
                rowSum[r] -= val
                colSum[c] -= val
            matrix.append(row)    

        return matrix