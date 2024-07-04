# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def mergeNodes(self, head):
        nodes = []
        cur = 0
        while head:
            if head.val == 0:
                if cur:
                    nodes.append(cur)
                cur = 0    
            cur += head.val
            head = head.next
        dummy = ListNode()
        cur = dummy
        for val in nodes:
            cur.next = ListNode(val)     
            cur = cur.next   
        return dummy.next