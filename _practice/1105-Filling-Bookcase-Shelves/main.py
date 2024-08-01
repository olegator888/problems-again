class Solution:
    def minHeightShelves(self, books, shelfWidth: int) -> int:
        cache = {}

        def helper(i):
            if i in cache: return cache[i]
            if i == len(books):
                return 0
            
            cur_width = shelfWidth
            max_height = 0
            res = float("inf")
            for j in range(i, len(books)):
                width, height = books[j]
                if cur_width < width:
                    break
                cur_width -= width
                max_height = max(max_height, height)
                res = min(
                    res,
                    helper(j + 1) + max_height
                )
            cache[i] = res    
            return res

        return helper(0)    
