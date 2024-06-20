// sam with hint

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let res = 0;
  let l = 0;
  let r = height.length - 1;
  while (l < r) {
    res = Math.max(res, Math.min(height[l], height[r]) * (r - l));
    if (height[r] < height[l]) {
      r -= 1;
    } else {
      l += 1;
    }
  }

  return res;
};
