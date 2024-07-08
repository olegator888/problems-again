class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        friends = [True] * n
        still_in_game = n

        steps = k
        current = 0

        while still_in_game > 1:
            while steps:
                if friends[current]:
                    steps -= 1
                if steps:
                    if current < n - 1:
                        current += 1    
                    else:
                        current = 0  

            friends[current] = False
            steps = k
            still_in_game -= 1

        return friends.index(True) + 1                