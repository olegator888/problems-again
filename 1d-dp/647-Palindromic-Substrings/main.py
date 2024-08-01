class Solution:
    def countSubstrings(self, s: str) -> int:
        res = 0

        for i in range(len(s)):
            # odd lenth
            l = r = i
            while l > -1 and r < len(s) and s[l] == s[r]:
                res += 1
                l -= 1
                r += 1
            # even length    
            j, k = i, i + 1    
            while j > -1 and k < len(s) and s[j] == s[k]:
                res += 1
                j -= 1
                k += 1   

        return res  

