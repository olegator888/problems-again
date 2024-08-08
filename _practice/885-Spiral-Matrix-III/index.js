// sam

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let curDir = 0;

  let r = rStart,
    c = cStart;

  let k = 1;

  const res = [[rStart, cStart]];

  const move = () => {
    r += directions[curDir][0];
    c += directions[curDir][1];
    if (r >= 0 && r < rows && c >= 0 && c < cols) {
      res.push([r, c]);
    }
  };

  while (res.length < rows * cols) {
    for (let i = 0; i < k; i++) {
      move();
    }

    curDir += 1;

    for (let i = 0; i < k; i++) {
      move();
    }

    k += 1;
    curDir += 1;

    if (curDir === 4) curDir = 0;
  }

  return res;
};
