# total sam

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root, subRoot) -> bool:
        if root and not subRoot:
            return True
        if not root:
            return not subRoot
        
        def isSameTree(p, q):
            if not p and not q:
                return True
            if not p or not q or p.val != q.val:
                return False
            return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)

        def dfs(node):
            if not node:
                return False
            return isSameTree(node, subRoot) or dfs(node.right) or dfs(node.left)

        return dfs(root)
        