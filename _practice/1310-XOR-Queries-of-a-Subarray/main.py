# total sam

from typing import List


class Solution:
    def xorQueries(self, arr: List[int], queries: List[List[int]]) -> List[int]:
        """
        to get prefix of [l, r] basically we need to prefix[r] ^ prefix[l - 1]
        but in this case if l == 0 we will get index error
        to solve this we can check if l == 0 then just res.append(prefix[r])
        but there is more concise way to do it - start prefix with 0 (x ^ 0 always gives x)
        and in the loop check r + 1, l instead of r, l - 1
        """


        prefix = [0] 
        for i in range(len(arr)):
            prefix.append(prefix[i] ^ arr[i])

        res = []

        for l, r in queries:
            res.append(prefix[r + 1] ^ prefix[l])   

        return res   