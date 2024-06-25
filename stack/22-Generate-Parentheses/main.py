# total sam

from typing import List

class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []
        
        def generate(open, close, cur):
            if len(cur) == n * 2:
                if open == n and close == n:
                    res.append(cur)
                return
            
            generate(open + 1, close, cur + "(")    
            if close < open:
                generate(open, close + 1, cur + ")")    
            
        generate(0, 0, "")    

        return res