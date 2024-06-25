# total sam

class Solution:
    def isValid(self, s: str) -> bool:
        close_to_open = {
            ")": "(",
            "]": "[",
            "}": "{"
        }

        stack = []

        for i in range(len(s)):
            if s[i] not in close_to_open:
                stack.append(s[i])
                continue
            
            if not stack or stack[-1] != close_to_open[s[i]]:
                return False
            
            stack.pop()

        return len(stack) == 0