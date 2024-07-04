# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def mergeNodes(self, head):
        head = head.next
        tail = head
        while tail:
            cur = tail
            while cur.next.val != 0:
                tail.val += cur.next.val
                cur = cur.next
            tail.next = cur.next.next
            tail = tail.next          

        return head