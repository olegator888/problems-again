# total sam

from collections import deque


class Solution:
    def levelOrder(self, root):
        if not root:
            return []

        res = []
        q = deque()
        q.append(root)

        while q:
            level = []
            for _ in range(len(q)):
                node = q.popleft()
                level.append(node.val)
                if node.left:    
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            res.append(level)        

        return res