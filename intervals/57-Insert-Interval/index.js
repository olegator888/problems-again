// total sam 1st try

var insert = function (intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [];

  for (const interval of intervals) {
    if (res.length > 0 && interval[0] <= res[res.length - 1][1]) {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], interval[1]);
    } else {
      res.push(interval);
    }
  }

  return res;
};
