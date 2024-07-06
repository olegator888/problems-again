class Heap {
  constructor(evaluate) {
    this.heap = [];
    this.ev = evaluate || ((val) => val);
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  pop() {
    const val = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }
    return val;
  }

  heapifyUp(i = this.heap.length - 1) {
    if (i === 0) return;
    const p = Math.floor((i - 1) / 2);
    if (this.ev(this.heap[i]) < this.ev(this.heap[p])) {
      this.swap(i, p);
      this.heapifyUp(p);
    }
  }

  heapifyDown(i = 0) {
    const left = i * 2 + 1;
    const right = i * 2 + 2;
    if (left >= this.heap.length) return;
    let smallest = left;
    if (
      right < this.heap.length &&
      this.ev(this.heap[right]) < this.ev(this.heap[left])
    ) {
      smallest = right;
    }
    if (this.ev(this.heap[i]) > this.ev(this.heap[smallest])) {
      this.swap(i, smallest);
      this.heapifyDown(smallest);
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  get size() {
    return this.heap.length;
  }
}

var kthSmallest = function (root, k) {
  const heap = new Heap();
  let res = null;

  const dfs = (node) => {
    if (!node) return;
    heap.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);

  while (k > 0) {
    res = heap.pop();
    k--;
  }

  return res;
};
