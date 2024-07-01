// total sam

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let row = null;

  let b = 0;
  let t = m - 1;
  while (b <= t) {
    const m = Math.floor((b + t) / 2);
    if (target < matrix[m][0]) {
      t = m - 1;
    } else if (target > matrix[m][matrix[m].length - 1]) {
      b = m + 1;
    } else {
      row = matrix[m];
      break;
    }
  }

  if (!row) return false;

  let l = 0;
  let r = n - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (target < row[m]) {
      r = m - 1;
    } else if (target > row[m]) {
      l = m + 1;
    } else {
      return true;
    }
  }

  return false;
};
