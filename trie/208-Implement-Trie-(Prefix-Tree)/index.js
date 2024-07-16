// total sam

class Node {
  constructor(isEnd = false) {
    this.isEnd = isEnd;
    this.children = {};
  }
}

var Trie = function () {
  this.trie = new Node();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let cur = this.trie;
  let i = 0;
  while (i < word.length) {
    if (!cur.children[word[i]]) {
      cur.children[word[i]] = new Node();
    }
    cur = cur.children[word[i]];
    cur.isEnd = cur.isEnd || i === word.length - 1;
    i++;
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const dfs = (i, cur) => {
    if (!cur?.children[word[i]] || i === word.length) {
      return false;
    }
    if (i === word.length - 1 && cur.children[word[i]].isEnd) {
      return true;
    }

    return dfs(i + 1, cur.children[word[i]]);
  };

  return dfs(0, this.trie);
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  const dfs = (i, cur) => {
    if (i === prefix.length) {
      return true;
    }
    if (!cur?.children[prefix[i]]) {
      return false;
    }

    return dfs(i + 1, cur.children[prefix[i]]);
  };

  return dfs(0, this.trie);
};
