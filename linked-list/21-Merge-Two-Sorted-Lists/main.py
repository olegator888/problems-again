# total sam

from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if not list1 and not list2:
            return None

        res = ListNode(0)
        cur = ListNode(0)
        res.next = cur

        while list1 or list2:
            if list1 and (not list2 or list1.val < list2.val):
              cur.val = list1.val
              list1 = list1.next
            elif list2 and (not list1 or list2.val <= list1.val):
              cur.val = list2.val
              list2 = list2.next  

            if list1 or list2:      
                cur.next = ListNode(-1)
                cur = cur.next

        return res.next