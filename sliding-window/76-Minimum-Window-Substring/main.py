# total sam

from collections import Counter, defaultdict

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        """
        count only letters that are present in t
        keep track of amount of letters that we need to get correct amount
        amount of this letters is eqaul to 0 it means we have valid window and can shift left pointer
        shift left pointer until we have some letter with 0 count - this means window is invalid again
        while shifting we can update min length and result
        actually we can save left and right pointers to avoid slicing string every time and just slice it in the end
        """

        countT = Counter(t)
        window_cnt = defaultdict(int)

        x, y = 0, 0 # left and right borders of result substring
        min_len = float("inf")
        l = 0
        invalid_letters = len(countT.keys())

        for r in range(len(s)):
            window_cnt[s[r]] += 1
            if window_cnt[s[r]] == countT[s[r]]:
                invalid_letters -= 1

            while invalid_letters == 0 and l < len(s):
                if r - l + 1 < min_len:
                    min_len = r - l + 1
                    x = l
                    y = r + 1  
                window_cnt[s[l]] -= 1
                if s[l] in countT and window_cnt[s[l]] < countT[s[l]]:
                    invalid_letters += 1        
                l += 1    
        
        return s[x:y]