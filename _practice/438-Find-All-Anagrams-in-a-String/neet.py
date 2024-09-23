from collections import defaultdict
from typing import List


class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        if len(p) > len(s): return []

        pCount, sCount = defaultdict(int), defaultdict(int)
        for i in range(len(p)):
            pCount[p[i]] += 1
            sCount[s[i]] += 1

        res = [0] if sCount == pCount else []
        l = 0
        for r in range(len(p), len(s)):
            sCount[s[r]] += 1
            sCount[s[l]] -= 1

            if sCount[s[l]] == 0:
                sCount.pop(s[l])    
            l += 1
            if sCount == pCount:
                res.append(l)    

        return res        