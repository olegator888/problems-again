# total sam )

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def bstToGst(self, root: TreeNode) -> TreeNode:
        nodes = [False] * 101

        def collect_nodes(node: TreeNode):
            if not node:
                return
            nodes[node.val] = True
            collect_nodes(node.left)
            collect_nodes(node.right)

        collect_nodes(root)    

        total = 0
        postfixes = [0] * 101
        for i in range(len(nodes) - 1, -1, -1):
            postfixes[i] = total
            if nodes[i]:
                total += i     

        def redefine_nodes(node):
            if not node:
                return
            node.val = node.val + postfixes[node.val]
            redefine_nodes(node.left)
            redefine_nodes(node.right)

        redefine_nodes(root)    

        return root