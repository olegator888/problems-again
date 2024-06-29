/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let k = Math.max(...piles);
  let l = 1;
  let r = k;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    let time = 0;
    for (const p of piles) {
      time += Math.ceil(p / m);
    }
    if (time <= h) {
      k = m;
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return k;
};
