# total sam

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if not s:
            return 0

        longest = 1
        l = 0
        cnt = defaultdict(int)

        for r in range(len(s)):
            cnt[s[r]] += 1
            while l < len(s) and cnt[s[r]] > 1:
                cnt[s[l]] -= 1
                l += 1
            longest = max(longest, r - l + 1)    

        return longest