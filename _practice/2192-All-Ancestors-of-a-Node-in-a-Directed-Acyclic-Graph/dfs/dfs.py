from typing import List
from collections import defaultdict

class Solution:
    def getAncestors(self, n: int, edges: List[List[int]]) -> List[List[int]]:
        res = [[] for _ in range(n)]
        graph = defaultdict(list)

        for s, d in edges:
            graph[s].append(d)

        def dfs(ancestor, current):    
            for nextNode in graph[current]:
                # check if node is already visited
                if (len(res[nextNode]) > 0 and res[nextNode][-1] == ancestor):
                    continue
                res[nextNode].append(ancestor)
                dfs(ancestor, nextNode)

        for i in range(n):
            dfs(i, i)    

        return res    