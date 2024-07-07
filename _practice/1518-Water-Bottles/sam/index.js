var numWaterBottles = function (numBottles, numExchange) {
  let res = 0;
  while (numBottles > 0) {
    if (numBottles >= numExchange) {
      const newBottles = Math.floor(numBottles / numExchange);
      res += newBottles * numExchange;
      numBottles = numBottles - newBottles * numExchange + newBottles;
    } else {
      res += numBottles;
      numBottles = 0;
    }
  }
  return res;
};
