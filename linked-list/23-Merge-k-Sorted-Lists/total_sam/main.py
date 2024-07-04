# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists):
        nodes = []
        for list in lists:
            while list:
                nodes.append(list.val)
                list = list.next
        nodes.sort()
        dummy = ListNode()
        cur = dummy
        for node in nodes:
            cur.next = ListNode(node)
            cur = cur.next
        return dummy.next        
        