class Solution:
    def countSeniors(self, details: List[str]) -> int:
        res = 0
        for item in details:
            if int(item[11:13]) > 60:
                res += 1
        return res        