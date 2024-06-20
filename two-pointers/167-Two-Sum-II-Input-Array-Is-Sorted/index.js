// total sam

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const total = numbers[l] + numbers[r];
    if (total > target) {
      r--;
    } else if (total < target) {
      l++;
    } else {
      return [l + 1, r + 1];
    }
  }
};
