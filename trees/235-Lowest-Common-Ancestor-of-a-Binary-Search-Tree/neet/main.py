class Solution:
    def lowestCommonAncestor(self, root, p, q):
        def dfs(node):
            if p.val < node.val > q.val:
                return dfs(node.left)
            if p.val > node.val < q.val:
                return dfs(node.right)

            return node   

        return dfs(root)
        