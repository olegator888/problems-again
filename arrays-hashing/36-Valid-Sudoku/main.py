# total sam

from typing import List

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        n = 9

        for r in range(n):
            items = set()
            for c in range(n):
                if board[r][c] == ".":
                    continue
                if board[r][c] in items:
                    return False
                items.add(board[r][c])

        for c in range(n):
            items = set()
            for r in range(n):
                if board[r][c] == ".":
                    continue
                if board[r][c] in items:
                    return False
                items.add(board[r][c])

        for r_g in range(3, n + 1, 3):
            for c_g in range(3, n + 1, 3):
                items = set()
                for r in range(r_g - 3, r_g):
                    for c in range(c_g - 3, c_g):
                        if board[r][c] == ".":
                            continue
                        if board[r][c] in items:
                            return False
                        items.add(board[r][c])

        return True