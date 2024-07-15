# total sam

from collections import defaultdict

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def createBinaryTree(self, descriptions):
        mp = {}
        nodes = defaultdict(int)

        for parent, child, isLeft in descriptions:
            if parent not in mp:
              nodes[parent] = 0
            nodes[child] += 1
            node = mp[parent] if parent in mp else TreeNode(parent)
            mp[parent] = node
            childNode = mp[child] if child in mp else TreeNode(child)
            mp[child] = childNode
            if isLeft:
              node.left = childNode
            else:
              node.right = childNode 

        root = None
        for key in nodes.keys():
           if nodes[key] == 0:
              root = key     

        return mp[root]