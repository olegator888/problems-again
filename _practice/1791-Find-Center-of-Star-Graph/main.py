# total sam

from typing import List

class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        edges_cnt = defaultdict(int)
        for s, d in edges:
            edges_cnt[s] += 1
            edges_cnt[d] += 1
            if edges_cnt[s] == len(edges):
                return s
            if edges_cnt[d] == len(edges):
                return d    