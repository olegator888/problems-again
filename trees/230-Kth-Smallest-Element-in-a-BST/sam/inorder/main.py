class Solution:
    def kthSmallest(self, root, k: int) -> int:
        nodes = []

        def dfs(node):
            if not node or len(nodes) == k:
                return

            dfs(node.left)
            nodes.append(node.val)
            dfs(node.right)

        dfs(root)

        return nodes[k - 1]        
        