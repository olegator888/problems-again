# total sam

class Solution:
    def exist(self, board, word: str) -> bool:
        m, n = len(board), len(board[0])
        visit = set()

        def backtrack(r, c, i):
            if i == len(word):
                return True
            if r < 0 or r == m or c < 0 or c == n or board[r][c] != word[i] or (r, c) in visit:
                return False

            visit.add((r, c))    
            res = backtrack(r + 1, c, i + 1) or backtrack(r - 1, c, i + 1) or backtrack(r, c + 1, i + 1) or backtrack(r, c - 1, i + 1)
            visit.remove((r, c))
            return res

        for r in range(m):
            for c in range(n):
                if backtrack(r, c, 0):
                    return True

        return False