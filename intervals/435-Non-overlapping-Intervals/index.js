// sam with little drawing

var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = null;
  let res = 0;

  for (const i of intervals) {
    if (prev && i[0] < prev[1]) {
      res += 1;
      if (prev[1] > i[1]) {
        prev = i;
      }
    } else {
      prev = i;
    }
  }

  return res;
};
