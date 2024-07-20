// total sam

var restoreMatrix = function (rowSum, colSum) {
  const rows = rowSum.length;
  const cols = colSum.length;

  const matrix = [];

  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      const val = Math.min(rowSum[r], colSum[c]);
      row.push(val);
      rowSum[r] -= val;
      colSum[c] -= val;
    }
    matrix.push(row);
  }

  return matrix;
};
