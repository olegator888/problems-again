var change = function (amount, coins) {
  const cache = {};
  const getKey = (i, a) => `${i}_${a}`;

  const dfs = (i, a) => {
    const key = getKey(i, a);
    if (a === amount) return 1;
    if (a > amount || i === coins.length) return 0;
    if (cache[key] !== undefined) return cache[key];

    cache[key] = dfs(i, a + coins[i]) + dfs(i + 1, a);
    return cache[key];
  };

  return dfs(0, 0);
};
