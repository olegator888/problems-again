var findCheapestPrice = function(n, flights, src, dst, k) {
    let prices = Array(n).fill(Infinity);
    prices[src] = 0;

    for (let i = 0; i < k + 1; i++) {
      const tmpPrices = [...prices];

      for (const [s, d, p] of flights) {
        if (prices[s] + p < tmpPrices[d]) {
          tmpPrices[d] = prices[s] + p;
        }
      }

      prices = tmpPrices;
    }

    return prices[dst] < Infinity ? prices[dst] : -1;
};