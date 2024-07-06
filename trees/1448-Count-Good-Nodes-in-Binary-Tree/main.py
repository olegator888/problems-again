# total sam

class Solution:
    def goodNodes(self, root) -> int:
        def dfs(node, curMax):
            if not node: return 0
            newMax = max(curMax, node.val)
            return (1 if node.val >= curMax else 0) + dfs(node.left, newMax) + dfs(node.right, newMax)

        return dfs(root, root.val)    