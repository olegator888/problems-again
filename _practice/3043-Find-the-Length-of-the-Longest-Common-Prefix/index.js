// total sam 1st try!!!!!!!!!!!!!!!

class Trie {
  constructor() {
    this.children = {};
  }

  insert(word) {
    let cur = this;
    for (const c of word) {
      if (!cur.children.hasOwnProperty(c)) {
        cur.children[c] = new Trie();
      }
      cur = cur.children[c];
    }
  }

  getPrefixLength(word) {
    let cur = this;
    let res = 0;

    for (const c of word) {
      if (!cur.children.hasOwnProperty(c)) {
        return res;
      }
      res += 1;
      cur = cur.children[c];
    }

    return res;
  }
}

var longestCommonPrefix = function (arr1, arr2) {
  // construct trie
  const trie = new Trie();
  for (const n of arr2) trie.insert(String(n));

  let res = 0;
  for (const n of arr1) {
    res = Math.max(res, trie.getPrefixLength(String(n)));
  }

  return res;
};
