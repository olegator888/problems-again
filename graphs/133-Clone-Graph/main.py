# TOTAL SAM

# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

from typing import Optional
class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if not node:
            return None
        
        graph = {}
        visit = set()

        def dfs(node):
            if node in visit:
                return
            
            visit.add(node)
            if node.val not in graph:
                graph[node.val] = Node(node.val)
            neighbors = []
            for nei in node.neighbors:
                if nei.val not in graph:
                    graph[nei.val] = Node(nei.val)
                neighbors.append(graph[nei.val])    
                dfs(nei)
            graph[node.val].neighbors = neighbors    
            return graph[node.val]
        
        return dfs(node)