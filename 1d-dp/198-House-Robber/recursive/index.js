// total sam

var rob = function (nums) {
  const cache = {};

  const dfs = (i) => {
    if (cache[i] !== undefined) return cache[i];
    if (i >= nums.length) return 0;
    const res = Math.max(nums[i] + dfs(i + 2), dfs(i + 1));
    cache[i] = res;
    return res;
  };

  return dfs(0);
};
