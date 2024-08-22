# sam after neet drawing

class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        cache = {}

        def dfs(i, j):
            if i == len(word1) or j == len(word2):
                return max(len(word1) - i, len(word2) - j)
            if (i, j) in cache: return cache[(i, j)]
            
            if word1[i] == word2[j]:
                cache[(i, j)] = dfs(i + 1, j + 1)
            else:
                cache[(i, j)] = 1 + min(
                    dfs(i, j + 1), # insert
                    dfs(i + 1, j), # delete
                    dfs(i + 1, j + 1) # replace
                )    
            
            return cache[(i, j)]
        
        return dfs(0, 0)
            