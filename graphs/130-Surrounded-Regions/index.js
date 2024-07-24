// total sam

var solve = function (board) {
  const rows = board.length;
  const cols = board[0].length;
  const visit = new Set();
  const path = new Set();

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const pos = (r, c) => `${r}_${c}`;

  const dfs = (r, c) => {
    if (board[r][c] === "X" || path.has(pos(r, c))) {
      return true;
    }

    if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) {
      return false;
    }

    visit.add(pos(r, c));
    path.add(pos(r, c));

    let res = true;

    for (const [dr, dc] of directions) {
      res = res && dfs(r + dr, c + dc);
    }

    return res;
  };

  for (let r = 1; r < rows - 1; r++) {
    for (let c = 1; c < cols - 1; c++) {
      if (board[r][c] === "O" && !visit.has(pos(r, c))) {
        if (dfs(r, c)) {
          path.forEach((coord) => {
            const [r, c] = coord.split("_");
            board[r][c] = "X";
          });
        }
        path.clear();
      }
    }
  }

  return board;
};
