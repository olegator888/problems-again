/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  let odd_cnt = 0;

  for (const n of arr) {
    if (n % 2) {
      odd_cnt += 1;
    } else {
      odd_cnt = 0;
    }

    if (odd_cnt === 3) {
      return true;
    }
  }

  return false;
};
