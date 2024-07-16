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

    def search(self, word: str) -> bool:
        def dfs(i, cur):
            if i == len(word) or not cur or word[i] not in cur.children:
                return False    
            if i == len(word) - 1 and cur.children[word[i]].isEnd:
                return True
            return dfs(i + 1, cur.children[word[i]])
            
        return dfs(0, self.trie)    
        

    def startsWith(self, prefix: str) -> bool:
        def dfs(i, cur):
            if i == len(prefix) or not cur or prefix[i] not in cur.children:
                return False    
            if i == len(prefix) - 1:
                return True
            return dfs(i + 1, cur.children[prefix[i]])
            
        return dfs(0, self.trie) 
        


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)