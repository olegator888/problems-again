/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
  const remove_pairs = (pair, score) => {
    let res = 0;
    const stack = [];

    for (const c of s) {
      if (
        c === pair[1] &&
        stack.length > 0 &&
        stack[stack.length - 1] === pair[0]
      ) {
        stack.pop();
        res += score;
      } else {
        stack.push(c);
      }
    }

    s = stack.join("");

    return res;
  };

  let res = 0;
  const pair = x > y ? "ab" : "ba";
  res += remove_pairs(pair, Math.max(x, y));
  res += remove_pairs(pair === "ab" ? "ba" : "ab", Math.min(x, y));

  return res;
};
