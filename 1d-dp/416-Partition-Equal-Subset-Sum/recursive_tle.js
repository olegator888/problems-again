// total sam

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const half = nums.reduce((acc, cur) => acc + cur, 0) / 2;

  // if there exists subset with sum === half  -> return true

  nums.sort((a, b) => a - b);  

  const cache = {};
  const key = (i, left) => `${i}_${left}`;

  const dfs = (i, left) => {
    if (cache[key(i, left)] !== undefined) return cache[key(i, left)];
    if (left === 0) return true;
    if (i === nums.length || left < 0) return false;

    const res = 
    // include nums[i]
    dfs(i + 1, left - nums[i])
    // do not include nums[i]
    || dfs(i + 1, left);
    
    cache[key(i, left)] = res;
    return res;
  }

  return dfs(0, half)
};