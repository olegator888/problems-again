// total sam

var reverseParentheses = function (s) {
  const stack = [];

  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    }

    if (s[i] === ")") {
      let l = stack.pop() + 1;
      let r = i - 1;
      while (l < r) {
        [s[l], s[r]] = [s[r], s[l]];
        l++;
        r--;
      }
    }
  }

  s = s.filter((c) => c !== "(" && c !== ")");

  return s.join("");
};
