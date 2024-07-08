from collections import deque

class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        friends = deque([i + 1 for i in range(n)])

        while len(friends) > 1:
            for _ in range(k - 1):
                friends.append(friends.popleft())
            friends.popleft()    

        return friends[0] 