# total sam

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root) -> bool:
        def dfs(node):
            if not node: return [0, True]

            lDepth, lBalanced = dfs(node.left)   
            rDepth, rBalanced = dfs(node.right)
            return [1 + max(lDepth, rDepth), abs(lDepth - rDepth) < 2 and lBalanced and rBalanced] 

        return dfs(root)[1]    
        