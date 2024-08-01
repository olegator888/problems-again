class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        cache = {}

        def helper(i):
            if i == len(s): return True
            if i in cache: return cache[i]
            for w in wordDict:
                if s[i:].startswith(w) and helper(i + len(w)):
                    cache[i] = True
                    return True
            cache[i] = False        
            return False

        return helper(0)    