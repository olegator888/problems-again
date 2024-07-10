class Solution:
    def minOperations(self, logs) -> int:
        level = 0

        for log in logs:
            if log == "../":
                level = max(level - 1, 0)
            elif log == "./":
                continue
            else:
                level += 1

        return level