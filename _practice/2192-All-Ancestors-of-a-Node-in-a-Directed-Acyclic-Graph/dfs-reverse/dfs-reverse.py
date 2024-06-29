from typing import List
from collections import defaultdict

class Solution:
    def getAncestors(self, n: int, edges: List[List[int]]) -> List[List[int]]:
        res = [[] for i in range(n)]
        graph = defaultdict(list)
        for s, d in edges:
            graph[d].append(s)

        visited = set()

        def dfs(node):
            for nextNode in graph[node]:
                if nextNode not in visited:
                    dfs(nextNode)
                    visited.add(nextNode)

        for i in range(n):
            if i in graph:
                dfs(i)
                for j in range(n):
                    if j in visited:
                        res[i].append(j)
                visited.clear()        

        return res