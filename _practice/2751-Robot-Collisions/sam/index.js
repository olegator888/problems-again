/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function (positions, healths, directions) {
  const data = [];
  for (let i = 0; i < positions.length; i++) {
    data.push([positions[i], directions[i], healths[i], i]);
  }
  data.sort((a, b) => a[0] - b[0]);

  const stack = [];

  for (let [pos, dir, health, i] of data) {
    while (
      stack.length > 0 &&
      stack[stack.length - 1][1] == "R" &&
      dir == "L" &&
      health > 0
    ) {
      if (stack[stack.length - 1][2] > health) {
        const last = stack[stack.length - 1];
        last[2] -= 1;
        stack[stack.length - 1] = last;
        health = 0;
      } else if (stack[stack.length - 1][2] < health) {
        health -= 1;
        stack.pop();
      } else {
        stack.pop();
        health = 0;
      }
    }

    if (health > 0) {
      stack.push([pos, dir, health, i]);
    }
  }

  return stack.sort((a, b) => a[3] - b[3]).map((item) => item[2]);
};
