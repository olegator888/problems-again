/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  nums = [1, ...nums, 1];

  const cache = {};
  const getKey = (l, r) => `${l}_${r}`;

  const dfs = (l, r) => {
    if (l > r) return 0;
    const key = getKey(l, r);
    if (cache[key] !== undefined) return cache[key];

    cache[key] = 0;
    for (let i = l; i < r + 1; i++) {
      cache[key] = Math.max(
        cache[key],
        nums[i] * nums[r + 1] * nums[l - 1] + dfs(l, i - 1) + dfs(i + 1, r)
      );
    }
    return cache[key];
  };

  return dfs(1, nums.length - 2);
};
