/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const stack = [];
  let res = 0;

  for (let i = 0; i < heights.length; i++) {
    let start = i;
    while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
      const [idx, h] = stack.pop();
      res = Math.max(res, h * (i - idx));
      start = idx;
    }

    stack.push([start, heights[i]]);
  }

  for (const [i, h] of stack) {
    res = Math.max(res, h * (heights.length - i));
  }

  return res;
};
