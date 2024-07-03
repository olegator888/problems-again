class Solution:
    def copyRandomList(self, head):
        oldToCopy = {None:None}
        curr = head
        while curr:
            oldToCopy[curr] = Node(curr.val)
            curr = curr.next

        curr = head
        while curr:
            oldToCopy[curr].next = oldToCopy[curr.next]    
            oldToCopy[curr].random = oldToCopy[curr.random]
            curr = curr.next

        return oldToCopy[head]        
