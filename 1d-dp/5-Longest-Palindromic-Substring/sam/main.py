class Solution:
    def longestPalindrome(self, s: str) -> str:
        def getPaliLen(i):
            # odd lenth
            l = r = i
            while l > -1 and r < len(s) and s[l] == s[r]:
                l -= 1
                r += 1
            # even length    
            j, k = i, i + 1    
            while j > -1 and k < len(s) and s[j] == s[k]:
                j -= 1
                k += 1
            if r - l > k - j:    
                return s[l+1:r]
            return s[j+1:k]    

        res = ""
        for i in range(len(s)):
            pali = getPaliLen(i)
            if len(pali) > len(res):
                res = pali

        return res            
