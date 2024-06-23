# total sam

from collections import defaultdict, Counter

class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        """
        we need to count window letters

        if window contains letter that s1 does not contain
        this window can not contain any permutation of s1
        so we need to shift left pointer 
        l = r + 1
        r = l

        if there is letter in window with count > s1 count
        we need to shift left pointer until this letter window count
        is greater than s1 count

        if window length == s1 length return True

        in the end of the function return False
        """

        s1_cnt = Counter(s1)
        l = 0
        cnt = defaultdict(int)
        
        for r in range(len(s2)):
            if s2[r] not in s1_cnt:
                l = r + 1
                cnt = defaultdict(int)
                continue

            cnt[s2[r]] += 1
            while cnt[s2[r]] > s1_cnt[s2[r]]:
                cnt[s2[l]] -= 1
                l += 1
    
            if r - l + 1 == len(s1):
                return True

        return False     
