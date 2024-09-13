// total sam

var setZeroes = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const zero_rows = new Set();
  const zero_cols = new Set();

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 0) {
        zero_rows.add(r);
        zero_cols.add(c);
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (zero_rows.has(r) || zero_cols.has(c)) {
        matrix[r][c] = 0;
      }
    }
  }
};
