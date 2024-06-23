from collections import defaultdict

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        longest = 0
        l = 0
        cnt = defaultdict(int)
        max_freq = 0

        for r in range(len(s)):
            cnt[s[r]] += 1
            max_freq = max(max_freq, cnt[s[r]])
            while r - l + 1 - max_freq > k:
                cnt[s[l]] -= 1
                l += 1
            longest = max(longest, r - l + 1)    

        return longest