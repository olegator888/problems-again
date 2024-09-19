/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  const operations = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
  };

  const backtrack = (left, right) => {
    const res = [];

    for (let i = left; i < right + 1; i++) {
      const token = expression[i];

      if (token in operations) {
        const nums1 = backtrack(left, i - 1);
        const nums2 = backtrack(i + 1, right);
        for (const n1 of nums1) {
          for (const n2 of nums2) {
            res.push(operations[token](n1, n2));
          }
        }
      }
    }

    if (res.length === 0) {
      res.push(Number(expression.slice(left, right + 1)));
    }

    return res;
  };

  return backtrack(0, expression.length - 1);
};
