var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;

  const root = new TreeNode(preorder[0]);
  const mid = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder.slice(1, 1 + mid), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(1 + mid), inorder.slice(mid + 1));

  return root;
};
