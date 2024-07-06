class Solution:
    def kthSmallest(self, root, k: int) -> int:
        heap = []

        def dfs(node):
            if not node: return
            heapq.heappush(heap, node.val)
            dfs(node.left)
            dfs(node.right)

        dfs(root)    
            
        res = None    
        while k > 0:
            res = heapq.heappop(heap)
            k -= 1
        return res    
        