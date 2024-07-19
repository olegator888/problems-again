// total sam

var luckyNumbers = function (matrix) {
  const rowsMins = [];
  for (const row of matrix) {
    rowsMins.push(Math.min(...row));
  }

  const res = [];

  for (let c = 0; c < matrix[0].length; c++) {
    let maxVal = -Infinity;
    let maxValIdx = 0;
    for (let r = 0; r < matrix.length; r++) {
      if (matrix[r][c] > maxVal) {
        maxVal = matrix[r][c];
        maxValIdx = r;
      }
    }
    if (maxValIdx < matrix.length && rowsMins[maxValIdx] === maxVal) {
      res.push(maxVal);
    }
  }

  return res;
};
