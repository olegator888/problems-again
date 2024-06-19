/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const n = 9

  for (let r = 0; r < n; r++) {
    const items = new Set()
    for (let c = 0; c < n; c++) {
      if (board[r][c] === ".") continue
      if (items.has(board[r][c])) return false
      items.add(board[r][c])
    }
  }

  for (let c = 0; c < n; c++) {
    const items = new Set()
    for (let r = 0; r < n; r++) {
      if (board[r][c] === ".") continue
      if (items.has(board[r][c])) return false
      items.add(board[r][c])
    }
  }

  for (let rg = 3; rg < n + 1; rg += 3) {
    for (let cg = 3; cg < n + 1; cg += 3) {
      const items = new Set()
      for (let r = rg - 3; r < rg; r++) {
        for (let c = cg - 3; c < cg; c++) {
          if (board[r][c] === ".") continue
          if (items.has(board[r][c])) return false
          items.add(board[r][c])
        }
      }
    }
  }

  return true  
};