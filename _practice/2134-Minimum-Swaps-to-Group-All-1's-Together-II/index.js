/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
  const onesAmount = nums.reduce((acc, cur) => acc + cur, 0);
  nums.push(...nums);

  let l = 0;
  let r = onesAmount - 1;
  let minSwaps = nums
    .slice(l, onesAmount)
    .reduce((acc, cur) => acc + (cur === 0 ? 1 : 0), 0);
  let lastSwaps = minSwaps;

  while (r < nums.length) {
    if (r + 1 < nums.length && nums[l] === 0) lastSwaps--;
    l += 1;
    r += 1;
    if (nums[r] === 0) lastSwaps++;
    minSwaps = Math.min(minSwaps, lastSwaps);
  }

  return minSwaps;
};
