# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def balanceBST(self, root: TreeNode) -> TreeNode:
        nodes = []
        def inorder(node):
            if not node: return
            inorder(node.left)
            nodes.append(node.val)
            inorder(node.right)
        inorder(root)

        def create_bst(l, r):
            if l > r: return None
            m = (l + r) // 2
            left = create_bst(l, m - 1)
            right = create_bst(m + 1, r)
            return TreeNode(nodes[m], left, right)

        return create_bst(0, len(nodes) - 1)    