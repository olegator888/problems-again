class Solution:
    def canBeEqual(self, target: List[int], arr: List[int]) -> bool:
        targetCnt = Counter(target)
        arrCnt = Counter(arr)
        for n in targetCnt:
            if n not in arrCnt or targetCnt[n] != arrCnt[n]:
                return False

        return True