class Heap {
  constructor({ heap, ev } = {}) {
    this.heap = [];
    if (heap) {
      for (const item of heap) {
        this.push(item);
      }
    }
    this.ev = ev || ((val) => val);
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  pop() {
    const val = this.heap[0];
    const last = this.heap.pop();
    if (this.size > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return val;
  }

  heapifyUp(i = this.size - 1) {
    if (i === 0) return;
    const p = Math.floor((i - 1) / 2);
    if (this.ev(this.heap[p]) > this.ev(this.heap[i])) {
      this.swap(i, p);
      this.heapifyUp(p);
    }
  }

  heapifyDown(i = 0) {
    const left = i * 2 + 1;
    const right = i * 2 + 2;
    if (left >= this.size) return;
    let smallest = left;
    if (
      right < this.size &&
      this.ev(this.heap[right]) < this.ev(this.heap[left])
    ) {
      smallest = right;
    }
    if (this.ev(this.heap[smallest]) < this.ev(this.heap[i])) {
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

var minimumCost = function (source, target, original, changed, cost) {
  const graph = {};
  for (let i = 0; i < original.length; i++) {
    if (!graph[original[i]]) graph[original[i]] = [];
    graph[original[i]].push([cost[i], changed[i]]);
  }

  const cache = {};
  const key = (s, t) => `${s}_${t}`;

  const letterCost = (s, t) => {
    if (key(s, t) in cache) return cache[key(s, t)];

    const heap = new Heap({ heap: [[0, s]], ev: (val) => val[0] });
    const visit = new Set();

    while (heap.size) {
      const [nodeCost, node] = heap.pop();
      if (node === t) {
        cache[key(s, t)] = nodeCost;
        return nodeCost;
      }
      if (visit.has(node)) continue;
      visit.add(node);
      for (const [neiCost, nei] of graph[node] || []) {
        if (!visit.has(nei)) {
          heap.push([nodeCost + neiCost, nei]);
        }
      }
    }

    return false;
  };

  let res = 0;
  for (let i = 0; i < source.length; i++) {
    const cost = letterCost(source[i], target[i]);
    if (cost === false) return -1;
    res += cost;
  }

  return res;
};
