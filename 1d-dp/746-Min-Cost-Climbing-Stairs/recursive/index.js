// total sam

var minCostClimbingStairs = function (cost) {
  const cache = {};
  const dfs = (i) => {
    if (cache[i]) return cache[i];
    if (i === cost.length) return 0;
    if (i > cost.length) return Infinity;
    const res = cost[i] + Math.min(dfs(i + 1), dfs(i + 2));
    cache[i] = res;
    return res;
  };

  return Math.min(dfs(0), dfs(1));
};
