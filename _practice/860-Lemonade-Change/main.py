# total sam

class Solution:
    def lemonadeChange(self, bills) -> bool:
        banknotes = [20, 10, 5]
        money = {i: 0 for i in banknotes}

        def get_change(change):
            nonlocal money
            new_money = money.copy()

            for bill in banknotes:
                while new_money[bill] and change >= bill:
                    change -= bill
                    new_money[bill] -= 1

            if change == 0: money = new_money

            return change == 0
        
        for bill in bills:
            change = bill - 5
            if not get_change(change): return False
            money[bill] += 1

        return True    