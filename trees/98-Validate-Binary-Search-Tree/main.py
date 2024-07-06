# total sam!!!!))))))))))))))))

class Solution:
    def isValidBST(self, root) -> bool:
        def dfs(node, left, right):
            if not node: return True

            if not (node.val > left and node.val < right):
                return False
            
            return True and (dfs(node.left, left, min(right, node.val))) and (dfs(node.right, max(left, node.val), right))

        return dfs(root, float("-inf"), float("inf"))