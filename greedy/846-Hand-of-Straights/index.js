// total sam

var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) return false;

  const cnt = {};
  for (const n of hand) {
    cnt[n] = (cnt[n] || 0) + 1;
  }

  hand.sort((a, b) => a - b);

  const group_cards = (last) => {
    let group = 1;
    cnt[last] -= 1;

    while (group < groupSize) {
      const next = last + 1;
      if (!cnt[next]) return false;
      cnt[next] -= 1;
      group += 1;
      last = next;
    }

    return true;
  };

  for (const n of hand) {
    if (cnt[n] && !group_cards(n)) return false;
  }

  return true;
};
