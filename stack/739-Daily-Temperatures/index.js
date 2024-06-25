// total sam

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const res = Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1][0] < temperatures[i]) {
      const [_, idx] = stack.pop();
      res[idx] = i - idx;
    }

    stack.push([temperatures[i], i]);
  }

  return res;
};
