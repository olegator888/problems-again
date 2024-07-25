from collections import defaultdict

class Solution:
    def findOrder(self, numCourses: int, prerequisites):
        graph = defaultdict(list)
        path, visit = set(), set()
        for crs, pre in prerequisites:
            graph[crs].append(pre)

        res = []    

        def top_sort(node):
            if node in path: return False
            if node in visit: return True

            visit.add(node)
            path.add(node)

            for child in graph[node]:
                if not top_sort(child):
                    return False

            path.remove(node)
            res.append(node)
            return True
        
        for i in range(numCourses):
            if not top_sort(i):
                return []

        return res
        