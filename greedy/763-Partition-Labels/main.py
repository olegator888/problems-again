# total sam

class Solution:
    def partitionLabels(self, s: str):
        last_idx = defaultdict(int)

        parts = []

        for i in range(len(s)):
            last_idx[s[i]] = i

        for i in range(len(s)):
            cur_char_last_idx = last_idx[s[i]]

            if not parts or i > parts[-1]:
                parts.append(cur_char_last_idx)

            parts[-1] = max(parts[-1], cur_char_last_idx)            

        return [n + 1 if i == 0 else n - parts[i - 1] for i, n in enumerate(parts)]
        