/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const leftMax = Array(height.length).fill(0);
  const rightMax = Array(height.length).fill(0);
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    leftMax[i] = max;
    max = Math.max(max, height[i]);
  }
  max = 0;
  for (let i = height.length - 1; i > -1; i--) {
    rightMax[i] = max;
    max = Math.max(max, height[i]);
  }

  let water = 0;

  for (let i = 0; i < height.length; i++) {
    water += Math.max(0, Math.min(maxLeft[i], maxRight[i]) - height[i]);
  }

  return water;
};
