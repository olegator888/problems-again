// total sam

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];

  const generate = (open, close, cur) => {
    if (cur.length === n * 2) {
      if (open === close) {
        res.push(cur);
      }
      return;
    }

    generate(open + 1, close, cur + "(");
    if (close < open) {
      generate(open, close + 1, cur + ")");
    }
  };

  generate(0, 0, "");

  return res;
};
