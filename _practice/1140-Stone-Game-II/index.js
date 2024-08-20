/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
  const cache = {};
  const key = (i, m) => `${i}_${m}`;
  const suffix = [...piles];
  for (let i = piles.length - 2; i > -1; i--) {
    suffix[i] += suffix[i + 1];
  }

  const helper = (i, m) => {
    if (cache[key(i, m)] !== undefined) return cache[key(i, m)];
    if (i + m * 2 >= piles.length) return suffix[i];

    let res = Infinity;
    for (let j = 1; j < m * 2 + 1; j++) {
      res = Math.min(res, helper(i + j, Math.max(m, j)));
    }

    cache[key(i, m)] = suffix[i] - res;
    return cache[key(i, m)];
  };

  return helper(0, 1);
};
