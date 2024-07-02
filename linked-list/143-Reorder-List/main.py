from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """

        """
        split in two halfs
        reverse second half
        two pointers: 1 half and 2 half
        """

        slow, fast = head, head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        half2 = slow.next
        prev = slow.next = None
        while half2:
            tmp = half2.next
            half2.next = prev
            prev = half2
            half2 = tmp

        half1, half2  = head, prev
        while half2:
            tmp1, tmp2 = half1.next, half2.next
            half1.next = half2
            half2.next = tmp1
            half1, half2 = tmp1, tmp2