# sam with little bit of drawing

class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        if len(s1) + len(s2) != len(s3):
            return False

        cache = {}

        def helper(i1, i2):
            i3 = i1 + i2

            # both strings are finished
            if i1 == len(s1) and i2 == len(s2): 
                return True

            # one string is finished and another is not
            if i1 == len(s1) and i2 < len(s2):
                return s3[i3:] == s2[i2:]
            if i2 == len(s2) and i1 < len(s1):
                return s3[i3:] == s1[i1:]
            
            # characters are not the same
            if s1[i1] != s3[i3] and s2[i2] != s3[i3]:
                return False

            if (i1, i2) in cache:
                return cache[(i1, i2)]
            
            res = False
            if s1[i1] == s3[i3]:
                res = res or helper(i1 + 1, i2)

            if s2[i2] == s3[i3]:
                res = res or helper(i1, i2 + 1)    
            
            cache[(i1, i2)] = res
            return res

        return helper(0, 0)    
