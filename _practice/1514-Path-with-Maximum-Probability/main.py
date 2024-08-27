# total sam 1st try

class Solution:
    def maxProbability(self, n: int, edges, succProb, start_node: int, end_node: int) -> float:
        graph = defaultdict(list)
        for i in range(len(edges)):
            s, d = edges[i]
            graph[s].append([d, succProb[i]])
            graph[d].append([s, succProb[i]])

        visit = set()
        maxHeap = [[-1, start_node]]    

        while maxHeap:
            probability, node = heapq.heappop(maxHeap)

            if node == end_node:
                return probability * -1

            visit.add(node)
            
            for nei, neiProb in graph[node]:
                if nei in visit: continue
                heapq.heappush(maxHeap, [probability * neiProb, nei])
            
        return 0    





