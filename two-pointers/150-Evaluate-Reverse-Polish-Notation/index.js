/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (const token of tokens) {
    switch (token) {
      case "+":
        stack.push(stack.pop() + stack.pop());
        break;
      case "*":
        stack.push(stack.pop() * stack.pop());
        break;
      case "-":
        stack.push(-1 * (stack.pop() - stack.pop()));
        break;
      case "/":
        stack.push(Math.trunc(1 / (stack.pop() / stack.pop())));
        break;
      default:
        stack.push(+token);
    }
  }

  return stack[0];
};
