# total sam

class Solution:
    def rightSideView(self, root):
        if not root: return []

        q = deque()
        q.append(root)
        res = []

        while q:
            last_node = None
            for _ in range(len(q)):
                node = q.popleft()
                last_node = node.val
                if node.left: q.append(node.left)
                if node.right: q.append(node.right)
            res.append(last_node)    

        return res
        