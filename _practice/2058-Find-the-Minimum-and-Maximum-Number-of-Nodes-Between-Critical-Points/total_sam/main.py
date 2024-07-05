# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def nodesBetweenCriticalPoints(self, head):
        i, first, last, minDist, prev = 1, 0, 0, float("inf"), head.val
        head = head.next
        while head and head.next:
            if (prev < head.val > head.next.val) or (prev > head.val < head.next.val):
                if not first:
                    first = i
                if first and last:
                    minDist = min(minDist, i - last)
                last = i        
            i += 1
            prev = head.val
            head = head.next

        if not first or not last or first == last:
            return [-1, -1]    

        return [minDist, last - first]