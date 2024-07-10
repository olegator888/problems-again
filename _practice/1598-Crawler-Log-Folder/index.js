/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let level = 0;

  for (const log of logs) {
    switch (log) {
      case "../":
        level = Math.max(level - 1, 0);
        break;
      case "./":
        continue;
      default:
        level += 1;
    }
  }

  return level;
};
