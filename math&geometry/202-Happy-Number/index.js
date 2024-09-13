// total sam

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // this process of converting number to sum of it's digits squares will always loop at some point
  // and this point will be either 1 or another number
  // if code ever riches point where number becomes 1 - return true
  // if code ever riches point where number becomes some value that already has been visited -  return false
  // example of converting 2 (will become 4 and start loop again)
  /*  2
        4
        16
        37
        58
        89
        145
        42
        20
        4
    */

  const visited = new Set();

  while (true) {
    n = String(n)
      .split("")
      .map(Number)
      .reduce((acc, cur) => acc + cur * cur, 0);
    if (n === 1) return true;
    if (visited.has(n)) return false;
    visited.add(n);
  }
};
