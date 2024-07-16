# total sam

class Node:
    def __init__(self) -> None:
        self.end = False
        self.children = {}

class WordDictionary:

    def __init__(self):
        self.tree = Node()

    def addWord(self, word: str) -> None:
        cur = self.tree
        i = 0
        while i < len(word):
            if word[i] not in cur.children:
                cur.children[word[i]] = Node()
            cur = cur.children[word[i]]    
            if i == len(word) - 1:
                cur.end = True
            i += 1

    def search(self, word: str) -> bool:
        def dfs(i, cur): 
            if i == len(word):
                return cur.end
            if word[i] != "." and word[i] not in cur.children:
                return False
            
            if word[i] == ".":
                res = False
                for c in cur.children.keys():
                    res = res or dfs(i + 1, cur.children[c])
                return res

            return dfs(i + 1, cur.children[word[i]])    
            
        return dfs(0, self.tree)    