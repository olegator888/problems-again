# sam

class Solution:
    def minimumDeletions(self, s: str) -> int:
        prevB, nextA = 0, 0

        for i in range(1, len(s)):
            if s[i] == "a":
                nextA += 1

        res = nextA   

        for i in range(1, len(s)):
            if s[i - 1] == "b":
                prevB += 1
            if s[i] == "a":
                nextA = max(nextA - 1, 0)
            res = min(res, prevB + nextA)    
            
        return res 