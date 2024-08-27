/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [];
  for (const i of intervals) {
    if (res.length > 0 && i[0] <= res[res.length - 1][1]) {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], i[1]);
    } else {
      res.push(i);
    }
  }
  return res;
};
