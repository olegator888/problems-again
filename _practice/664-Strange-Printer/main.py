class Solution:
    def strangePrinter(self, s: str) -> int:
        # Preprocess the string to remove consecutive duplicate characters
        s = "".join(char for char, _ in itertools.groupby(s))

        memo = {}

        def helper(start, end) -> int:
            if start > end: return 0
            if (start, end) in memo: return memo[(start, end)]

            min_turns = 1 + helper(start + 1, end)

            # Try to optimize by finding matching characters
            for k in range(start + 1, end + 1):
                if s[k] == s[start]:
                    turns_with_match = helper(
                        start, k - 1
                    ) + helper(k + 1, end)
                    min_turns = min(min_turns, turns_with_match)

            memo[(start, end)] = min_turns
            return min_turns

        return helper(0, len(s) - 1)
