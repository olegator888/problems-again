// sam

var pacificAtlantic = function (heights) {
  const rows = heights.length;
  const cols = heights[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const atl = new Set();
  const pac = new Set();
  const res = [];

  const pos = (r, c) => `${r}_${c}`;

  const dfs = (r, c, prev, visit) => {
    if (
      r < 0 ||
      r === rows ||
      c < 0 ||
      c === cols ||
      heights[r][c] < prev ||
      visit.has(pos(r, c))
    ) {
      return;
    }

    visit.add(pos(r, c));
    for (const [dr, dc] of directions) {
      dfs(r + dr, c + dc, heights[r][c], visit);
    }
  };

  for (let c = 0; c < cols; c++) {
    dfs(0, c, -Infinity, pac);
    dfs(rows - 1, c, -Infinity, atl);
  }

  for (let r = 0; r < rows; r++) {
    dfs(r, 0, -Infinity, pac);
    dfs(r, cols - 1, -Infinity, atl);
  }

  atl.forEach((coord) => {
    if (pac.has(coord)) {
      res.push(coord.split("_"));
    }
  });

  return res;
};
