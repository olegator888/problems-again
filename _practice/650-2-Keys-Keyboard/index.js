/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    if (n === 1) return 0;

    const cache = {};
    const key = (count, paste) => `${count}_${paste}`;

    const helper = (count, paste) => {
      if (count === n) return 0;
      if (count > n) return Infinity;
      if (cache[key(count, paste)] !== undefined) return cache[key(count, paste)];

      const res = Math.min(
        // paste
        1 + helper(count + paste, paste),
        // copy and paste
        2 + helper(count * 2, count)
      )
      cache[key(count, paste)] = res;
      return res;
    }

    return 1 + helper(1, 1);
};