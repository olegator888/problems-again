/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  const n = prices.length;
  const buy = Array(n).fill(0);
  const sell = Array(n).fill(0);
  buy[0] = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    buy[i] = Math.max(buy[i - 1], sell[i - 1] - prices[i]);
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i] - fee);
  }

  return sell[n - 1];
};
