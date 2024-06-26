/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const pair = position.map((pos, i) => [pos, speed[i]]);
  pair.sort((a, b) => b[0] - a[0]);

  const stack = [];

  for (const [p, s] of pair) {
    stack.push((target - p) / s);
    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
  }

  return stack.length;
};
