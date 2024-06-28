# total sam

from typing import List

class Solution:
    def maximumImportance(self, n: int, roads: List[List[int]]) -> int:
        """
        the priority is: the more edges are connected to the node the bigger value it should receive

        1 count number of edges that each node has
        2 go in sorted order and give each node a value. the more edges the higher value
        3 traverse the graph and compute sum of all the edges
        """

        edges_cnt = [(0, i) for i in range(n)]
        for s, d in roads:
            edges_cnt[s] = (edges_cnt[s][0] + 1, edges_cnt[s][1])
            edges_cnt[d] = (edges_cnt[d][0] + 1, edges_cnt[d][1])

        edges_cnt.sort(reverse=True)  
        
        nodes_to_value = {}
        for i, (_, node) in enumerate(edges_cnt):
            nodes_to_value[node] = n - i

        res = 0

        for s, d in roads:
            res += nodes_to_value[s]
            res += nodes_to_value[d]

        return res
    
s = Solution()
print(s.maximumImportance(5, [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]))    