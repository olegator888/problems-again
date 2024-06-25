class Solution:
    def bstToGst(self, root):
        node_sum = [0]
        self.bst_to_gst_helper(root, node_sum)
        return root
    
    def bst_to_gst_helper(self, root, node_sum):
        if root is None:
            return 0
        
        self.bst_to_gst_helper(root.right, node_sum)
        node_sum[0] += root.val
        root.val = node_sum[0]
        self.bst_to_gst_helper(root.left, node_sum)
