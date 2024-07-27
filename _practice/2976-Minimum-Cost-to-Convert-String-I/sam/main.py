from collections import defaultdict
import heapq

class Solution:
    def minimumCost(self, source: str, target: str, original, changed, cost) -> int:
        graph = defaultdict(list)
        for i in range(len(original)):
            graph[original[i]].append((cost[i], changed[i]))  

        cache = {}

        def get_letter_cost(src, tar):
            if (src, tar) in cache:
                return cache[(src, tar)]
            heap = [(0, src)]
            visit = set()
            while heap:
                node_cost, node = heapq.heappop(heap)
                if node == tar: 
                    cache[(src, tar)] = node_cost
                    return node_cost
                if node in visit:
                    continue
                visit.add(node)    
                for nei_cost, nei in graph[node]:
                    if nei not in visit:
                        heapq.heappush(heap, (node_cost + nei_cost, nei))
            return -1       

        res = 0
        for i in range(len(source)):
            cost = get_letter_cost(source[i], target[i])
            if cost == -1:
                return -1
            res += cost

        return res        
        