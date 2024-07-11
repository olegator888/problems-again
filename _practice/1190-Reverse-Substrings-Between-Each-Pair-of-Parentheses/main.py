# total sam

class Solution:
    def reverseParentheses(self, s: str) -> str:
        stack = []

        s = list(s)
        for i in range(len(s)):
            if s[i] == "(":
                stack.append(i)
            elif s[i] == ")":
                l, r = stack.pop() + 1, i - 1
                while l < r:
                    s[l], s[r] = s[r], s[l]
                    l += 1
                    r -= 1

        res = [c for c in s if c != "(" and c != ")"]

        return "".join(res)