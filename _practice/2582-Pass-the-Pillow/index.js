// total sam

/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  const full_passes = Math.floor(time / (n - 1));
  const moded = time % (n - 1);
  return full_passes % 2 ? n - moded : moded + 1;
};
