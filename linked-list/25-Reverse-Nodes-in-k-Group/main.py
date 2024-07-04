# total sam

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head, k: int):
        nodes = []
        while head:
            nodes.append(head.val)
            head = head.next    
        for i in range(0, len(nodes) - k + 1, k):
            for j in range(math.ceil(k / 2)):
                tmp = nodes[i + j]
                nodes[i + j] = nodes[i + k - j - 1]
                nodes[i + k - j - 1] = tmp

        dummy = ListNode()
        cur = dummy      
        for node in nodes:
            cur.next = ListNode(node)
            cur = cur.next  
                
        return dummy.next
        