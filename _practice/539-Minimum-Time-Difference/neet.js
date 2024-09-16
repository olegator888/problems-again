// total sam

var findMinDifference = function (timePoints) {
  const toMinutes = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  timePoints.sort((a, b) => toMinutes(a) - toMinutes(b));

  // initialize result with time difference of first and last points if we go counter clockwise
  // this will be the only case we need to compute counter clockwise difference
  let res =
    24 * 60 -
    toMinutes(timePoints[timePoints.length - 1]) +
    toMinutes(timePoints[0]);

  for (let i = 0; i < timePoints.length - 1; i++) {
    const cur = toMinutes(timePoints[i + 1]);
    const prev = toMinutes(timePoints[i]);
    res = Math.min(res, cur - prev);
  }

  return res;
};
