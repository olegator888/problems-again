class Trie {
  constructor() {
    this.isWord = false;
    this.children = {};
  }

  addWord(word) {
    let cur = this;
    for (const c of word) {
      if (!cur.children[c]) {
        cur.children[c] = new Trie();
      }
      cur = cur.children[c];
    }
    cur.isWord = true;
  }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const rows = board.length;
  const cols = board[0].length;
  const root = new Trie();
  for (const w of words) {
    root.addWord(w);
  }
  const res = new Set();
  const visit = new Set();

  const dfs = (r, c, node, word) => {
    const pos = r * cols + c;
    if (
      r < 0 ||
      r == rows ||
      c < 0 ||
      c == cols ||
      visit.has(pos) ||
      !node.children[board[r][c]]
    ) {
      return;
    }

    node = node.children[board[r][c]];
    word += board[r][c];
    if (node.isWord) {
      res.add(word);
    }

    visit.add(pos);
    dfs(r - 1, c, node, word);
    dfs(r + 1, c, node, word);
    dfs(r, c - 1, node, word);
    dfs(r, c + 1, node, word);
    visit.delete(pos);
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dfs(r, c, root, "");
    }
  }

  return Array.from(res);
};
