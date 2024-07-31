/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;

  const nei = {};
  wordList.push(beginWord);
  for (const word of wordList) {
    for (let i = 0; i < word.length; i++) {
      const pattern = word.slice(0, i) + "*" + word.slice(i + 1);
      if (!nei[pattern]) nei[pattern] = [];
      nei[pattern].push(word);
    }
  }

  const q = [beginWord];
  const visit = new Set([beginWord]);
  let res = 0;
  while (q.length) {
    res += 1;
    let len = q.length;
    while (len) {
      const word = q.shift();
      if (word === endWord) return res;
      for (let j = 0; j < word.length; j++) {
        const pattern = word.slice(0, j) + "*" + word.slice(j + 1);
        if (!nei[pattern]) continue;
        for (const neiWord of nei[pattern]) {
          if (!visit.has(neiWord)) {
            visit.add(neiWord);
            q.push(neiWord);
          }
        }
      }
      len--;
    }
  }
  return 0;
};
