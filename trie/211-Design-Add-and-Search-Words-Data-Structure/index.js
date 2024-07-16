// total sam

class Node {
  constructor() {
    this.end = false;
    this.children = {};
  }
}

var WordDictionary = function () {
  this.tree = new Node();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let cur = this.tree,
    i = 0;
  while (i < word.length) {
    if (!cur.children[word[i]]) {
      cur.children[word[i]] = new Node();
    }
    cur = cur.children[word[i]];
    if (i === word.length - 1) {
      cur.end = true;
    }
    i++;
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const dfs = (i, cur) => {
    if (i === word.length && cur.end) {
      return true;
    }

    if (word[i] !== "." && !cur.children[word[i]]) {
      return false;
    }

    if (word[i] == ".") {
      let res = false;
      for (const key of Object.keys(cur.children)) {
        res = res || dfs(i + 1, cur.children[key]);
      }
      return res;
    }

    return dfs(i + 1, cur.children[word[i]]);
  };

  return dfs(0, this.tree);
};
