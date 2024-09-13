# total sam

from typing import List


class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        carry = 0
        one = 1

        for i in range(len(digits) - 1, -1, -1):
            newDigit = digits[i] + carry + one
            digits[i] = newDigit % 10
            carry = 1 if newDigit > 9 else 0
            one = 0

        if carry:
            digits = [1] + digits

        return digits