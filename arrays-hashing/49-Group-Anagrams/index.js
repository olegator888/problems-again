/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const mp = {};

  for (const s of strs) {
    const sortedS = s
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
    if (!(sortedS in mp)) mp[sortedS] = [];
    mp[sortedS].push(s);
  }

  return Object.values(mp);
};
