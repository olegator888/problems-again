// total sam

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visit = new Set();
  let islands = 0;

  const getPos = (r, c) => r * cols + c;

  const bfs = (r, c) => {
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    const q = [];
    q.push([r, c]);
    visit.add(getPos(r, c));

    while (q.length) {
      const [r, c] = q.shift();

      for (const [dr, dc] of directions) {
        const row = r + dr;
        const col = c + dc;
        if (
          row < 0 ||
          row === rows ||
          col < 0 ||
          col === cols ||
          grid[row][col] === "0" ||
          visit.has(getPos(row, col))
        ) {
          continue;
        }
        q.push([row, col]);
        visit.add(getPos(row, col));
      }
    }
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1" && !visit.has(getPos(r, c))) {
        islands += 1;
        bfs(r, c);
      }
    }
  }

  return islands;
};
