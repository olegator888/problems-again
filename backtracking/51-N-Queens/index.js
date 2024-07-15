// sam

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const res = [];
  const solution = [];
  const posDiag = new Set();
  const negDiag = new Set();
  const cols = new Set();

  const backtrack = (r) => {
    if (r === n) {
      res.push([...solution]);
      return;
    }

    for (let c = 0; c < n; c++) {
      if (cols.has(c) || negDiag.has(r - c) || posDiag.has(r + c)) {
        continue;
      }

      const item = Array(n)
        .fill(null)
        .map((_, i) => (i === c ? "Q" : "."))
        .join("");
      cols.add(c);
      negDiag.add(r - c);
      posDiag.add(r + c);
      solution.push(item);
      backtrack(r + 1);
      cols.delete(c);
      negDiag.delete(r - c);
      posDiag.delete(r + c);
      solution.pop();
    }
  };

  backtrack(0);
  return res;
};
