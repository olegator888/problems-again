// total sam

var climbStairs = function(n) {
    const cache = {};

    const dfs = (level) => {
      if (cache[level]) return cache[level];
      if (level === n) return 1;
      if (level > n) return 0;

      const res = dfs(level + 1) + dfs(level + 2);
      cache[level] = res;
      return res;
    }

    return dfs(0);
};