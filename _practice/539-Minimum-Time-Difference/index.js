// total sam

var findMinDifference = function (timePoints) {
  const toMinutes = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  let times = timePoints.map(toMinutes);
  times.sort((a, b) => a - b);
  times.push(times[0]); // handle circle

  let res = Infinity;
  let MAX_TIME = 60 * 24; // max minutes in a day

  for (let i = 0; i < times.length - 1; i++) {
    res = Math.min(
      res,
      Math.abs(times[i] - times[i + 1]),
      MAX_TIME -
        Math.max(times[i], times[i + 1]) +
        Math.min(times[i], times[i + 1])
    );
  }

  return res;
};
