# total sam

class Solution:
    def solveNQueens(self, n: int):
        res = []
        solution = []
        queens_positions = set()

        def backtrack(r):
            if r == n:
                res.append(solution.copy())
                return
            for c in range(n):
                can_place = True
                item = ["."] * n
                for row, col in queens_positions:
                    if col == c or abs(r - row) == abs(c - col):
                        can_place = False
                        break    
                if can_place:
                    item[c] = "Q"
                    solution.append("".join(item))
                    queens_positions.add((r, c))
                    backtrack(r + 1)
                    queens_positions.remove((r, c))
                    solution.pop()

        backtrack(0)    

        return res    
    
s = Solution()
print(s.solveNQueens(4))    