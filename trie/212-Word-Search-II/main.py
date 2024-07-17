# sam

class Node:
    def __init__(self):
        self.end = False
        self.children = {}

class Trie:
    def __init__(self):
        self.trie = Node()

    def insert(self, word: str) -> None:
        cur = self.trie
        for c in word:
            if c not in cur.children:
                cur.children[c] = Node()
            cur = cur.children[c]    
        cur.end = True   

class Solution:
    def findWords(self, board, words):
        rows, cols = len(board), len(board[0])
        trie = Trie()
        for w in words:
            trie.insert(w)
          
        directions = [(-1, 0), (0, -1), (1, 0), (0, 1)]  
        res = set()
        visit = set()

        def dfs(r, c, cur, curWord):    
            if cur.end:
                res.add(curWord)
            if r < 0 or r == rows or c < 0 or c == cols or board[r][c] not in cur.children or (r, c) in visit:
                return 
            visit.add((r, c))                   
            for dr, dc in directions:
                dfs(r + dr, c + dc, cur.children[board[r][c]], curWord + board[r][c])
            visit.remove((r, c))       

        for r in range(rows):
            for c in range(cols):
                dfs(r, c, trie.trie, "")

        return list(res)
        