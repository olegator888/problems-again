// total sam

var change = function (amount, coins) {
  const cache = {};
  const key = (i, left) => `${i}_${left}`;

  const helper = (i, left) => {
    if (left < 0) return 0;
    if (left === 0) return 1;
    if (cache[key(i, left)] !== undefined) return cache[key(i, left)];
    let res = 0;
    for (let j = i; j < coins.length; j++) {
      res += helper(j, left - coins[j]);
    }
    cache[key(i, left)] = res;
    return res;
  };

  return helper(0, amount);
};
