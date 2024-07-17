# total sam

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def delNodes(self, root, to_delete):
        to_delete = set(to_delete)
        if not root:
            return []

        res = []
        if root.val not in to_delete:
            res.append(root)

        def dfs(node):
            if not node:
                return
            oldLeft = node.left
            oldRight = node.right
            if oldLeft and oldLeft.val in to_delete:
                node.left = None
            if oldRight and oldRight.val in to_delete:
                node.right = None
            if node.val in to_delete:
                node.left = None
                node.right = None
                if oldLeft and oldLeft.val not in to_delete:
                    res.append(oldLeft)
                if oldRight and oldRight.val not in to_delete:
                    res.append(oldRight)
            dfs(oldLeft)                
            dfs(oldRight)                

        dfs(root)
        return res