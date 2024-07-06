var kthSmallest = function (root, k) {
  const stack = [];
  let cur = root;

  while (stack.length > 0 || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    k -= 1;
    if (k === 0) return cur.val;
    cur = cur.right;
  }
};
