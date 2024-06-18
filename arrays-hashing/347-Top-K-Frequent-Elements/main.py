class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        cnt = Counter(nums)
        freq = [[] for _ in range(len(nums) + 1)]      

        for n in cnt:
            freq[cnt[n]].append(n)

        res = []
        for i in range(len(freq) - 1, -1, -1):
            for n in freq[i]:
                res.append(n)
                if len(res) == k:
                    return res    
          