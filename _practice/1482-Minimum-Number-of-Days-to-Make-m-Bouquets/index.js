const getNumOfBouqets = (bloomDay, mid, k) => {
  let res = 0;
  let count = 0;

  for (const day of bloomDay) {
    if (day <= mid) {
      count++;
    } else {
      count = 0;
    }

    if (count === k) {
      res += 1;
      count = 0;
    }
  }

  return res;
};

/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  if (m * k > bloomDay.length) return -1;

  let minDays = -1;
  let start = 0;
  let end = Math.max(...bloomDay);

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (getNumOfBouqets(bloomDay, mid, k) >= m) {
      minDays = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return minDays;
};
