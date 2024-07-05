# total sam

class Solution:
    def lowestCommonAncestor(self, root, p, q):
        res = root
        maxDepth = 0

        def dfs(node, depth):
            nonlocal res
            nonlocal maxDepth

            if not node:
                return [False, False]
            
            left = dfs(node.left, depth + 1)
            right = dfs(node.right, depth + 1)
            item = [node.val == p.val or left[0] or right[0], node.val == q.val or left[1] or right[1]]
            if item[0] and item[1] and depth > maxDepth:
              maxDepth = depth
              res = node
            return item

        dfs(root, 1)    

        return res
        