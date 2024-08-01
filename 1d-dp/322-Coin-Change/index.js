var coinChange = function (coins, amount) {
  const cache = {};

  const helper = (left) => {
    if (cache[left]) return cache[left];
    if (left < 0) return Infinity;
    if (left === 0) return 0;

    let res = Infinity;
    for (const c of coins) {
      res = Math.min(res, 1 + helper(left - c));
    }
    cache[left] = res;
    return res;
  };

  const res = helper(amount);
  return res === Infinity ? -1 : res;
};
