class Solution:
    def diffWaysToCompute(self, expression: str) -> List[int]:
        operations = {
            "+": lambda x, y: x + y,
            "-": lambda x, y: x - y,
            "*": lambda x, y: x * y,
        }

        def backtrack(left, right):
            res = []

            for i in range(left, right + 1):
                token = expression[i]
                if token in operations:
                    nums1 = backtrack(left, i - 1)
                    nums2 = backtrack(i + 1, right)

                    for n1 in nums1:
                        for n2 in nums2:
                            res.append(operations[token](n1, n2))

            # this code manages base case
            # if no items were pushed to res it means that res only includes 1 integer
            # here integer converting happens                           
            if len(res) == 0:
                res.append(int(expression[left:right+1]))

            return res
        
        return backtrack(0, len(expression) - 1)