class MyCalendarTwo:

    def __init__(self):
        self.events = []
        self.overlapRegions = []

    def book(self, start: int, end: int) -> bool:
        for s, e in self.overlapRegions:
            if not (e <= start or end <= s):
                return False

        for s, e in self.events:
            if not (e <= start or end <= s):
                self.overlapRegions.append((max(start, s), min(end, e)))        
            
        self.events.append((start, end))
        return True        

# Your MyCalendarTwo object will be instantiated and called as such:
# obj = MyCalendarTwo()
# param_1 = obj.book(start,end)