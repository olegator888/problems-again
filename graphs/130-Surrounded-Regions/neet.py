class Solution:
    def solve(self, board) -> None:
        rows, cols = len(board), len(board[0])
          
        def capture(r, c):
            if r < 0 or c < 0 or r == rows or c == cols or board[r][c] != "O":
                return
            board[r][c] = "U"
            capture(r + 1, c)  
            capture(r - 1, c)  
            capture(r, c + 1)  
            capture(r, c - 1)     

        # 1 capture unsurrounded (o -> u)
        for r in range(rows):
            for c in range(cols):
                if board[r][c] == "O" and (r in [0, rows - 1] or c in [0, cols - 1]):
                    capture(r, c)

        # 2 mark surrounded as x and convert u back to o
        for r in range(rows):
            for c in range(cols):
                if board[r][c] == "O":
                    board[r][c] = "X"
                if board[r][c] == "U":
                    board[r][c] = "O"               
                    

        