# total sam

class Solution:
    def averageWaitingTime(self, customers):
        sum_times = 0
        last = customers[0][0]

        for arrive, time in customers:
            sum_times += max(last - arrive, 0) + time
            last = max(arrive, last) + time

        return sum_times / len(customers)