# solved total sam but it was ugly so refactored after watching neet

from typing import List

class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:
        l = 0
        satisfied, max_window, window = 0, 0, 0

        for r in range(len(customers)):
            if grumpy[r]:
                window += customers[r]
            else:
                satisfied += customers[r]
            if r - l + 1 > minutes:
                window -= grumpy[l] * customers[l]
                l += 1
            max_window = max(max_window, window)

        return satisfied + max_window