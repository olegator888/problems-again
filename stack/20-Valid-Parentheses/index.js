// total sam

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const close_to_open = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!close_to_open[s[i]]) {
      stack.push(s[i]);
      continue;
    }

    if (stack.length === 0 || stack[stack.length - 1] !== close_to_open[s[i]]) {
      return false;
    }

    stack.pop();
  }

  return stack.length === 0;
};
