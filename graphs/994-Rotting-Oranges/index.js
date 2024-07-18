// total sam

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const pos = (r, c) => r * cols + c;

  let time = 0;
  let fresh = 0;
  const rotten = [];
  const visit = new Set();
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        rotten.push([r, c]);
        visit.add(pos(r, c));
      }
      if (grid[r][c] === 1) {
        fresh += 1;
      }
    }
  }

  if (!fresh) return 0;

  while (rotten.length) {
    const len = rotten.length;
    time += 1;
    for (let i = 0; i < len; i++) {
      const [r, c] = rotten.shift();
      for (const [dr, dc] of directions) {
        const row = r + dr;
        const col = c + dc;
        if (
          row < 0 ||
          row === rows ||
          col < 0 ||
          col === cols ||
          visit.has(pos(row, col)) ||
          grid[row][col] === 0
        ) {
          continue;
        }
        visit.add(pos(row, col));
        rotten.push([row, col]);
        fresh -= 1;
      }
    }
  }

  if (!fresh) return time - 1;

  return -1;
};
