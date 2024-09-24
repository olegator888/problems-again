// total sam, slow

var maxProfit = function (prices, fee) {
  const cache = {};
  const getKey = (i, canSell) => `${i}_${canSell}`;

  const backtrack = (i, canSell) => {
    const key = getKey(i, canSell);
    if (i === prices.length) return 0;
    if (cache.hasOwnProperty(key)) return cache[key];

    if (canSell) {
      cache[key] = Math.max(
        backtrack(i + 1, false) + prices[i] - fee, // sell
        backtrack(i + 1, true) // skip
      );
      return cache[key];
    } else {
      cache[key] = Math.max(
        backtrack(i + 1, true) - prices[i], // buy
        backtrack(i + 1, false) // skip
      );
      return cache[key];
    }
  };

  return backtrack(0, false);
};
