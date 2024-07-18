# sam with leetcode hints

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def countPairs(self, root: TreeNode, distance: int) -> int:
        res = 0  

        leaf_nodes = set()
        visit = set()

        def get_leaf_nodes(node):
            if not node:
                return
            if not node.left and not node.right:
                leaf_nodes.add(node)
                return
            if node.left:
                node.left.parent = node
            if node.right:
                node.right.parent = node    
            get_leaf_nodes(node.left)
            get_leaf_nodes(node.right)

        get_leaf_nodes(root)    

        def get_pairs(node, steps):
            nonlocal res
            if not node or node in visit or steps > distance:
                return
            if steps > 0 and node in leaf_nodes:
                res += 1
                return
            
            visit.add(node)

            get_pairs(node.left, steps + 1)
            get_pairs(node.right, steps + 1)
            if "parent" in node.__dict__.keys():
                get_pairs(node.parent, steps + 1)
            
            visit.remove(node)
        
        for node in leaf_nodes:
            get_pairs(node, 0)

        return res // 2