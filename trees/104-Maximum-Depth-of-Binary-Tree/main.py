# total sam

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root) -> int:
        res = 0
        def traverse(node, depth):
            nonlocal res
            if not node:
                return
            res = max(res, depth)
            traverse(node.left, depth + 1)
            traverse(node.right, depth + 1)

        traverse(root, 1)    
        
        return res
        