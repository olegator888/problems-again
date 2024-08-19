// total sam

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const cache = {};
    const key = (i, canSell) => `${i}_${canSell}`;

    const dfs = (i, canSell) => {
        if (cache[key(i, canSell)] !== undefined) return cache[key(i, canSell)];
        if (i >= prices.length) return 0;

        if (canSell) {
            const res = Math.max(
                // skip
                dfs(i + 1, true),
                // sell
                dfs(i + 2, false) + prices[i]
            )
            cache[key(i, canSell)] = res;
            return res;
        }

        const res = Math.max(
            // skip
            dfs(i + 1, false),
            // buy
            dfs(i + 1, true) - prices[i]
        );
        cache[key(i, canSell)] = res;
        return res;
    }

    return dfs(0, false);
};

console.log(maxProfit([1,2,4]))