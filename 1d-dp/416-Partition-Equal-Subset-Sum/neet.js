/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const half = nums.reduce((acc, cur) => acc + cur, 0) / 2;

  // if there exists subset with sum === half  -> return true

  if (half === 0) return true;

  let set = new Set([0]);

  for (const n of nums) {
    const newSet = new Set(set);
    set.forEach(item => {
      newSet.add(n + item);
      newSet.add(n);
    })
    set = newSet;
    if (set.has(half)) return true;
  }

  return false;
};