class Solution:
    def numTeams(self, rating) -> int:
        res = 0

        for i in range(len(rating)):
            smaller_left = 0
            larger_right = 0
            for j in range(len(rating)):
                if j < i and rating[j] < rating[i]:
                    smaller_left += 1
                if j > i and rating[j] > rating[i]:
                    larger_right += 1
            larger_left = i - smaller_left
            smaller_right = len(rating) - i - larger_right - 1
            res += smaller_left * larger_right + larger_left * smaller_right         

        return res