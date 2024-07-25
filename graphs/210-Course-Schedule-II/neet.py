from collections import defaultdict

class Solution:
    def findOrder(self, numCourses: int, prerequisites):
        prereq = defaultdict(list)
        for crs, pre in prerequisites:
            prereq[crs].append(pre)

        output = []
        visit, cycle = set(), set()
        def dfs(crs):
          if crs in cycle: return False
          if crs in visit: return True

          cycle.add(crs)
          for pre in prereq[crs]:
              if not dfs(pre): return False
          
          cycle.remove(crs)
          visit.add(crs)
          output.append(crs)
          return True

        for i in range(numCourses):
            if not dfs(i): return []
        
        return output
               
      