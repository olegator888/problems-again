# total sam

class Solution:
    def minLength(self, s: str) -> int:
        substr = ["AB", "CD"]
        stack = []

        for c in s:
            stack.append(c)
            if len(stack) > 1 and (stack[-2] + stack[-1]) in substr:
                stack.pop()
                stack.pop()

        return len(stack)        