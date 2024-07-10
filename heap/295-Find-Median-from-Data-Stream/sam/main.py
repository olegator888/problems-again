# total sam

import heapq

class MedianFinder:

    def __init__(self):
        self.left = [] # max heap
        self.right = [] # min heap

    def addNum(self, num: int) -> None:
        if not self.left or num < -self.left[0]:
            heapq.heappush(self.left, -num)
        else:
            heapq.heappush(self.right, num)    
        while self.left and self.right and -self.left[0] > self.right[0]:
            heapq.heappush(self.right, -heapq.heappop(self.left))        
        while len(self.right) - len(self.left) > 1:
            heapq.heappush(self.left, -heapq.heappop(self.right))        
        while len(self.left) - len(self.right) > 1:
            heapq.heappush(self.right, -heapq.heappop(self.left))        

    def findMedian(self) -> float:
        total_len = len(self.left) + len(self.right)
        if total_len % 2 == 0:
            return ((-self.left[0] if self.left else 0) + (self.right[0] if self.right else 0)) / 2
        if len(self.left) > len(self.right):
            return -self.left[0]
        return self.right[0]


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()