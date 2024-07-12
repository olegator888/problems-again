class Solution:
    def maximumGain(self, s: str, x: int, y: int) -> int:
        values = {
            "ab": x,
            "ba": y
        }
        prior = "ab" if x > y else "ba"

        res = 0
        stack = []

        for c in s:
            if stack and stack[-1] + c == prior:
                res += values[prior]
                stack.pop()
                continue
            stack.append(c)    

        stack2 = []
        for c in stack:
            if stack2 and (stack2[-1] + c) in values:
                res += values[stack2[-1] + c]
                stack2.pop()
                continue
            stack2.append(c)

        return res
    
s = Solution()
print(s.maximumGain("cdbcbbaaabab", 4, 5))    