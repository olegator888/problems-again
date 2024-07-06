class Solution:
    def maxPathSum(self, root) -> int:
        res = [root.val]
            
        def dfs(root):
            if not root:
                return 0
            leftMax = max(dfs(root.left), 0)
            rightMax = max(dfs(root.right), 0)

            # compute max path sum with split
            res[0] = max(res[0], root.val + leftMax + rightMax)

            return root.val + max(leftMax, rightMax)
        
        dfs(root)

        return res[0]