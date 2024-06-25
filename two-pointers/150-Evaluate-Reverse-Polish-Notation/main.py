from typing import List

class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for token in tokens:
            if token == "+":
              stack.append(int(stack.pop()) + int(stack.pop()))
            elif token == "-":
              b, a = stack.pop(), stack.pop()
              stack.append(int(a) - int(b))
            elif token == "*":
              stack.append(int(stack.pop()) * int(stack.pop()))
            elif token == "/":
              b, a = stack.pop(), stack.pop()
              stack.append(int(a) / int(b))
            else:
                stack.append(int(token))              

        return int(stack[0])