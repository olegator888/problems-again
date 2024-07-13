class Solution:
    def survivedRobotsHealths(self, positions, healths, directions: str):
        stack = []
        
        data = [(positions[i], directions[i], healths[i], i) for i in range(len(positions))]
        data.sort()

        for pos, dir, health, i in data:
            while stack and stack[-1][1] == "R" and dir == "L" and health:
                if stack[-1][2] > health:
                    stack[-1] = (stack[-1][0], stack[-1][1], stack[-1][2] - 1, stack[-1][3])
                    health = 0
                elif stack[-1][2] < health:
                    stack.pop()
                    health -= 1
                else:
                    stack.pop()
                    health = 0
            if health:        
                stack.append((pos, dir, health, i))          

        stack.sort(key=lambda item: item[3])          

        return [item[2] for item in stack]