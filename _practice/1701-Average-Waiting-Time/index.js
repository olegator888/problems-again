/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
  let sum_times = 0;
  let last = customers[0][0];

  for (const [arrive, time] of customers) {
    sum_times += Math.max(last - arrive, 0) + time;
    last = Math.max(last, arrive) + time;
  }

  return sum_times / customers.length;
};
