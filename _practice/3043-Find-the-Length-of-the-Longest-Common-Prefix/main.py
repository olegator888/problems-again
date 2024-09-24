# total sam 1st try!!!!!!!!!!!!!!!

from typing import List

class Trie:
    def __init__(self) -> None:
        self.children = {}

    def insert(self, word):
        cur = self    
        for c in word:
            if c not in cur.children:
                cur.children[c] = Trie()
            cur = cur.children[c]

    def getPrefixLen(self, word):
        cur = self
        res = 0
        for c in word:
            if c not in cur.children:
                break
            res += 1
            cur = cur.children[c]
        return res            

class Solution:
    def longestCommonPrefix(self, arr1: List[int], arr2: List[int]) -> int:
        trie = Trie()
        for n in arr1:
            trie.insert(str(n))

        res = 0
        for n in arr2:
            res = max(res, trie.getPrefixLen(str(n)))

        return res    