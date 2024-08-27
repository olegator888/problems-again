# total sam

class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        if len(hand) % groupSize: return False

        cnt = Counter(hand)
        hand.sort()

        def group_cards(last):
            group = 1
            cnt[last] -= 1

            while group < groupSize:
                next_card = last + 1
                cnt[next_card] -= 1

                if cnt[next_card] < 0: 
                    return False

                group += 1
                last = next_card    

            return True

        for n in hand:
            if cnt[n] and not group_cards(n):
                return False

        return True        