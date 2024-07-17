class Node:
    def __init__(self, isEnd=False):
        self.isEnd = isEnd
        self.children = {}

class Trie:
    def __init__(self):
        self.trie = Node()

    def insert(self, word: str) -> None:
        cur = self.trie
        i = 0
        while i < len(word):
            if word[i] not in cur.children:
                cur.children[word[i]] = Node(i == len(word) - 1)
            cur = cur.children[word[i]]    
            if i == len(word) - 1:
                cur.isEnd = True
            i += 1    

class Solution:
    def findWords(self, board, words):
        rows, cols = len(board), len(board[0])
        trie = Trie()
        for w in words:
            trie.insert(w)
          
        directions = [(-1, 0), (0, -1), (1, 0), (0, 1)]  
        res = []    

        def dfs(r, c, cur, curWord=""):    
            if r < 0 or r == rows or c < 0 or c == cols or board[r][c] not in cur.children:
                return
            if cur.end:
                res.append(curWord)
                return
            for dr, dc in directions:
                dfs(r + dr, c + dc, cur.children[board[r][c]], curWord + board[r][c])

        for r in range(rows):
            for c in range(cols):
                trie_copy = trie.trie
                dfs(r, c, trie_copy)

        return res
        