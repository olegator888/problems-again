// total sam

/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  const substr = ["AB", "CD"];

  const stack = [];

  for (const c of s) {
    stack.push(c);
    if (
      stack.length > 1 &&
      substr.includes(stack[stack.length - 2] + stack[stack.length - 1])
    ) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length;
};
