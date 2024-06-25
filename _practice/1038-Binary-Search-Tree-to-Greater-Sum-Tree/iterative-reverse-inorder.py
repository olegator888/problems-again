class Solution:
    def bstToGst(self, root: TreeNode) -> TreeNode:
        node_sum = 0
        stack = []
        node = root

        while stack or node is not None:
            while node is not None:
                stack.append(node)
                node = node.right

            node = stack.pop()     
            node_sum += node.val
            node.val = node_sum

            node = node.left

        return root