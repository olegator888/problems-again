class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        s_letters = len(s)
        cnt = Counter(s)
        for c in t:
            if c in cnt and cnt[c] > 0:
                cnt[c] -= 1
                s_letters -= 1

        return s_letters == 0
        