# total sam

class Solution:
    def passThePillow(self, n: int, time: int) -> int:
        full_passes = time // (n - 1)
        moded = time % (n - 1)
        return n - moded if full_passes % 2 else moded + 1