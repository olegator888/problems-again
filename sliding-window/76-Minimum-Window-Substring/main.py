from collections import Counter, defaultdict

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        minLen = float("inf")
        res = None
        tCount = Counter(t)
        cnt = defaultdict(int)

        def isValid(counter):
            for n in tCount:
                if counter[n] < tCount[n]:
                    return False
            return True    

        l = 0
        for r in range(len(s)):
            cnt[s[r]] += 1  

            while isValid(cnt):
                cnt[s[l]] -= 1
                l += 1    
                if (r - l + 1) < minLen:
                    minLen = r - l + 1
                    res = s[l:r]

            l = max(0, l - 1)           

        return res or ""
    
s = Solution()
print(s.minWindow("ADOBECODEBANC", "ABC"))    